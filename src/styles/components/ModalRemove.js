import styled from "styled-components";

export const StyleModalRemoveBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const StyleModalMain = styled.div`
  position: fixed;
  background: white;
  border-radius: 15px;
  padding: 15px;
  width: 30%;
  height: auto;
`;

export const StyleModalHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
`;

export const StyleModalFooter = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
