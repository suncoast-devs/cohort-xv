const config = {
  API_URL: 'https://localhost:5001/'
}

if (process.env === 'PRODUCTION') {
  config.API_URL = 'https://sdg-blog-xv.herokuapp.com'
}

export default config
