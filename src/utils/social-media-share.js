const axios = require('axios');
const { shareCounterBaseUrl } = require('../constants/social_media');

let shareCount = function (_shareUrl) {
  this.shareUrl = _shareUrl;
}

shareCount.prototype.getFacebookShareCount = function () {
  let shareCountLink = shareCounterBaseUrl.facebook + this.shareUrl;

  return axios.get(shareCountLink)
    .then(result => result.data.share);
}

module.exports = {
  shareCount,
}