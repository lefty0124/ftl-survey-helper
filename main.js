const puppeteer = require('puppeteer');
const readline = require('readline');
const console = require('console');
const log4js = require("log4js");
const fs = require('fs');

log4js.configure({
  appenders: { ftl: { type: "file", filename: "FTL-Survey-Helper.log" } },
  categories: { default: { appenders: ["ftl"], level: "info" } }
});

const logger = log4js.getLogger("ftl");

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}



(async () => {

  var ftlCodes = fs.readFileSync('codes.txt').toString().split("\n");
  var personalInfo = fs.readFileSync('config.txt').toString().split("\n");
  var codeSplit = [];

  for (i = 0; i < ftlCodes.length; i++) {
    codeSplit = ftlCodes[i].split('-');
    //console.log(codeSplit);


    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()


    await page.goto('http://www.flpulse.com/')
    console.log('Browser initiated.')

    await page.setViewport({ width: 1440, height: 1440 })

    await page.waitForSelector('.ng-scope > #im_policy_overlay > #im_policy_modal > #im_policy_accept_button > .ng-binding')
    await page.click('.ng-scope > #im_policy_overlay > #im_policy_modal > #im_policy_accept_button > .ng-binding')

    await page.waitForSelector('.promptInput #option_814689_368341')
    await page.click('.promptInput #option_814689_368341')

    await page.waitForSelector('.promptInput #option_814689_368341')
    await page.click('.promptInput #option_814689_368341')

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForSelector('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_0')
    await page.click('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_0')
    await page.type('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_0', codeSplit[0])

    await page.waitForSelector('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_1')
    await page.click('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_1')
    await page.type('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_1', codeSplit[1])

    await page.waitForSelector('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_2')
    await page.click('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_2')
    await page.type('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_2', codeSplit[2])

    await page.waitForSelector('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_3')
    await page.click('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_3')
    await page.type('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_3', codeSplit[3])

    await page.waitForSelector('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_4')
    await page.click('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_4')
    await page.type('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_4', codeSplit[4])

    await page.waitForSelector('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_5')
    await page.click('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_5')
    await page.type('.ng-isolate-scope > #prompt_text_multiple_409493 #promptInput_409493_5', codeSplit[5])

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForSelector('.options > .option_790835_359520 > label > .rating > .ng-binding')
    await page.click('.options > .option_790835_359520 > label > .rating > .ng-binding')
    console.log('Code Accepted: ' + ftlCodes[i])

    await page.waitForSelector('.ng-isolate-scope > #prompt_359527 #commentArea_359527')
    await page.click('.ng-isolate-scope > #prompt_359527 #commentArea_359527')
    await page.type('.ng-isolate-scope > #prompt_359527 #commentArea_359527', 'Hi')

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForSelector('.options > .option_349038_158489 > label > .rating > .ng-binding')
    await page.click('.options > .option_349038_158489 > label > .rating > .ng-binding')

    await page.waitForSelector('.promptInput #option_791585_359936')
    await page.click('.promptInput #option_791585_359936')

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForSelector('#prompt_403496 > .promptInput > .ng-scope > .menuItem-container > .menuItem:nth-child(2)')
    await page.click('#prompt_403496 > .promptInput > .ng-scope > .menuItem-container > .menuItem:nth-child(2)')

    await page.waitForSelector('.promptInput #option_933083_403496')
    await page.click('.promptInput #option_933083_403496')

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForSelector('.options > .option_797587_361868 > label > .rating > .ng-binding')
    await page.click('.options > .option_797587_361868 > label > .rating > .ng-binding')

    await page.waitForSelector('.options > .option_791577_359921 > label > .rating > .ng-binding')
    await page.click('.options > .option_791577_359921 > label > .rating > .ng-binding')

    await page.waitForSelector('.options > .option_791571_359920 > label > .rating > .ng-binding')
    await page.click('.options > .option_791571_359920 > label > .rating > .ng-binding')

    await page.waitForSelector('.options > .option_933093_403500 > label > .rating > .ng-binding')
    await page.click('.options > .option_933093_403500 > label > .rating > .ng-binding')

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForSelector('.options > .option_1026192_445616 > label > .rating > .ng-binding')
    await page.click('.options > .option_1026192_445616 > label > .rating > .ng-binding')

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForSelector('#prompt_60643 > .promptInput > .ng-scope > .menuItem-container > .menuItem:nth-child(1) > .ng-binding')
    await page.click('#prompt_60643 > .promptInput > .ng-scope > .menuItem-container > .menuItem:nth-child(1) > .ng-binding')

    await page.waitForSelector('.promptInput #option_141532_60643')
    await page.click('.promptInput #option_141532_60643')

    await page.waitForSelector('.promptInput > .ng-scope > .menuItem-container > .menuItem:nth-child(4) > .ng-binding')
    await page.click('.promptInput > .ng-scope > .menuItem-container > .menuItem:nth-child(4) > .ng-binding')

    await page.waitForSelector('.promptInput #option_141538_60644')
    await page.click('.promptInput #option_141538_60644')

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForSelector('.promptInput > .ng-scope > .menuItem-container > .menuItem:nth-child(1) > .ng-binding')
    await page.click('.promptInput > .ng-scope > .menuItem-container > .menuItem:nth-child(1) > .ng-binding')

    await page.waitForSelector('.promptInput #option_958103_415231')
    await page.click('.promptInput #option_958103_415231')

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    await page.waitForNavigation();

    await page.waitForSelector('#im_policy_accept_button > span')
    await page.click('#im_policy_accept_button > span');

    await page.waitForSelector('.ng-isolate-scope > #prompt_391733 #promptInput_391733')
    await page.click('.ng-isolate-scope > #prompt_391733 #promptInput_391733')

    await page.type('.ng-isolate-scope > #prompt_391733 #promptInput_391733', personalInfo[0])

    await page.waitForSelector('.ng-isolate-scope > #prompt_391734 #promptInput_391734')
    await page.click('.ng-isolate-scope > #prompt_391734 #promptInput_391734')

    await page.type('.ng-isolate-scope > #prompt_391734 #promptInput_391734', personalInfo[1])

    await page.waitForSelector('#surveyApp_body #nextPageLink')
    await page.click('#surveyApp_body #nextPageLink')

    // }
    logger.info("Code Redeemed: " + ftlCodes[i]);
    await delay(5000);
    console.log("Completed 5 second wait time. Attempting next survey!")
    await browser.close()
  }
})()

