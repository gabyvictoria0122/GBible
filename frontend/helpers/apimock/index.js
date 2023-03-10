import { zuck } from './db_people'
import { todos } from './db_todos'
import { mockasync } from './mockutils'
import { livros } from './livros'
import { bible } from './bible'

const keepLoggedIn = true

export default {
  login (username, password) {
    return mockasync(zuck)
  },
  logout () {
    return mockasync({})
  },
  whoami () {
    const iam = {authenticated: keepLoggedIn}
    if (iam.authenticated) {
      iam.user = zuck
    }
    return mockasync(iam)
  },
  settings () {
    return mockasync({
      SENTRY_DSN_FRONT: ''
      // SENTRY_DSN_FRONT: 'https://abcd1234@sentry.example.com/10'
    })
  },
  list_todos () {
    return mockasync(todos)
  },
  list_books () {
    return mockasync(livros)
  },
  list_chapters (abbrev, chapter) {
    return mockasync(bible)
  },
  add_todo (newtask) {
    return mockasync({description: newtask, done: false})
  }
}
