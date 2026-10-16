const MENSAJES_ERROR = {
  USUARIO_NO_PROPORCIONADO: 'Debe iniciar sesión con un usuario registrado',
  USUARIO_NO_REGISTRADO: 'Se permite la compra solo a usuarios registrados',
  ID_USUARIO_INVALIDO: 'Identificador de usuario inválido',
  CANTIDAD_INVALIDA: 'La cantidad de entradas debe ser al menos 1',
};

const validarUsuario = (usuario) => {
  if (usuario === null) {
    throw new Error(MENSAJES_ERROR.USUARIO_NO_PROPORCIONADO);
  }
  if (!usuario.registrado) {
    throw new Error(MENSAJES_ERROR.USUARIO_NO_REGISTRADO);
  }
  if (usuario.id === null) {
    throw new Error(MENSAJES_ERROR.ID_USUARIO_INVALIDO);
  }
  return true;
};

const validarCantidadEntradas = (cantidad) => {
  if (cantidad < 1) {
    throw new Error(MENSAJES_ERROR.CANTIDAD_INVALIDA);
  }
  return true;
};

module.exports = {
  MENSAJES_ERROR,
  validarUsuario,
  validarCantidadEntradas,
};
