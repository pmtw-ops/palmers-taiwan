import fetchAPI from './fetch_api.js'

export async function getAllCollections(preview) {
  const data = await fetchAPI(
    `
    query Collections{
      collections {
        name
        images {
          name
          alternativeText
          caption
          formats
        }
      }
    }
  `
  )
  return data?.collections
}

export async function getAllProductsForCollection(preview) {
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