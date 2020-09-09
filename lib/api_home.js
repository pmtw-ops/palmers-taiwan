import fetchAPI from './fetch_api.js'

export async function getHomePage(preview) {
  const data = await fetchAPI(
    `
    query {
      home {
        title
        metaDescription
      }
    }
  `
  )
  return data?.home
}