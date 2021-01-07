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

export async function getOneProductDetails(p) {
  let p_collection = p.collection
  let sku = p.product
  const data = await fetchAPI(
    `
    query oneProductDetails($where: JSON) {
      products(where: $where) {
        name
        name_en
        measurement
        origin
        expiration
        images {
          name
          url
          alternativeText
          caption
          formats
        }
        collections {
          name
        }
        sku
        description
        detail
        price
        feature
        skin_type
        uses
        direction
        storage
        warning
        metaTitle
        metaDescription
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
  return data?.products[0];
}

export async function getRelatedProduct(p) {
  let p_collection = p.collection
  let sku = p.product
  const data = await fetchAPI(
    `
    query oneProductDetails($where: JSON) {
      products(where: $where) {
        name
        name_en
        measurement
        origin
        expiration
        images {
          name
          url
          alternativeText
          caption
          formats
        }
        description
        detail
        price
        feature
        skin_type
        uses
        direction
        storage
        warning
        metaTitle
        metaDescription
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
  return data?.products[0];
}