const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    user: {
      name: 'Die Gilde',
      email: 'team@die-gilde.online'
    },
    branch: 'master',
    repo: 'git@github.com:diegilde/diegilde.github.io.git',
  },
  (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Deploy Complete! 🎉')
    }

  }
)
