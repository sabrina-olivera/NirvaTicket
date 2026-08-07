package com.service;

import com.dto.TicketDetailRequestDTO;
import com.dto.TicketRequestDTO;
import com.exception.*;
import com.model.*;
import com.repository.ClientRepository;
import com.repository.ItemRepository;
import com.repository.TicketRepository;
import com.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;
    private final ClientRepository clientRepository;
    private final UserRepository userRepository;
    private final ItemRepository itemRepository;

    public TicketService(TicketRepository ticketRepository, ClientRepository clientRepository,
                         UserRepository userRepository, ItemRepository itemRepository) {
        this.ticketRepository = ticketRepository; //se asocia con el id - se puede generar al final
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
        this.itemRepository = itemRepository;
    }


    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    public Ticket findById(Long id) {
        return ticketRepository.findById(id)
                .orElseThrow(() -> new TicketNotFoundException(id));
    }


    //logica de crear ticket, la más compleja
    public Ticket create(TicketRequestDTO dto) {
        Client client = clientRepository.findById(dto.getClientId()) //ENTIDAD TICKET - buscamos id del cliente que compra
                .orElseThrow(() -> new ClientNotFoundException(dto.getClientId()));

        User user = userRepository.findById(dto.getUserId()) //ENTIDAD TICKET: buscamos id de user que emite ticket
                .orElseThrow(() -> new UserNotFoundException(dto.getUserId()));

        //generamos Ticktet con sus atributos
        Ticket ticket = new Ticket(); //ENTIDAD TICKET
        ticket.setClient(client); //setteamos client
        ticket.setUser(user); //setteamos user
        ticket.setDate(LocalDate.now());

        List<TicketDetail> details = new ArrayList<>(); //UN TICKET GENERA MUCHOS TICKETDETAIL (por cada item que se cobra, con su cantidad y precio final)
        BigDecimal total = BigDecimal.ZERO;

        //Analizamos cada elemento del ArrayList de TicketDetail
        for (TicketDetailRequestDTO detailDto : dto.getDetails()) { //de ticketDetail solo usamos sus atributos itemId, quantity, discount, por cómo está armado el DTO

            Item item = itemRepository.findById(detailDto.getItemId()) //buscamos el id del item que se ingresó)
                    .orElseThrow(() -> new ItemNotFoundException(detailDto.getItemId()));

                //analizamos quantity que tiene el item seleccionado (tomamos cantidad que se cobró de cierto item)
                //si item.getStock es más chico que la cantidad que queremos cobrar...
                if (item.getStock() < detailDto.getQuantity()) {
                    throw new InsufficientStockException(item.getName(), item.getStock()); //error
                }

                //analizamos si el item seleccionado tiene algun descuento aplicado
                BigDecimal discount = detailDto.getDiscountPercentage() != null
                        ? detailDto.getDiscountPercentage()
                        : BigDecimal.ZERO;

                //validamos que el descuento este dentro de valores logicos (de 0 a 100)
                if (discount.compareTo(BigDecimal.ZERO) < 0 || discount.compareTo(BigDecimal.valueOf(100)) > 0) {
                    throw new InvalidDiscountException(discount);
                }

                BigDecimal discountMultiplier = BigDecimal.ONE.subtract(
                        discount.divide(BigDecimal.valueOf(100))
                );
                BigDecimal finalPrice = item.getPrice().multiply(discountMultiplier);

            //restamos la cantidad que cobramos del stock de item. guardamos el nuevo valor de stock de item
            item.setStock(item.getStock() - detailDto.getQuantity());
            itemRepository.save(item);

            //generamos nuevo ticketdetail con sus atributos
            TicketDetail detail = new TicketDetail();
            detail.setTicket(ticket); //ya setteado arriba
            detail.setItem(item);
            detail.setQuantity(detailDto.getQuantity());
            detail.setPrice(finalPrice); //con el precio generado, no el precio original del item
            detail.setDiscountPercentage(discount);

            //obtenemos subtotal de usar, precio del item * cantidad del DTO de TicketDetailRequestDTO
            //todo: SI SE SETTEO EN FRONTEND QUE VENGA CON ESE VALOR TAMBIEN. QUE NO LO CALCULE EL BACK, NO?...
            BigDecimal subtotal = finalPrice.multiply(BigDecimal.valueOf(detailDto.getQuantity()));
            total = total.add(subtotal);

            details.add(detail);
        }

//        le decimos al objeto ticket "estos son tus detalles" — conectando lista de detail, con Ticket. Sin esa línea, el Ticket se guardaría sin ningún detalle asociado, aunque hayamos creado los objetos TicketDetail en la variable local.
        ticket.setDetails(details);
        ticket.setTotal(total);

        return ticketRepository.save(ticket);
    }
}
