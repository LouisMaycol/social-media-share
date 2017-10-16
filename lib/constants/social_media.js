'use strict';

var shareLinksBaseUrl = {
  facebook: 'https://www.facebook.com/sharer/sharer.php',
  twitter: 'https://twitter.com/share',
  reddit: 'https://www.reddit.com/submit',
  telegram: 'https://telegram.me/share/',
  googleplus: 'https://plus.google.com/share',
  linkedin: 'https://linkedin.com/shareArticle'
};

var shareCounterBaseUrl = {
  facebook: 'https://graph.facebook.com/?id=',
  reddit: 'https://www.reddit.com/api/info.json?limit=1&url=',
  googleplus: 'https://clients6.google.com/rpc',
  linkedin: 'https://www.linkedin.com/countserv/count/share'
};

var source = {
  facebook: "facebook",
  twitter: "twitter",
  reddit: "reddit",
  telegram: "telegram",
  googleplus: "googleplus",
  linkedin: "linkedin"
};

module.exports = {
  shareLinksBaseUrl: shareLinksBaseUrl,
  source: source,
  shareCounterBaseUrl: shareCounterBaseUrl
};