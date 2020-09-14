import fetchAPI from './fetch_api.js'

export async function getAllCollections() {
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

export async function getOneCollectionProducts(name) {
  const data = await fetchAPI(
    `
    query oneCollectionProducts($where: JSON) {
      collections(where: $where) {
        products {
          name
        }
      }
    }
  `,
    {
      variables: {
        where: {
          name,
        },
      },
    }
  )
  return data?.collections[0];
}