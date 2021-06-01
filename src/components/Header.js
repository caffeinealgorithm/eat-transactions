import React from 'react';
import Base from './styles/Header';
import Main from './styles/Main';
import Inner from './styles/Inner';
import Content from './Content';

const Header = () => (
  <Base>
    <Main>
      <Inner>
        <Content />
      </Inner>
    </Main>
  </Base>
);

export default Header;
