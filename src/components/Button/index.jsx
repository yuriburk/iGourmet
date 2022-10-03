import React from 'react';

import { Container } from './styles';

const Button = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <p>Loading...</p> : children}
  </Container>
);

export default Button;
