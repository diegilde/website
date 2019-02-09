const fs = require('fs')
const { promisify } = require('util')
const ghpages = require('gh-pages')

const writeFile = promisify(fs.writeFile);
const publishToGithub = promisify(ghpages.publish);

async function writeCNAMEIntoTranspiledFiles() {
  console.log('Add CNAME file to compiled files...')
  await  writeFile('public/CNAME', "jointheguild.online")
  console.log('CNAME added successfully!')
}

async function publishToGithubPages() {
  console.log('Start publishing...')
  await publishToGithub(
    'public',
    {
      user: {
        name: 'Die Gilde',
        email: 'team@die-gilde.online'
      },
      branch: 'master',
      repo: 'git@github.com:diegilde/diegilde.github.io.git',
    }
  )
  console.log('Website published!')
}

(async function() {
  console.log('︎\n\n📣 Deployment to github pages started...︎📣\n')
  await writeCNAMEIntoTranspiledFiles()
  await publishToGithubPages()
  console.log('\n✅ Deployment Completed!✅\n')
})()







