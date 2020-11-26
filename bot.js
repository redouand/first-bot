const puppeteer = require('puppeteer')

async function bot() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://reds-shnack.herokuapp.com/', { waitUntil: 'load', timeout: 0 })

    let count = 0;

    setInterval(async () => {

        count++

        await page.type(`input[placeholder="type message"]`, `i am a bot and i wrote this ${count} times`, { delay: 50 })

        const btn = await page.$('button[id="submit"]')
        await btn.click()
    }, 2000);

}

bot()