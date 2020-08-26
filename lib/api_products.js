import fetchAPI from './fetch_api.js'

export async function getAllProducts(preview) {
  const data = await fetchAPI(
    `
    query Products {
      products {
        name
      }
    }
  `
  )
  return data?.products
}