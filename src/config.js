const env = process.env.NODE_ENV

const map = {
  // development: 'http://bdk-service.test/api/client',
  // production: 'https://bdk.yjtcloud.com/api/client'
  development: 'http://localhost:2080',
  production: 'https://bdk.yjtcloud.com'
}

const baseUrl = map[env]
const oss = {
  region: 'oss-cn-chengdu',
  bucket: 'project-bdk'
}

export { baseUrl, oss }
