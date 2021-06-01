import styled from 'styled-components';

const Input = styled.input`
  border: none;
  font-size: 42px;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;

  &:focus {
    outline: 0;
  }

  & + label {
    display: block;
    position: relative;
    white-space: nowrap;
    width: 78%;
    border-top: 5px solid #ffe200;
  }

  &:focus,
  &:valid {
    padding-top: 35px;
    color: #ffffff;
  }

  &:focus + label > span,
  &:valid + label > span {
    top: -100px;
    font-size: 22px;
  }

  & + label > span {
    font-weight: 300;
    margin: 0;
    position: absolute;
    font-size: 32px;
    top: -66px;
    left: 0px;
    -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  }
`;

export default Input;
