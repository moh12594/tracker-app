import { createMachine, assign } from 'xstate';
import { fetchOrderDetailsById } from '../../api/fetch-order-details';
import { OrderDetails } from '../../types/OrderDetails';

type OrderDetailsContext = {
  orderDetails: OrderDetails;
} | null;

type OrderDetailsEvents = { type: 'FETCH_ORDER_DETAILS'; orderNumber: string };

export const orderDetailsMachine = createMachine(
  {
    id: 'order-details-machine',
    initial: 'idle',
    predictableActionArguments: true,
    context: {
      orderDetails: null,
    },
    schema: {
      context: {} as OrderDetailsContext | null,
      events: {} as OrderDetailsEvents,
    },
    tsTypes: {} as import("./order-details.machine.typegen").Typegen0,
    states: {
      idle: {
        on: {
          FETCH_ORDER_DETAILS: {
            target: 'fetching',
          },
        },
      },
      fetching: {
        invoke: {
          id: 'fetching-order-details',
          src: 'fetchOrderDetails',
          onDone: {
            actions: 'assignOrderDetails',
            target: 'initialized',
          },
          onError: {
            target: 'error',
          },
        }
      },
      initialized: {
        on: {
          FETCH_ORDER_DETAILS: {
            target: 'fetching',
          },
        },
      },
      error: {
        on: {
          FETCH_ORDER_DETAILS: {
            target: 'fetching',
          },
        },
      },
    },
  },
  {
    services: {
      fetchOrderDetails: (context, event) => fetchOrderDetailsById(event.orderNumber),
    },
    actions: {
      assignOrderDetails: assign({
        // @ts-ignore
        orderDetails: (_, event) => event.data.data[0]
      })
    },
  }
);
