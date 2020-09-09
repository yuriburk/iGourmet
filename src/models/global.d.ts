import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { IconBaseProps } from 'react-icons';

export interface ITooltipProps {
  title: string;
  className?: string;
}

export interface IMenuItem {
  icon: IconType;
  title: string;
  url: string;
}

export interface IControl {
  isEnabled: boolean;
  handleSetIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISearchProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  debounceTime?: number;
  placeholder?: string;
  containerStyle?: Record<string, unknown>;
}

export interface IRestaurant {
  img: string;
  name: string;
  categories?: string;
}

export interface IRestaurants {
  filter?: string;
  restaurants: IRestaurant[];
  title: string;
}

export interface IMore {
  title: string;
  link: string;
}

export interface IRecommendation {
  recommendations: any;
  title: string;
  more: IMore;
}

export interface IPresentation {
  title: string;
  link?: string;
}

export interface IOffer {
  img: string;
  offer_name: string;
  restaurant_name: string;
  old_price: string;
  offer_price: string;
}

export interface IOffers {
  offers: IOffer[];
  title: string;
  link: string;
}

export interface IHeaderProps {
  leftComponent?: React.ReactNode;
  title: string;
}

export interface IProps extends SelectProps<OptionTypeBase> {
  name: string;
  placeholder?: string;
  label?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  containerStyle?: Record<string, unknown>;
  icon?: React.ComponentType<IconBaseProps>;
}

export interface ICategorie {
  id: string;
  img?: string;
  name: string;
  full_img?: string;
}

export interface ICategories {
  categories: ICategorie[];
  title: string;
  link?: string;
}

interface IInputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

interface IWindowDimensions {
  width: number;
  height: number;
}

interface IAny {
  location: {
    search?: any;
  };
}
