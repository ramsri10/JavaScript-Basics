function launchBrowser(browserName) {
    if (browserName === "chrome") {//strict equality
        console.log("Launch the Chrome Browser");


    } else
        console.log("Launching the " + browserName + " Browser");
        
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke tests");

            break;
        case "sanity":
            console.log("Running sanity tests");
            break;

        case "regression":
            console.log("Running regression tests");
            break
        default:
            console.log("Running Smoke tests as default");
            break;
    }

}
launchBrowser("chrome")
runTests("smoke")
launchBrowser("Chrome")
launchBrowser("FireFox")
runTests("sanity")
runTests("regression")
runTests()
launchBrowser()//undefined