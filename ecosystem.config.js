module.exports = {
  apps: [{
    name: 'awstest',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-90-243-72.compute-1.amazonaws.com',
      key: 'tutorial.pem',
      ref: 'origin/main',
      repo: 'git@github.com:VintageHighTech/awstest.git',
      path: '/home/ubuntu',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}