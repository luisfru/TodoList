import React from "react";

import {
  StyleModalRemoveBase,
  StyleModalMain,
  StyleModalHeader,
  StyleModalFooter,
} from "../styles/components/ModalRemove";

const ModalRemove = () => {
  return (
    <StyleModalRemoveBase>
      <StyleModalMain>
        <StyleModalHeader>
          <h1>ModalRemove</h1>
          <button>Cerrar</button>
        </StyleModalHeader>
        <div>
          <p>¿Estas seguro que deseas eliminar?</p>
        </div>
        <StyleModalFooter>
          <button>Cancelar</button>
          <button>Borrar</button>
        </StyleModalFooter>
      </StyleModalMain>
    </StyleModalRemoveBase>
  );
};

export default ModalRemove;
