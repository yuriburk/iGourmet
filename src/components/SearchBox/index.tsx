import React, { useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import debounce from 'lodash.debounce';

import { ISearchProps } from '../../models/global';
import { Container } from './styles';

const SearchBox: React.FC<ISearchProps> = ({
  onChange,
  debounceTime = 200,
  placeholder = 'Pesquise aqui...',
  containerStyle = {},
  ...rest
}) => {
  const debouncedCallback = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => onChange(event),
    debounceTime,
  );

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();
      debouncedCallback(event);
    },
    [debouncedCallback],
  );

  return (
    <Container style={containerStyle}>
      <input placeholder={placeholder} onChange={handleOnChange} {...rest} />
      <FiSearch />
    </Container>
  );
};

export default SearchBox;
