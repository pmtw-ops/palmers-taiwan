import fetchAPI from './fetch_api.js'

export async function getAppData(preview) {
  const data = await fetchAPI(
    `
    query {
      app {
        title
        logo {
          name
          url
          alternativeText
          caption
          formats
        }
        favicon {
          name
          alternativeText
          caption
          formats
        }
        facebook
        instagram
        youtube
      }
    }
  `
  )
  return data?.app
}