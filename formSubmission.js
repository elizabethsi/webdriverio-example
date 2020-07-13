const RequestDemo = require("../../pages/request-form");
const ThankYou = require("../../pages/thankyou");
const assert = require('assert');
const expect = require('expect');


describe("Request Demo Form", function(){
    it("Input First Name", function(){
        browser.url('/');
        const demo = $("*=Request a Demo").click();
        RequestDemo.enterFirstName('Vivian');
        assert.equal('Vivian', RequestDemo.firstName.getValue());

    });
    it("Input Last Name", function(){
        RequestDemo.enterLastName('Conley');
        assert.equal('Conley', RequestDemo.lastName.getValue());
    });
    it("Input Email", function(){
        RequestDemo.enterEmail('vivian.conley@gmail.com');
        assert.equal('vivian.conley@gmail.com', RequestDemo.email.getValue());
    });
    it("Input Company Name", function(){
        RequestDemo.enterCompanyName('Division');
        assert.equal('Division', RequestDemo.companyName.getValue());
    });
    it("Input Company Type", function(){
        RequestDemo.enterCompanyType('Rouge');
        assert.equal('Rouge', RequestDemo.companyType.getValue());
    });
    it("Input Phone", function(){
        RequestDemo.enterPhone('0142433535');
        assert.equal('0142433535', RequestDemo.phone.getValue());
    });
    it("Submit Form", function(){
        RequestDemo.clickOnSubmit();
        browser.pause(3000);
    });
});

describe("Thank You Page", function(){
    it("Display Thank you Page", function(){
    console.log(ThankYou.pageHeader.isDisplayed());
    console.log(ThankYou.subHeader.isDisplayed());
    expect(browser.getUrl()).toContain('/thanks');
    });
});

describe("Request Demo Required Fields", function(){
    it("Require All Fields", function(){
        browser.url('/');
        const demo = $("*=Request a Demo").click(); 
        RequestDemo.clickOnSubmit();
        console.log(RequestDemo.errorMsg.isDisplayed());
        browser.pause(3000);
    });    
});