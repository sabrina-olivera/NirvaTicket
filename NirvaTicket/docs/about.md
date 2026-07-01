## NIRVA TICKET

**Introducción y propuesta**

El proyecto consiste en el **desarrollo de un sistema de gestión empresarial de tipo ERP orientado a comerciantes y empresas dedicados a la compra-venta de insumos** que operan en locales físicos. Se propone una plataforma integral de uso para personal de la empresa y supervisores, que centraliza y automatiza los principales procesos operativos y administrativos de cualquier negocio de estas características, con el objetivo de mejorar la eficiencia y brindar visibilidad completa sobre el estado del comercio en tiempo real.

**Alcance**

Dado el alcance amplio del proyecto y la diversidad de funcionalidades que contempla, **se adopta un enfoque de desarrollo incremental organizado en módulos, priorizando aquellos que conforman el núcleo operativo del sistema. Esta decisión permite entregar un Producto Mínimo Viable (MVP) funcional** en etapas tempranas, reduciendo el riesgo y habilitando validaciones concretas antes de avanzar hacia funcionalidades de mayor complejidad.
En resumen, este sistema representa una solución escalable para comercios que buscan modernizar su gestión operativa al integrar en una única plataforma la facturación, el control de inventario, la gestión de ventas multicanal, el registro de personal y la coordinación entre sucursales, la propuesta apunta a reducir la fragmentación de procesos y a brindar a los responsables del negocio una visión clara, centralizada y confiable de toda la operación

Cada objetivo del proyecto se plantea siguir con **metodología SMART**
Se plantean **objetivos especificos**, dividiendo las funcionalidades y desarrollándose módulo a módulo, para luego poder ser vinculados y generar interoperabilidad.
Las metricas están pensadas en base al funcionamiento del mismo, considerando que **los objetivos tienen parámetros alcanzables, medibles a través del correcto funcionamiento de los entregables**. Luego, se irá complejizando su desarrollo al complementar con más funcionalidades.
Su relevancia proviene de una **necesidad real en el mundo del comercio**: todas las tiendas hoy en día precisan de un sistema de gestión completo y fiable para poder gestionar sus cobranzas y que a la vez sea intuitivo para cualquier persona que comience a utilizar el sistema, que a la vez sea capaz de vincularse con plataformas populares ya existentes.
Finalmente la integración de **límites de tiempo acotados** con iteraciones permite mantener el foco, hacer seguimiento del avance y tomar decisiones informadas a lo largo del desarrollo.

---

## Stakeholders

### Internos

- **Sector de vendedores:** operan el punto de venta, registran ventas y emiten 
facturas. Requieren una interfaz rápida y simple que minimice errores en caja y 
permita asentar las acciones del día a día.

- **Sector de logística:** influyen en el stock al generar los remitos de preparación y envío de mercadería y los 
movimientos entre sucursales. Requieren control preciso del inventario en tiempo real.

- **Sector de supervisores:** supervisan las operaciones diarias y coordinan al 
personal. Requieren visibilidad del estado de cada sector y sucursal.

- **Directivos / CEOs:** tienen control estratégico sobre la empresa y aportan 
capital. Requieren herramientas para analizar métricas del negocio a través de 
dashboards y reportes con visión global de la operación.

### Externos

- **Clientes del comercio:** reciben los comprobantes de venta y son los 
destinatarios finales de la operación. Su experiencia se ve afectada directamente 
por la velocidad y precisión del sistema en el punto de venta.

- **Proveedores de insumos:** sus entregas se registran en el sistema a través del 
módulo de recepción de mercadería, impactando automáticamente en el inventario.

- **Área contable / administración:** consume los datos de facturación y stock 
generados por el sistema para el cierre contable y la gestión administrativa.

---

## Metodología de desarrollo: Scrumban

Se adopta **Scrumban** como metodología de trabajo, una combinación entre 
**Scrum** y **Kanban** que permite aprovechar elementos de ambos marcos según 
las necesidades del proyecto.
Dado que el equipo de desarrollo es mínimo, la rigidez de los ciclos de sprint 
propios de Scrum puro no resulta adecuada, sin embargo con Scrumban se permite mantener la 
organización y trazabilidad del trabajo a través del backlog y los requerimientos, 
sin imponer una cadencia de entrega fija que no se condice con la realidad del equipo.
Esta metodología se alinea además con el enfoque incremental adoptado para el 
proyecto: las funcionalidades se desarrollan módulo a módulo, priorizando el 
MVP, y el backlog se actualiza y reordena a medida que avanza el desarrollo.

En detalle, de **Scrum** se toma:
- El uso de un **backlog priorizado** como fuente única de trabajo pendiente
- La definición de requerimientos e historias de usuario como unidad de planificación
- La noción de responsabilidades sobre las tareas

De **Kanban** se toma:
- El flujo de trabajo continuo mediante un tablero de estados 
- La ausencia de sprints fijos, adecuada al tamaño reducido del equipo de desarrollo
- La priorización dinámica de tareas según el avance del proyecto

---

## Requerimientos

### Funcionales:

RF1: **Gestión de facturacion de tickets**: Permite generar, administrar y consultar comprobantes de venta. 


RF2: **Módulo de inventario**: Visualización del stock disponible en todo momento y modificaciones manuales cuando se requiera.

RF3: **Recepción de mercadería**: Cada ingreso de stock queda registrado automáticamente y actualiza el inventario sin intervención adicional.

RF4: **Fichaje de empleados**: Registra horarios de entrada y salida, facilitando el control de asistencia y la gestión de recursos humanos.

RF5: **Gráficos de ventas por sucursal**: Visualización comparativa del rendimiento entre sucursales para la toma de decisiones estratégicas.

RF6: **Transferencia de mercadería entre sucursales**: Gestión del envío y recepción de stock entre locales, con impacto automático en los inventarios de origen y destino.

### No funcionales:

RNF1: **Trazabilidad**: Cada transacción queda registrada y es auditable en todo momento.

RNF2: **Integración con tienda online**: La plataforma se integra con servicios externos de venta online, procesando esos pedidos de forma unificada sin que el operador deba alternar entre herramientas. 

---

## Seguimiento del proyecto

El tablero Kanban y roadmap se gestionan en: https://github.com/users/sabrina-olivera/projects/2
