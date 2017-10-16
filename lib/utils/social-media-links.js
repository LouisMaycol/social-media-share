'use strict';

var helper = require('./helper');

var _require = require('../constants/social_media'),
    shareLinksBaseUrl = _require.shareLinksBaseUrl;

var shareLink = function shareLink(_source) {
  this.source = _source;
  this.baseUrl = shareLinksBaseUrl[_source];
};

shareLink.prototype.get = function (props) {

  if (helper.validateParams(this.source, props).isValid) {

    var queryParams = helper.objectToGetParams(props);

    this.baseUrl += queryParams;

    return this.baseUrl;
  } else throw 'Error: ' + helper.validateParams(this.source, props).message + ' for source ' + this.source;
};

shareLink.prototype.open = function () {

  var height = 400,
      width = 550;

  var left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
  var top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;

  var config = {
    height: height,
    width: width,
    left: left,
    top: top,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes'
  };

  var shareDialog = window.open(this.baseUrl, '', Object.keys(config).map(function (key) {
    return key + '=' + config[key];
  }).join(', '));

  return shareDialog;
};

module.exports = {
  shareLink: shareLink
};