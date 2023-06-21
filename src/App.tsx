import React from 'react';
import OrderDetails from './modules/Order/components/OrderDetails/order-details';

const TEST_ORDER_NUMBER = 'UK1876YH08_2'

function App() {
  return (
    <OrderDetails orderNumber={TEST_ORDER_NUMBER} />
  );
}

export default App;
