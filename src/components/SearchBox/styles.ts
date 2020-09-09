import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ReactLoading from 'react-loading';

export const CardComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  margin: 5px 0;
  border: 2px solid;
  border-radius: 4px;
  border-color: ${props => props.theme.colors.primaryWhite};
  box-shadow: 0px 1px 4px 0px rgba(240, 242, 245, 1);
`;

export const Container = styled.div`
  position: relative;
`;

export const Card = styled(CardComponent)`
  margin: 0;
  height: 48px;
`;

export const SearchIcon = styled(FiSearch)`
  color: ${props => props.theme.colors.tertiaryGray};
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  font-size: 18px;
`;

export const LoadingIcon = styled(ReactLoading).attrs(props => ({
  color: props.theme.colors.tertiaryGray,
  type: 'spin',
  height: '24px',
  width: '24px',
}))``;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  color: ${props => props.theme.colors.tertiaryGray};
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const ItemsContainer = styled(CardComponent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  overflow: auto;
  max-height: 289px;
  width: 100%;
  margin: 0;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: ${props => props.theme.colors.primaryWhite};
  z-index: 1;
  div + div {
    border-top: 2px solid;
    border-color: ${props => props.theme.colors.primaryWhite};
  }
`;

export const Item = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 16px;
  position: relative;
`;
