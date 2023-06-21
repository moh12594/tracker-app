const BASE_API_URL = 'https://api.shipup.co';

// This api key should be secret but I added it here for the convinience of the app
const PRIVATE_API_KEY = 'lnWvjqugGwUay3jKE8j31w';

async function get(route: string): Promise<unknown> {
  try {
    const response = await fetch(`${BASE_API_URL}/${route}`,{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${PRIVATE_API_KEY}`
      },
      mode: 'cors',
      cache: 'default'
    });
    return response.json();
  } catch (error) {
    throw(error)
  }
};

export const HTTP = {
  get,
}
