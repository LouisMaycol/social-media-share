'use strict';

var axios = require('axios');

var _require = require('../constants/social_media'),
    shareCounterBaseUrl = _require.shareCounterBaseUrl;

var shareCount = function shareCount(_shareUrl) {
  this.shareUrl = _shareUrl;
};

shareCount.prototype.getFacebookShareCount = function () {
  var shareCountLink = shareCounterBaseUrl.facebook + this.shareUrl;

  return axios.get(shareCountLink).then(function (result) {
    return result.data.share;
  });
};

module.exports = {
  shareCount: shareCount
};