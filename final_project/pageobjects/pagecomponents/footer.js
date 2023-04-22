const {Page} = require('../page');

class Footer extends Page {
    constructor() {
        super();
        this.socialLinks = '.footer-full__social-link';      
    };

    async goToSocialLinks(link) {
               if (link === 'vk') {
            await $$(this.socialLinks)[0].click();
        } else if (link === 'instagram') {
            await $$(this.socialLinks)[1].click();
        } else if (link === 'facebook') {
            await $$(this.socialLinks)[2].click();
        } else if (link === 't.me') {
            await $$(this.socialLinks)[3].click();
        } else if (link === 'tiktok') {
            await $$(this.socialLinks)[4].click();
        } else if (link === 'youtube') {
            await $$(this.socialLinks)[5].click();
        }
        await browser.waitUntil(
            async () => (await browser.getTitle()),
            {
                timeout: 5000 
            }
        );
        await browser.switchWindow(link)
    };   
}

module.exports = { Footer };