//const sshot = require('../../screenshots/')

describe("Capture Page Screenshots", function(){
    
    it("Capture Home Page Screeshots", function(){
    browser.url('/');   
    browser.saveScreenshot('./screenshots/home_header.png', 'div.class.header');
    browser.saveScreenshot('./screenshots/home_body.png', 'div.class.section');
    });

    it("Capture About Us Screeshots", function(){
        browser.url('/');   
        const aboutus = $("*=About").click();
        browser.saveScreenshot('./screenshots/about_header.png', 'div.class.header');
        browser.saveScreenshot('./screenshots/about_body.png', 'div.class.section');
        });
    
    it("Capture About Us Screeshots", function(){
        browser.url('/');   
        const aboutus = $("*=Request a Demo").click();
        browser.saveScreenshot('./screenshots/demo_header.png', 'div.class.header');
        browser.saveScreenshot('./screenshots/demo_body.png', 'div.class.section');
        });

});