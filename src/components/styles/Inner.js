import styled from 'styled-components';

const Inner = styled.div`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 800;
  padding: 0 60px;

  @media all and (max-width: 960px) {
    display: table-cell;
    padding: 60px 10%;
  }

  @media all and (max-width: 340px) {
    padding: 0 5%;
  }
`;

export default Inner;
