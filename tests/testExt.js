fixture("My Fixture")
    .page("http://myurl");

test
.meta({
    ID: 'test id',
    SEVERITY: 'blocker',
    STORY: 'story id',
    TEST_RUN: 'test run id or identifier'
})
("My Test", async (t) => {
    
});
