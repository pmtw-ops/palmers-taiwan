import fetchAPI from './fetch_api.js'

export async function getAllProducts(preview) {
  const data = await fetchAPI(
    `
    query Products {
      products {
        name
        pid
        videos {
          id
        }
        specifications {
          ... on ComponentProductSpecifications {
            size
          }
        }
        slides {
          ... on ComponentProductSlides {
            alt
            image {
              
              id
              name
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { pid: "" }),
        },
      },
    }
  )
  return data?.products
}