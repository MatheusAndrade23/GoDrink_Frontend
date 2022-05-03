import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from '../Heading';

export const DrinkComponent = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  return (
    <Styled.Drink onClick={() => (window.location.href = `/drink/${idDrink}`)}>
      <img src={strDrinkThumb} alt={strDrink} />
      <Heading as="h6" size="small">
        {strDrink.length > 17 ? `${strDrink.slice(0, 15)}...` : strDrink}
      </Heading>
    </Styled.Drink>
  );
};

DrinkComponent.propTypes = {
  drink: P.object.isRequired,
};