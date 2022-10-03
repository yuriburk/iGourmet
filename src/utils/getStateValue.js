import { OptionTypeBase } from 'react-select';

const getStateValue = (ref, isMulti) => {
  if (isMulti) {
    if (!ref.state.value) {
      return [];
    }

    return ref.state.value.map((option) => option.value);
  }
  if (!ref.state.value || !ref.state.value.value) {
    return '';
  }

  return ref.state.value.value;
};

export default getStateValue;
