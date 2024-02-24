import puppeteer from 'puppeteer'
import { config } from 'dotenv'
config()

let browser: puppeteer.Browser
const PORT = process.env. PORT || 3000

export let page: puppeteer.Page
export const APP_URL = `http://localhost:${PORT}`
export const mobileViewport = { width: 375, height: 812 }
export const desktopViewport = { width: 1920, height: 1080 }
export const testTimeout = 32000

export const puppeteerInit = (viewport = desktopViewport) => {
    beforeAll (async () => {
        browser = await puppeteer.launch({
            args: [`--window-size=${viewport.width},${viewport.height}`],
        })
        page = await browser.newPage()
        await page.setViewport(viewport)
        await page.goto(APP_URL)
    })
    afterAll(() => {
        browser.close()
    })
}