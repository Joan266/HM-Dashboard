import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Message = styled.p`
  margin: 20px 0;
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.button`
  background: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #0056b3;
  }
`;