import osumain from "./osuCollector/index";

var checkReady = setInterval(() => {
    if (document.readyState === "complete") {
        clearInterval(checkReady);
        console.log("%cSTARTED", "font-size: 24px; color: red");

        // for osucollector
        if (location.href.includes("https://osucollector.com/collections")) {
            osumain();
        }
    }
});
