const env = process.env.NODE_ENV

const map = {
  development: 'http://bdk-service.test/api/client',
  production: 'https://bdk.yjtcloud.com/api/client'
}

const baseUrl = map[env]

export { baseUrl }
