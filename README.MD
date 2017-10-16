### Features

This package contains social media shares for these platforms:

* Facebook
* Twitter
* Reddit
* Telegram
* GooglePlus
* LinkedIn

And also provides share counts for these platforms:
* Facebook


To install this package just do:
``` 
npm install social-media-sharing 
```


# Share Dialog #

### Usage

```
const { ShareLink } = require('@rappler-tech/sdk-sharing');

let socialMediaLinks = new ShareLink(source);

let shareLink = socialMediaLinks.get({properties});
```

or 

```
import { ShareLink } from '@rappler-tech/sdk-sharing'

var socialMediaLinks = new ShareLink(source);

var shareLink = socialMediaLinks.get({properties});
```

on React side

```
import { ShareLink } from '@rappler-tech/sdk-sharing'

var socialMediaLinks = new ShareLink(source);

socialMediaLinks.get({properties});

socialMediaLinks.open();
```

**source**

* Facebook - facebook
* Twitter - twitter
* Reddit - reddit
* Telegram - telegram
* GooglePlus - googleplus
* LinkedIn - linkedin

**properties**

*facebook*

Field | Required | Type | Description
--- | --- | --- | ---
u | yes | string | The url to share
quote | no | string | The quote to embed in sharing
hashtag | no | string | The hashtag to use

*twitter*

Field | Required | Type | Description
--- | --- | --- | ---
url | yes | string | The url to share
text | no | string | The text to share
via | no | string | Similar to via @rapplerdotcom. No need for @
hashtags | no | string | The hashtag to use. Hashtags are comma separated and no need for #

*reddit*

Field | Required | Type | Description
--- | --- | --- | ---
url | yes | string | The url to share
title | no | string | The title of the post

*telegram*

Field | Required | Type | Description
--- | --- | --- | ---
url | yes | string | The url to share
text | no | string | The text to share

*googleplus*

Field | Required | Type | Description
--- | --- | --- | ---
url | yes | string | The url to share

*linkedin*

Field | Required | Type | Description
--- | --- | --- | ---
url | yes | string | The url to share
title | no | string | The title of the post
summary | no | string | The summary of the post


# Share Count #

### Usage

```
const { ShareCount } = require('@rappler-tech/sdk-sharing');

let url = 'http://someurl.com';

let shareCount = new ShareCount(url);

return shareCount.getFacebookShareCount()
  .then(result => result);
```

## Functions ##

### Facebook

*getFacebookShareCount()*
- - -
Returns the share count from facebook.

**output:** 
```
  { 
    comment_count: 0, 
    share_count: 523 
  }
```