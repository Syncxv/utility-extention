import { nsfwBlockerMain } from './features/nsfwBlocker'
import osumain from './features/osuCollector/index'
console.clear = () => {}
var checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(checkReady)
        console.log('%cSTARTED', 'font-size: 24px; color: red')
        nsfwBlockerMain()
        // for osucollector
        if (location.href.includes('https://osucollector.com/collections')) {
            osumain()
        }
    }
})
