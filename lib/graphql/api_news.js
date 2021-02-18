import fetchAPI from '../fetch_api.js'

export async function getAllNewsPosts(preview) {
  const data = await fetchAPI(
    `
    query NewsPosts {
      newsPosts {
        title
      }
    }
  `
  )
  return data?.products
}

export async function getAllNewsPostsPath(preview) {
  const data = await fetchAPI(
    `
    query NewsPosts {
      newsPosts {
        title
      }
    }
  `
  )
  return data?.products
}