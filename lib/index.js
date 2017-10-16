'use strict';

var SocialMediaLinks = require('./utils/social-media-links');
var SocialMediaShare = require('./utils/social-media-share');

module.exports = {
  ShareLink: SocialMediaLinks.shareLink,
  ShareCount: SocialMediaShare.shareCount
};