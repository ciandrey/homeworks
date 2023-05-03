const { Page } = require('../page');
const { BaseElement } = require('../../helpers/baseelement');

const I = new BaseElement();

class Footer extends Page {
  constructor() {
    super();
    this.socialLinks = '.footer-full__social-link';
  }

  async goToSocialLinks(link) {
    const socialElementsArray = await I.getElementsArray(this.socialLinks);

    if (link === 'vk') {
      await I.clickElementFromArray(socialElementsArray, 0);
    } else if (link === 'instagram') {
      await I.clickElementFromArray(socialElementsArray, 1);
    } else if (link === 'facebook') {
      await I.clickElementFromArray(socialElementsArray, 2);
    } else if (link === 't.me') {
      await I.clickElementFromArray(socialElementsArray, 3);
    } else if (link === 'tiktok') {
      await I.clickElementFromArray(socialElementsArray, 4);
    } else if (link === 'youtube') {
      await I.clickElementFromArray(socialElementsArray, 5);
    }
    await browser.waitUntil(
      async () => (await browser.getTitle()),
      {
        timeout: 5000,
      },
    );
    await browser.switchWindow(link);
  }
}

module.exports = { Footer };
