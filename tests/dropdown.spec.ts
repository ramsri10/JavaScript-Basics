import test from "@playwright/test";

test('DropDown with pageFixture', async ({ page }) => {
    await page.goto('https://www.telerik.com    /contact')

    await page.selectOption("#Dropdown-1", { index: 5 })
    await page.waitForTimeout(4000)
    await page.selectOption("[name='DropdownListFieldController']", { value: "DevCraft" })
    await page.waitForTimeout(4000)
    await page.locator(".js-country-field").selectOption({ label: "India" })
    await page.waitForTimeout(4000)
    await page.selectOption(".js-country-field", { label: "United States" })
    await page.waitForTimeout(4000)
})