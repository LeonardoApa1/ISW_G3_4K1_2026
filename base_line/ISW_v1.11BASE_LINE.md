# Versión v1.11 – Entrega Trabajo de Investigación 1: Despliegue OTA IIoT

La baseline v1.11 se establece al alcanzar el **Hito de Entrega Inicial** del primer Trabajo de Investigación Grupal, de acuerdo con el ciclo de vida definido en nuestro Plan de Gestión de Configuración.

El propósito de esta iteración fue investigar y diseñar un plan de lanzamiento sólido para la actualización remota (Over-The-Air) de sensores industriales de temperatura y humedad operando bajo conectividad crítica. El estudio aborda la transición controlada de la versión base de firmware (`fw-temp-hum-v2.0.4.bin`) a una nueva versión (`fw-temp-hum-v2.1.0.bin`) en plantas fabriles aisladas.

Los Ítems de Configuración generados en esta salida y consolidados en el repositorio evidencian la aplicación de los siguientes conceptos clave para la materia:
* **Gobernanza y Calidad:** Implementación de control SCM con trazabilidad Git para hardware (HW-REV-3), integración continua (pruebas en banco físico) y entrega controlada con firmas criptográficas (ECDSA sobre SHA-256).
* **Estrategia de Despliegue:** Diseño de una arquitectura híbrida que combina un modelo Pull diario (vía CoAP/DTLS) y un modelo Push local en red cerrada (vía pasarela MQTT).
* **Gestión de Riesgos (Anti-bloqueo):** Definición de requisitos de reversión autónoma como el resguardo en EEPROM, uso de MCUboot 1.2, exigencia de >70% de batería y ventanas de actualización en turno valle (Martes 02:00).
* **Aporte Original:** Propuesta de observabilidad y propagación mediante una malla epidémica P2P vía BLE para alcanzar nodos en sótanos aislados.

