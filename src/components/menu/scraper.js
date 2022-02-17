const puppeteerExtra = require('puppeteer-extra');
const path = require('path');
const C = require('./constants');
const url = 'https://intranet.insa-rennes.fr/fileadmin/ressources_intranet/Menu-50.pdf'; 
const USERNAME_SELECTOR = '#username' ;
const PASSWORD_SELECTOR ='#password' ;

// const puppeteerExtra = require('puppeteer-extra');
puppeteer = puppeteerExtra;
puppeteer.use(require('puppeteer-extra-plugin-user-preferences')({
    userPrefs: {
        download: {
            prompt_for_download: false,
            directory_upgrade: true,
            default_directory:  "\EP_client\public",
            extensions_to_open: "applications/pdf",
        },
        plugins: {
            always_open_pdf_externally: true,
            plugins_disabled: ["Chrome PDF Viewer"],
        },
    }
}));

(async () => {
    const browser = await puppeteer.launch({ headless : false } );
    const page = await browser.newPage();

    await page.goto(url, {waitUntil: 'networkidle2'}); 
    await page.type(USERNAME_SELECTOR,C.username);
    await page.type(PASSWORD_SELECTOR,C.password);

    await page.click('#fm1 > section.row.btn-row > input.btn-submit') ;

    await page.click('body > form > div > div:nth-child(4) > p:nth-child(3) > input[type=submit]:nth-child(2)') ;

    await page.waitForSelector('#c8356 > p:nth-child(2) > a')  ;

    await page.click('#c8356 > p:nth-child(2) > a');
    await page.waitForSelector('#c8601 > p:nth-child(2)>a');

    //TODO A GENERALISER
    //faire un tableau des liens et cliquer sur le lien le plus récent
    // await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: 'C:\Users\Hugo\Downloads'});
    await page.click('#c8601 > p:nth-child(2)>a');
    
    

})()