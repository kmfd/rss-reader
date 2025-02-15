# 🦉 Bubo Reader (Fork)

![screenshot](./demo.png)

[Demo Site](https://kmfd.github.io/rss-reader/)

This is a fork of the excellent [Bubo Reader](https://github.com/kevinfiol/rss-reader) by Kevin Fiol, which is itself a fork of the also excellent [Bubo Reader](https://github.com/georgemandis/bubo-rss) by George Mandis. On top of Kevin's technical changes, I've made further design and style changes to suit my page layout preferences, and a few other enhancements. Please see below for deployment instructions.

Original blogpost: [Introducing Bubo RSS: An Absurdly Minimalist RSS Feed Reader](https://george.mand.is/2019/11/introducing-bubo-rss-an-absurdly-minimalist-rss-feed-reader/)

Blogpost about Kevin's fork: [A minimal RSS Feed Reader](https://kevinfiol.com/blog/a-minimal-rss-feed-reader/)

(I may post about this myself at some point)

Some changes I made:

* Many styling changes including three column grid for feeds
* The build script now optionally accepts feed names as defined on feeds.json and respects the sort order defined there
* build.js will calculate aritcle age
* Add a filter for article age
* "All Articles" view renamed to "all - firehose"
* build.js generates a feed group "all - by group" that is a set of all groups' feeds


## How to build

Node `>=18.x` required.

```shell
npm install
npm run build
```

## How to host on Github Pages

1. Fork this repo!
2. Enable [Github Pages](https://pages.github.com/) for your repo (either as a project site, or user site)
3. Configure `.github/workflows/build.yml` to your liking
    * Uncomment the `schedule` section to enable scheduled builds
