import test from '@playwright/test'
import { LoginPage } from './LoginWithWapper'

test("Using wrapper class", async ({ page }) => {

    const lp=new LoginPage(page)

await lp.loadUrl("http://leaftaps.com/opentaps/control/main")
await lp.logindata("DemoSalesManager","crmsfa")

})