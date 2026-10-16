const { validarUsuario, validarCantidadEntradas } = require('./compraEntradas');

describe('Validación de usuario', () => {
  test('TC-01: Rechazar compra cuando el usuario no es proporcionado', () => {
    expect(() => validarUsuario(null)).toThrow('Debe iniciar sesión con un usuario registrado');
  });

  test('TC-02: Rechazar compra cuando el usuario no está registrado', () => {
    expect(() => validarUsuario({ id: 1, registrado: false })).toThrow('Se permite la compra solo a usuarios registrados');
  });

  test('TC-03: Rechazar compra cuando el usuario registrado no tiene ID válido', () => {
    expect(() => validarUsuario({ id: null, registrado: true })).toThrow('Identificador de usuario inválido');
  });

  test('TC-04: Permitir validación cuando el usuario está registrado y es válido', () => {
    expect(validarUsuario({ id: 10, registrado: true })).toBe(true);
  });
});

describe('Validación de cantidad de entradas', () => {
  test('TC-05: Rechazar compra cuando la cantidad de entradas es 0 (Valor límite inferior inválido)', () => {
    expect(() => validarCantidadEntradas(0)).toThrow('La cantidad de entradas debe ser al menos 1');
  });

  test('TC-06: Rechazar compra cuando la cantidad de entradas es negativa', () => {
    expect(() => validarCantidadEntradas(-3)).toThrow('La cantidad de entradas debe ser al menos 1');
  });

  test('TC-07: Aceptar compra cuando la cantidad de entradas es 1 (Valor límite inferior válido)', () => {
    expect(validarCantidadEntradas(1)).toBe(true);
  });

  test('TC-08: Aceptar compra con una cantidad intermedia de entradas', () => {
    expect(validarCantidadEntradas(5)).toBe(true);
  });

  test('TC-09: Aceptar compra cuando la cantidad de entradas es exactamente 10 (Valor límite superior válido)', () => {
    expect(validarCantidadEntradas(10)).toBe(true);
  });
});
