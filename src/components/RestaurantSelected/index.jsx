import React from 'react';

import Presentation from '../Presentation';
import Card from './PresentationCard';
import { Container, ItemsContainer, PresentationContainer, PresentationText, NoData } from './styles';

const RestaurantSelected = ({
  filter,
  restaurant,
}) => {

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tellus quis enim malesuada tincidunt. In eu neque justo. Duis in interdum nunc. In in convallis sem, sed congue sapien. Suspendisse bibendum consequat quam. Quisque sit amet maximus leo. In eget pulvinar turpis. Suspendisse eleifend risus commodo dui condimentum, eu hendrerit risus sagittis. Morbi vulputate ligula vitae convallis vestibulum. Suspendisse potenti. In molestie at tellus quis accumsan. Quisque tempus, quam et viverra vehicula, mauris tellus mollis magna, eu faucibus elit nulla eget nisl. Curabitur auctor a elit non dictum. Sed tincidunt eleifend justo, in porta velit suscipit non. Nam interdum, sem id rutrum facilisis, erat erat vestibulum risus, at maximus est ligula sed lacus. In non est eget ligula porta fermentum.";

  function isInFilter(value) {
    return value.id == filter;
  }

  if (filter) restaurant = restaurant.filter(isInFilter)[0];

  console.log(restaurant)

  return (
    <Container>  
      {restaurant &&
      (
        <>
        <PresentationContainer>
          <Presentation title={restaurant.name} isColor={true} />
          <PresentationText>{text}</PresentationText>
        </PresentationContainer>
        </>
      )}
      {!restaurant && <NoData>Sem Registros :(</NoData>}
    </Container>
  );
};

export default RestaurantSelected;
