import NsfwBlocker, { nsfwBlockerMain } from './features/nsfwBlocker'
console.clear = () => {}
var checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(checkReady)
        console.log('%cSTARTED', 'font-size: 24px; color: red')
        console.log(new NsfwBlocker())
        nsfwBlockerMain()
        // for osucollector
    }
})
