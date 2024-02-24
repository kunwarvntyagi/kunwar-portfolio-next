import { page, puppeteerInit } from '../config/puppeteer-config'

describe('Portfolio Example', () => {
    puppeteerInit()

    it('should display "Kunwar" text on page', () => {
        expect(page).toMatch('Kunwar')
    })
})