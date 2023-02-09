let apikey = ''

async function _fetch (url) {
  let headers = {}
  if (apikey) {
    headers['authorization'] = `token ${apikey}`
  }
  return fetch(url, {headers: headers})
}

async function fetch_all_pages (url) {
  let vaiindo = true
  let result = []
  let page = 1
  while (vaiindo) {
    const response = await _fetch(`${url}?page=${page}`)
    const tmpitems = await response.json()
    if (tmpitems.length > 0) {
      result = result.concat(tmpitems)
      page++
    } else {
      vaiindo = false
    }
  }
  return result
}

export const api = {
  set_apikey (k) {
    apikey = k
  },
  async search_users (searchstring) {
    const url = `https://api.github.com/search/users?q=${searchstring}`
    const response = await _fetch(url)
    // eslint-disable-next-line no-return-await
    return await response.json()
  },
  async list_books () {
    const url = 'https://www.abibliadigital.com.br/api/books'
    const data = await fetch_all_pages(url)
    return data
  },
  async listaIssues (owner, name, page) {
    const url = `https://api.github.com/repos/${owner}/${name}/issues?page=${page}`
    const response = await _fetch(url)
    // eslint-disable-next-line no-return-await
    return await response.json()
  }
}
