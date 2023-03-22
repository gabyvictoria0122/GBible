import { get, post } from './ajaxutils'
import axios from 'axios'

// async function _fetch (url) {
//   let headers = {}
//   if (apikey) {
//     headers['authorization'] = `token ${apikey}`
//   }
//   return fetch(url, {headers: headers})
// }

// async function fetch_all_pages (url) {
//   let vaiindo = true
//   let result = []
//   let page = 1
//   while (vaiindo) {
//     const response = await _fetch(`${url}?page=${page}`)
//     const tmpitems = await response.json()
//     if (tmpitems.length > 0) {
//       result = result.concat(tmpitems)
//       page++
//     } else {
//       vaiindo = false
//     }
//   }
//   return result
// }

export default {
  login(username, password) {
    return post('/api/login', { username, password })
  },
  logout() {
    return post('/api/logout')
  },
  whoami() {
    return get('/api/whoami')
  },
  settings() {
    return get('/api/settings')
  },
  add_todo(newtask) {
    return post('/api/add_todo', { new_task: newtask })
  },
  // async list_books () {
  //   const url = 'https://www.abibliadigital.com.br/api/books'
  //   const data = await fetch_all_pages(url)
  //   return data
  // },
  async list_books() {
    const url = 'https://www.abibliadigital.com.br/api/books'
    const data = await fetch(url)
    return data.json()
  },
  async list_chapters(livro, chapter) {
    const url = `https://www.abibliadigital.com.br/api/verses/ra/${livro}/${chapter}`
    const data = await fetch(url)
    return data.json()
  },
  register: (name, email, password) => {
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
    return axios
      .post("/api/register", {
        name: name,
        email: email,
        password: password,
      },
        {
          headers: {
            'X-CSRFToken': csrftoken
          }
        })
      .then(response => {
        return response.data
      })
      .catch(error => {
        throw error
      })
  },

}
