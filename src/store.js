const {v4:uuid} = require('uuid')

const bookmarks = [
  { id: uuid(),
    title: 'Thinkful',
    url: 'https://www.thinkful.com',
    description: 'Online learning',
    rating: 5 },
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where to find everything else',
    rating: 4 },
  { id: uuid(),
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The place to find credible web documentation',
    rating: 5 },
]

module.exports = { bookmarks }