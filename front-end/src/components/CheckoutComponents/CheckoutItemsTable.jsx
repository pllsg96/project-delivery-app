import React, { useContext } from 'react';
import DeliveryAppContext from '../../context/DeliveryAppContext';

const DATA_TESTID_NUMBER = 'customer_checkout__element-order-table-item-number-';
const DATA_TESTID_NAME = 'customer_checkout__element-order-table-name-';
const DATA_TESTID_QUANTITY = 'customer_checkout__element-order-table-quantity-';
const DATA_TESTID_UNITPRICE = 'customer_checkout__element-order-table-unit-price-';
const DATA_TESTID_SUBTOTAL = 'customer_checkout__element-order-table-sub-total-';
const DATA_TESTID_REMOVE = 'customer_checkout__element-order-table-remove-';

function CheckoutItemsTable() {
  const { cart, price, changeItemByInput } = useContext(DeliveryAppContext);

  return (
    <div>
      <h2>Finalizar pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem, index) => (
            <tr
              key={ index }
            >
              <td>
                <p
                  data-testid={ DATA_TESTID_NUMBER + index }
                >
                  {index + 1}
                </p>
              </td>
              <td>
                <p
                  data-testid={ DATA_TESTID_NAME + index }
                >
                  {cartItem.name}
                </p>
              </td>
              <td>
                <p
                  data-testid={ DATA_TESTID_QUANTITY + index }
                >
                  {cartItem.quantity}
                </p>
              </td>
              <td>
                <p
                  data-testid={ DATA_TESTID_UNITPRICE + index }
                >
                  {Number(cartItem.price).toFixed(2)
                    .replace('.', ',')}
                </p>
              </td>
              <td>
                <p
                  data-testid={ DATA_TESTID_SUBTOTAL + index }
                >
                  {(Number(cartItem.price * cartItem.quantity).toFixed(2))
                    .replace('.', ',')}
                </p>
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ DATA_TESTID_REMOVE + index }
                  onClick={ () => changeItemByInput(cartItem, 0) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        {' '}
        { (Number(price).toFixed(2)).replace('.', ',') }
      </p>
    </div>
  );
}

CheckoutItemsTable.propTypes = {

};

export default CheckoutItemsTable;
