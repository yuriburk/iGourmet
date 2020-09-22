import React from 'react';
import { Form } from '@unform/web';

import FormInput from '../FormInput';
import { Container } from './styles';

const Profile = () => {
  function handleSubmit(data) {
    // do something when form is submitted
  }

  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <FormInput name={'email'} type="email" label={"Nome"} />
    </Form>
    </Container>
  );
};

export default Profile;
