function later (result) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(20)
    }, 1000)
  })
}

export const api = {
  // eslint-disable-next-line require-await
  async get_books () {
    const result = [
      {
        'abbrev': {'pt': 'gn', 'en': 'gn'},
        'author': 'Moisés',
        'chapters': 50,
        'group': 'Pentateuco',
        'name': 'Gênesis',
        'testament': 'VT'
      },
      {
        'abbrev': {'pt': 'ex', 'en': 'ex'},
        'author': 'Moisés',
        'chapters': 40,
        'group': 'Pentateuco',
        'name': 'Êxodo',
        'testament': 'VT'
      }]
    return later(result)
  }
}
