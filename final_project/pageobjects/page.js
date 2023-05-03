class Page {
  constructor() {
  }

  async open(url) {
    return browser.url(url);
  }
}

module.exports = { Page };
