import { fixture } from "testcafe";

fixture("Fixture 1")
    .page("https://devexpress.github.io/testcafe/example/");

test
("Test 1", async t=>{
    await t.typeText("#developer-name", "Caro")
           .click("#macos")
           .click("#submit-button");
});

test
("Test 2", async t=>{
    await t.typeText("#developer-name", "Caro")
           .click("#macos")
           .click("#submit-button");
});

