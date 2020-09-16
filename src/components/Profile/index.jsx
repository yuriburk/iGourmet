import React from 'react';

import FormInput from '../FormInput';
import { Container } from './styles';

const Profile = () => {
  return (
    <Container>
      <FormInput name={'email'} type="email" label={"Nome"} />
    </Container>
  );
};

export default Profile;
