const { source } = require('../constants/social_media')

let objectToGetParams = (object) => {
  return '?' + Object.keys(object)
    .filter(key => !!object[key])
    .map(key => `${key}=${encodeURIComponent(object[key])}`)
    .join('&');
}

let validateParams = (src, props) => {

  // URL validation
  if (src == source.facebook) {
    if (!props.u)
      return { isValid: false, message: 'URL is required' }
    else
      return { isValid: true }
  } else {
    
    if (!props.url)
      return { isValid: false, message: 'URL is required' }
    else
      return { isValid: true }
  }

}

module.exports = {
  objectToGetParams,
  validateParams,
}