import React, {
  useRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import debounce from 'lodash.debounce';
import { useHistory } from "react-router-dom";

import Highlighter from '../Highlighter';
import {
  Container,
  Card,
  SearchIcon,
  Input,
  LoadingIcon,
  CloseIcon,
  ItemsContainer,
  Item,
} from './styles';

const SearchBox = ({
  onChange,
  items,
  onItemClick,
  debounceTime = 800,
  placeholder = 'Pesquisar',
}) => {
  const inputRef = useRef(null);
  const isMounted = useRef(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchWords, setSearchWords] = useState([]);

  let history = useHistory();

  function handleClick(location) {
    history.push(`/restaurantes?categories=${location}`);
  }

  const debouncedChange = useMemo(
    () =>
      debounce(async (value) => {
        await onChange(value);

        if (isMounted.current) setIsLoading(false);
      }, debounceTime),
    [onChange, debounceTime],
  );

  useEffect(() => {
    return () => {isMounted.current = false};
  }, []);

  const handleOnChange = useCallback(
    event => {
      event.persist();
      const { value } = event.target;

      setSearchWords(value.split(' '));

      if (value.length > 0) {
        setIsLoading(true);
        debouncedChange(value);
      }
    },
    [debouncedChange],
  );

  const handleOnBlur = useCallback(() => {
    inputRef.current.value = '';
    setSearchWords(inputRef.current.value.split(' '));
  }, []);

  const handleOnItemClick = useCallback(
    item => {
      onItemClick(item);
    },
    [onItemClick],
  );

  return (
    <Container>
      <Card>
        <SearchIcon />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          onChange={handleOnChange}    
          data-testid="SearchBox-Input"
        />
        {isLoading ? (
          <LoadingIcon />
        ) : (
          inputRef.current?.value.length > 0 && <CloseIcon onClick={handleOnBlur} />
        )}
      </Card>
      {items?.length > 0 && inputRef.current?.value.length > 0 && (
        <ItemsContainer>
          {items.map((item, index) => (
            <Item
              key={index}
              onClick={() => handleClick(item.value.id)}
              data-testid="SearchBox-Item"
            >
              <Highlighter searchWords={searchWords} text={item.label} />
            </Item>
          ))}
        </ItemsContainer>
      )}
    </Container>
  );
};

export default SearchBox;
