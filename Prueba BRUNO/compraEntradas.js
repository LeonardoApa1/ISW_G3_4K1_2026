const validarUsuario = (usuario) => {
  if (usuario === null) {
    throw new Error('Debe iniciar sesión con un usuario registrado');
  }
  if (!usuario.registrado) {
    throw new Error('Se permite la compra solo a usuarios registrados');
  }
  if (usuario.id === null) {
    throw new Error('Identificador de usuario inválido');
  }
  return true;
};

const validarCantidadEntradas = (cantidad) => {
  if (cantidad < 1) {
    throw new Error('La cantidad de entradas debe ser al menos 1');
  }
  return true;
};

module.exports = {
  validarUsuario,
  validarCantidadEntradas,
};
