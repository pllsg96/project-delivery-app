import React from 'react';

function OrderTable() {
  return (
    // < className="order-wrap">
    <table>
      <thead>
        <tr>
          <th>
            Item
          </th>
          <th>
            Descrição
          </th>
          <th>
            Quantidade
          </th>
          <th>
            Valor unitário
          </th>
          <th>
            Sub-total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
        </tr>
      </tbody>
    </table>
  );
}

export default OrderTable;
