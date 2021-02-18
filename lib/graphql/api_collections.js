import fetchAPI from '../fetch_api.js'

export async function getAllCollections() {
  const data = await fetchAPI(
    `
    query Collections{
      collections {
        name
        images {
          name
          url
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
          url
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
        featureImage {
          name
          url
          alternativeText
          caption
          formats
        }
        products {
          name
          name_en
          sku
          price
          collections {
            name
          }
          images {
            name
            url
            alternativeText
            caption
            formats
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
    query allProductPaths {
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