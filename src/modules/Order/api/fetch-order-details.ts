import { HTTP } from "../../../shared/api/fetch";
import { OrderDetails } from "../types/OrderDetails";

export async function fetchOrderDetailsById(orderNumber: string): Promise<OrderDetails | Error> {
  return await HTTP.get(`/v2/orders?order_number=${orderNumber}`) as Promise<OrderDetails | Error> 
}
