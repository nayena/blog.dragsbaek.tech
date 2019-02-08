const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Dragsbaek -- tech and health", // <title>
  shortSiteTitle: "Dragsbaek.tech", // <title> ending for posts and pages
  siteDescription: "A blog about technical mumbojumbo",
  siteUrl: "https://blog.dragsbaek.tech",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Jan Dragsbaek",
  authorTwitterAccount: "jandragsbaek",
  // info
  infoTitle: "Jan Dragsbaek",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Dragsbaek - tech and health",
  manifestShortName: "dragsbaekblog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "jan@dragsbaek.tech",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/nayena" },
    { name: "twitter", url: "https://twitter.com/jandragsbaek" },
    { name: "facebook", url: "https://facebook.com/nayena" }
  ]
};
