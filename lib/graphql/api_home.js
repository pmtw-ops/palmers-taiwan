import fetchAPI from '../fetch_api.js'

export async function getHomePage(preview) {
  const data = await fetchAPI(
    `
    query Home {
      home {
        title
        metaDescription
        image {
          name
          url
          alternativeText
          caption
          formats
        }
        video {
          name
          url
          alternativeText
          caption
          formats
        }
        product_suggestions {
          name
          name_en
          sku
          images {
            url
            formats
            alternativeText
            caption
          }
          collections {
            name
          }
          price
        }
      }
    }
  `
  )
  return data?.home
}