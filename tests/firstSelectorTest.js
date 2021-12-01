import { Selector, ClientFunction } from 'testcafe';

import Eyes from '@applitools/eyes-testcafe';

const getCurrentUrl = ClientFunction(() => window.location.href);

//npx testcafe  chrome tests/firstSelectorTest.js --fixture-meta version=1
fixture.meta("version", "1")("Fixture 1")
    .page("https://devexpress.github.io/testcafe/");

//npx testcafe  chrome tests/firstSelectorTest.js --test-meta env=smoke
test.meta('env', '')
    .page("https://devexpress.github.io/testcafe/example/")
    ("Test 1", async t => {
        const developerName = Selector("#developer-name");
        const opSystem = Selector("#macos");
        const btnSubmit = Selector("#submit-button");
        await t.typeText(developerName, "Darwin")
            .click(opSystem)
            .click(btnSubmit);
    });
//npx testcafe  chrome tests/firstSelectorTest.js --test-meta env=regression
test.meta('env', 'regression')
    .page("https://devexpress.github.io/testcafe/example/")
    ("Test 3", async t => {
        await t.typeText(developerName, "Darwin")
            .click(opSystem)
            .click(btnSubmit)
            .navigateTo("https://www.google.com")
    });

test.meta('test', 'iframe')
    .page("https://the-internet.herokuapp.com/iframe")
    ("Iframe", async t => {

        const iframe = Selector("iframe#mce_0_ifr");
        const iframeBody = Selector("#tinymce");
        await t.switchToIframe(iframe)
            .click(iframeBody)
            .pressKey("ctrl+a delete")
            .typeText(iframeBody, "Hola Soy Darwin")
            .expect(iframeBody.innerText).contains("Darwin")
            .switchToMainWindow();
    });

test.meta('test', 'dropdownlist')
    .page("https://devexpress.github.io/testcafe/example/")
    ("drop down list", async t => {
        const dropDownList = await Selector("select#preferred-interface");
        const dropDownListOptions = await dropDownList.find("option");

        await t.click(dropDownList)
            .click(dropDownListOptions.withText("Command Line"));
    });

test.meta('test', 'uploadfile')
    .page("https://the-internet.herokuapp.com/upload")
    ("upload file", async t => {
        const selectFileButton = await Selector("input#file-upload");
        const submitFile = await Selector("input#file-submit");
        await t.setFilesToUpload(selectFileButton, "../imgperro.jpg")
            .clearUpload(selectFileButton)
            .setFilesToUpload(selectFileButton, "../imgperro.jpg")
            .click(submitFile);
    });

test.meta('test', 'testspeed')
    .page("https://devexpress.github.io/testcafe/example/")
    ("test speed", async t => {
        const developerName = Selector("#developer-name");
        await t.setTestSpeed(0.01)
            .typeText(developerName, "Darwin")
    });

test.timeouts({
    pageLoadTimeout: 2000
}).meta('test', 'testpagelaodtimeout')
    ("testpagelaodtimeout", async t => {
        await t.navigateTo("https://the-internet.herokuapp.com/iframe")
    });

test.meta('test', 'drag')
    .page("https://devexpress.github.io/testcafe/example/")
    ("drag", async t => {
        await t.setTestSpeed(0.01)
            .click("input#tried-test-cafe")
            .drag("#slider", 360, 0, { offsetX: 10, offsetY: 0 });
    });

test.meta('test', 'hover')
    .page("https://devexpress.github.io/testcafe/example/")
    ("hover", async t => {
        await t.setTestSpeed(0.01)
            .hover("input#populate")
    });

    //npx testcafe chrome tests/firstSelectorTest.js --test-meta test=assertions
test.meta('test', 'assertions')
.page("https://devexpress.github.io/testcafe/example/")
("assertions", async t => {
    const developerName = Selector("#developer-name");
    await t.typeText(developerName, "Darwin")
        .expect(developerName.value).eql( "Darwin");
});


test.meta('test', 'clientfuntion')
.page("https://devexpress.github.io/testcafe/example/")
("clientfuntion", async t => {
    const developerName = Selector("#developer-name");
    await t.expect(getCurrentUrl()).eql("https://devexpress.github.io/testcafe/example/")
});

test
("Debug test", async t=>{
    await t.typeText("#developer-name", "Caro")
           .click("#macos")
           .debug()
           .click("#submit-button");
});

//npx testcafe chrome tests/firstSelectorTest.js --test-meta test=screenshotelementallpage
test
.meta('test', 'screenshotelementallpage')
.page("https://devexpress.github.io/testcafe/example/")
("Take screenshot all page", async t=>{
    await t.typeText("#developer-name", "Caro")
           .click("#macos")
           .takeScreenshot();
});

//npx testcafe chrome tests/firstSelectorTest.js --test-meta test=screenshotelement
test
.meta('test', 'screenshotelement')
.page("https://devexpress.github.io/testcafe/example/")
("Take screenshot element", async t=>{
    await t.typeText("#developer-name", "Caro")
           .click("#macos")
           .takeElementScreenshot("#developer-name")
});

//npx testcafe chrome tests/firstSelectorTest.js --test-meta test=applitools
test
.meta('test', 'applitools')
.page("https://devexpress.github.io/testcafe/example/")
("applitools test", async t=>{
    const eyes = new Eyes();
    await eyes.open({
        t,
        appName: "Test Cafe Demo",
        testName: "User Registration and Login Test!"
    })
    await eyes.checkWindow("Home Page");
    await t.typeText("#developer-name", "Caro")
           .click("#macos");
    await eyes.close()
});