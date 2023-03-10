import styled from 'styled-components';
import { Theme } from '../../../interfaces/theme.interface';

export const ContainerInput = styled.div<{ theme: Theme }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 20px;
    height: 20%;
    width: 100%;

    
    label{
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;
    color: ${(props) => props.theme.header.textColor};
  }

  input {
    height: 48px;
    width: 100%;
    padding: 5px;
    border: none;
    color:  ${(props) => props.theme.input.color};
    border-bottom: 1px solid ${(props) => props.theme.header.textColor};
    background-color:  ${(props) => props.theme.form.backgroundColor};
  };

  .box_input_error {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
  }

  .box_label_error{
    height: 14px;
  }

  .dropdown {
      position: relative;
      top: 5px;
      display: inline-block;
      height:  16px;
      margin-left: 10px;
      
      .svg{
        color:red;

        width: 10px;
      }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${(props) => props.theme.white};
    min-width: 160px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1;
    border-radius: 0.15vw;

    color:red;
    margin: 0;

    p {
        font-size: 60%;
        width: fit-content;
        margin: 0;
        line-height: 20px;
    }
  }

  .dropdown:hover .dropdown-content {
      display: block;
  }
`;

export const ErrorsSpan = styled.span`
  font-size: 8px;
  margin: 0;
`;
