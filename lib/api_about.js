import fetchAPI from './fetch_api.js'

export async function getAbout(preview) {
  const data = await fetchAPI(
    `
    query {
      about {
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
        contentImages {
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
  return data?.about
}