import fetchAPI from '../fetch_api.js'

export async function getTermsAndConditions() {
  
  const data = await fetchAPI(
    `
    query {
      term {
        id
        title
        title_privacyPolicy
        pageDescription
      }
    }
    `
  )
  return data?.term
}