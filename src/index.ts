import { utilityExtention } from './managers/utilityExtention'

var checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(checkReady)
        console.log('%cSTARTED', 'font-size: 24px; color: red')
        console.log(utilityExtention)
        ;(window as any).utilityExtention = utilityExtention
        utilityExtention.featureManager.startAllFeatures()
        // for osucollector
    }
})
