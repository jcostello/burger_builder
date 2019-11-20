import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../../components/UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((key) => {
      return <li key={key}>
        <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
      </li>
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicius Burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button buttonType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
      <Button buttonType='Success' clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
  );
}

export default orderSummary