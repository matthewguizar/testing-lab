const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/index.html')

})

afterAll(async () => {
    await (await driver).quit()
})

test('add a movie', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Back to the future')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)
})

test('watched movie', async () => {
    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(2000)
})

test('watched message', async () => {
    await driver.findElement(By.id('message')).isDisplayed()
    await driver.sleep(2000)
})

test('delete movie', async () => {
    await driver.findElement(By.xpath("//ul/li/button")).click()
    await driver.sleep(2000)
})    

