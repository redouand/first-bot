const puppeteer = require('puppeteer')

async function bot() {
    try {
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
        await page.goto('https://reds-shnack.herokuapp.com/', { waitUntil: 'load', timeout: 0 })

        let count = 0;

        setInterval(async () => {

            count++

            await page.type(`input[placeholder="type message"]`, `i am a bot and i wrote this ${count} times`, { delay: 50 })

            const btn = await page.$('button[id="submit"]')
            await btn.click()

            console.log('code raan!')
        }, 2000);
    } catch (error) {
        console.log(error.message);
        console.log(error);
    }

}

bot()