const assert = require('assert');
const expect = require('expect');
const homePage = require("../../pages/home-nav")
const about = require("../../pages/about")
const demo = require("../../pages/demo")

describe("Home Page Navigation", function(){
    it("Verify Home Page Navigation", function(){
        browser.url('/');
        browser.pause(3000);
        console.log(homePage.pageHeader.isDisplayed());
        expect(browser.getUrl()).toContain('/');
        browser.pause(3000);
    });

});

describe("About Us Navigation", function(){
    it("Verify About Us Navigation", function(){
        //browser.url('/');
        browser.pause(3000);
        const aboutus = $("*=About").click();
        console.log(about.pageHeader.isDisplayed());
        expect(browser.getUrl()).toContain('/about');
        browser.pause(3000);
    });
});


describe("Request a Demo Navigation", function(){
    it("Verify Request a Demo Navigation", function(){
        //browser.url('/');
        browser.pause(3000);
        const req = $("*=Request a Demo").click();
        console.log(demo.pageHeader.isDisplayed());
        console.log(demo.subHeader.isDisplayed());
        console.log(demo.demoForm.isDisplayed());
        expect(browser.getUrl()).toContain('/demo');
        browser.pause(3000);

    });
});