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

export async function getCollectionsStatic() {
  const data = await fetchAPI(
    `
    query getCollectionsStatic {
      collectionsStatic {
        title
        metaTitle
        metaDescription
        image {
          name
          alternativeText
          caption
          formats
        }
      }
    }
  `
  )
  return data?.collectionsStatic
}

export async function getOneCollectionProducts(name) {
  const data = await fetchAPI(
    `
    query oneCollectionProducts($where: JSON) {
      collections(where: $where) {
        products {
          name
          sku
          collections {
            name
          }
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

export async function getAllProductPaths() {
  const data = await fetchAPI(
    `
    query getAllProductPaths {
      products {
        product: sku
        collections {
          name
        }
      }
    }
  `
  )
  return data?.products;
}

export async function getOneProductDetails(p) {
  let p_collection = p.collection
  let sku = p.product
  const data = await fetchAPI(
    `
    query getOneProductDetails($where: JSON) {
      products(where: $where) {
        name
        description
      }
    }
  `,
    {
      variables: {
        where: {
          p_collection,
          sku
        },
      },
    }
  )
  return data?.products;
}