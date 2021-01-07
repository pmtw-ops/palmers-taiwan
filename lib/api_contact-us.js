import fetchAPI from './fetch_api.js'

export async function getContactUs() {
  const data = await fetchAPI(
    `
    query {
      contactUs {
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
        contactEmail
        contactPhone
        address
      }
    }
  `
  )
  return data?.contactUs
}