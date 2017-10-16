const helper = require('./helper');

const { shareLinksBaseUrl } = require('../constants/social_media');

let shareLink = function (_source) {
  this.source = _source;
  this.baseUrl = shareLinksBaseUrl[_source];
}

shareLink.prototype.get = function (props) {

  if (helper.validateParams(this.source, props).isValid) {

    let queryParams = helper.objectToGetParams(props);

    this.baseUrl += queryParams;

    return this.baseUrl;

  } else
    throw `Error: ${helper.validateParams(this.source, props).message} for source ${this.source}`;

}

shareLink.prototype.open = function () {

  let height = 400,
      width = 550;

  const left = (window.outerWidth / 2)
    + (window.screenX || window.screenLeft || 0) - (width / 2);
  const top = (window.outerHeight / 2)
    + (window.screenY || window.screenTop || 0) - (height / 2);

  const config = {
    height,
    width,
    left,
    top,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
  };

  const shareDialog = window.open(
    this.baseUrl,
    '',
    Object.keys(config).map(key => `${key}=${config[key]}`).join(', ')
  );

  return shareDialog;
}

module.exports = {
  shareLink
}