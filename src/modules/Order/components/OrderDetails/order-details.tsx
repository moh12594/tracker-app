import { useMachine } from '@xstate/react';
import React, { useEffect } from 'react';
import { orderDetailsMachine } from './order-details.machine';

type OrderDetailsProps = {
  orderNumber: string;
};

function OrderDetails({
  orderNumber,
}: OrderDetailsProps) {
  const [state, send] = useMachine(orderDetailsMachine);

  useEffect(() => {
    send({ type: 'FETCH_ORDER_DETAILS', orderNumber });
  }, [send, orderNumber]);

  return state.matches('fetching') || state.matches('idle') ? (
    <div>Loading...</div>
  ) : (
    <div>{JSON.stringify(state.context?.orderDetails)}</div>
  );
}

export default OrderDetails;
