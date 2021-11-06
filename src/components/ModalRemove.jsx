import React from "react";
import PropTypes from "prop-types";

import {
  StyleModalRemoveBase,
  StyleModalMain,
  StyleModalHeader,
  StyleModalFooter,
} from "../styles/components/ModalRemove";

const ModalRemove = ({ handleCloseModal }) => {
  return (
    <StyleModalRemoveBase>
      <StyleModalMain>
        <StyleModalHeader>
          <h1>ModalRemove</h1>
          <button onClick={handleCloseModal}>Cerrar</button>
        </StyleModalHeader>
        <div>
          <p>¿Estas seguro que deseas eliminar?</p>
        </div>
        <StyleModalFooter>
          <button onClick={handleCloseModal}>Cancelar</button>
          <button>Borrar</button>
        </StyleModalFooter>
      </StyleModalMain>
    </StyleModalRemoveBase>
  );
};

ModalRemove.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default ModalRemove;
