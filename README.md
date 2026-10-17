# TP6 — EcoHarmony Park: Comprar entradas

Implementación inicial de la historia “Comprar entradas”, trabajada con ciclos
Red–Green–Refactor. El repositorio parte sin código previo.

## Tecnologías

- Backend: JavaScript, Node.js, Express y SQLite (`better-sqlite3`).
- Frontend: JavaScript, React y Vite.
- Pruebas: Jest, dobles de prueba e SQLite en memoria.

## Desarrollo local

Requiere Node.js 20.19 o posterior (también funciona con Node.js 22.12+ y 24).

```bash
npm install
npm test
```

En terminales separadas:

```bash
npm run dev:backend
npm run dev:frontend
```

La API escucha en `http://localhost:3001` y Vite en `http://localhost:5173`.
La base persistente se crea en `backend/data.sqlite`; las pruebas usan una base
en memoria.

En PowerShell se puede simular un rechazo de tarjeta así:

```powershell
$env:FAKE_CARD_OUTCOME = 'rejected'
npm run dev:backend
```

## Decisiones funcionales

- La sesión corresponde a un visitante de prueba (`id=1`); no hay registro ni
  inicio de sesión.
- Se pueden comprar hasta 10 entradas por visitante y fecha, contando compras
  anteriores. Las compras canceladas no consumen ese límite.
- El parque cierra los lunes, el 25 de diciembre y el 1 de enero. La visita puede
  programarse desde hoy hasta un mes calendario hacia adelante; para el mismo
  día, la compra cierra a las 17:30 (hora de Argentina).
- El pase común cuesta $10.000 y el VIP $20.000. Hasta 3 años inclusive no paga;
  de 4 a 15 y desde los 60 años inclusive paga la mitad.
- El efectivo queda pendiente hasta validarse en boletería. La tarjeta usa un
  adaptador simulado que puede aprobar o rechazar la transacción.
- El correo usa un adaptador de consola en desarrollo. Incluye un adjunto JSON
  simulado; todavía no se conecta SMTP ni se genera el PDF sugerido en la guía.

## API disponible

- `GET /api/health`
- `GET /api/me`
- `GET /api/ticket-types`
- `POST /api/quote`
- `POST /api/purchases`

Las validaciones y los precios viven en `backend/src/domain` y
`backend/src/services`; los adaptadores de persistencia, pago y correo se
inyectan desde `backend/src/server.js`.

## Ejercicios TDD: compraEntradas

Para ejecutar las pruebas del ejercicio de TDD de compra de entradas:

```bash
npx jest "Prueba BRUNO/compraEntradas.test.js"
```
