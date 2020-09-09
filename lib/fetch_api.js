export default async function fetchAPI(query, { variables } = {}) {
  const API_URL = process.env.USE_DEV_DB === true ? process.env.DEV_API_URL : process.env.PROD_API_URL;
  
  const res = await fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}