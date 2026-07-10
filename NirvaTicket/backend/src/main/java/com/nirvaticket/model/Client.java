@Entity
@Table(name = "clients")
@Data // Lombok: genera getters/setters/toString/equals
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @NotNull
    @Email
    private String mail;

    @NotNull
    private String dni;
}