INSERT INTO items (name, sku, stock, price) VALUES
('Zapatillas Running', 'ZR-001', 50, 45000.00),
('Remera Deportiva', 'RD-002', 100, 12000.00),
('Short Training', 'ST-003', 30, 15000.00);

INSERT INTO clients (name, mail, dni) VALUES
('Juan Pérez', 'juan@mail.com', '30111222'),
('María López', 'maria@mail.com', '28555666');

INSERT INTO users (rol, mail, name, password) VALUES
('ADMIN', 'admin@nirvaticket.com', 'Admin User', 'temporal123');

-- 4. Tickets — depende de clients y users
INSERT INTO tickets (client_id, user_id, total, date) VALUES
 (1, 1, 57000.00, '2026-08-01');

-- 5. Ticket details — depende de tickets e items
INSERT INTO ticket_details (ticket_id, item_id, quantity, price) VALUES
(1, 1, 1, 45000.00),
(1, 2, 1, 12000.00);