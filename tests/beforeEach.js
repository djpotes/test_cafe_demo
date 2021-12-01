import {Selector} from "testcafe"

const devName = Selector("#developer-name")

fixture
.page("https://devexpress.github.io/testcafe/example/")
.beforeEach(async t => {
    await t
    .setTestSpeed(0.01)
    .typeText(devName, "before each")
})("Fixture 1");

test
.page("https://devexpress.github.io/testcafe/example/")
("test 1", async t => {
    await t
    .setTestSpeed(0.01)
    .typeText(devName, "test 1")
});

