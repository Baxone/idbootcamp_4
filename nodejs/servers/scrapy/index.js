const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('http://amazon.es');

    await page.waitForSelector('#sp-cc-accept');
    await page.click('#sp-cc-accept');

    await page.type('#twotabsearchtextbox', 'libros de javascript');

    await page.waitForTimeout(1000);
    await page.click('#nav-search-submit-button');

    await page.waitForTimeout(3000);

    const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('[data-component-type=s-search-result] h2 a');

        const enlaces = [];
        for (let element of elements) {
            enlaces.push(element.href);
        }
        return enlaces;
    });

    for (let enlace of enlaces) {
        await page.goto(enlace);
        await page.waitForTimeout(2000);
    }
})();