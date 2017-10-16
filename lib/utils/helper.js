'use strict';

var _require = require('../constants/social_media'),
    source = _require.source;

var objectToGetParams = function objectToGetParams(object) {
  return '?' + Object.keys(object).filter(function (key) {
    return !!object[key];
  }).map(function (key) {
    return key + '=' + encodeURIComponent(object[key]);
  }).join('&');
};

var validateParams = function validateParams(src, props) {

  // URL validation
  if (src == source.facebook) {
    if (!props.u) return { isValid: false, message: 'URL is required' };else return { isValid: true };
  } else {

    if (!props.url) return { isValid: false, message: 'URL is required' };else return { isValid: true };
  }
};

module.exports = {
  objectToGetParams: objectToGetParams,
  validateParams: validateParams
};