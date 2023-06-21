export type OrderDetails = {
  object: string,
  id: number,
  canceled: boolean,
  custom_variables: {
    [key: string]: unknown,
  },
  email: string,
  first_name: string,
  // We could type it as LanguageCode with all available values to be more precise
  language_code: string,
  last_name: string,
  merchant_id: string,
  mute_notifications: boolean,
  order_number: string,
  ordered_at: Date,
  phone?: string,
  shipping_addres?: string,
  uuid: string,
  created_at: Date,
  updated_at: Date,
  fulfillments?: {
    [key: string]: unknown,
  },
  line_items?: {
    [key: string]: unknown,
  },
  notifications?: {
    [key: string]: unknown,
  },
}
