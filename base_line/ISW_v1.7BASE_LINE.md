# Versión v1.7 – Aprobación y Observaciones TP6: Desarrollo TDD

La baseline v1.7 se establece al alcanzar el **Hito de Corrección / Aprobación** del Trabajo Práctico Nro. 6, integrando formalmente la devolución y evaluación realizada por el equipo docente.

Se documentan las siguientes observaciones levantadas por la cátedra durante la auditoría de la User Story "Comprar entradas":

* **Reglas de Negocio Implícitas (Generación QR):** Se observó la ausencia de generación de Códigos QR en las entradas. La cátedra remarcó que un sistema de tickets moderno asume por defecto este método de validación de acceso, marcándolo como un estándar de la industria que el equipo debió deducir o consultar durante el relevamiento.
* **Falso Positivo en Pruebas Automatizadas:** En la suite de pruebas unitarias implementadas con Jest, se detectó un falso positivo en el caso de prueba `TC-84`. El uso de la aserción superficial `toBeDefined()` combinada con datos simulados (mocks) estáticos no evaluaba el comportamiento real del sistema.

Con el registro formal de este feedback, el Trabajo Práctico Nro. 6 cumple su ciclo de vida y queda definitivamente cerrado y aprobado bajo los estándares de nuestro Plan de Gestión de Configuración.