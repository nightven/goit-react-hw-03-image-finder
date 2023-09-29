import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    .button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://img.icons8.com/ios/50/search--v1.png');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 1;
    }
  }
  .button-lable {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
  .input {
    display: inline-block;
    width: 400px;
    height: 48px;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    &::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }
`;
