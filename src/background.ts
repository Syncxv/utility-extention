async function execScript() {
    const tabId = await getTabId()
    if (tabId !== null) {
        chrome.scripting.executeScript({
            target: { tabId: tabId as number },
            files: ['js/index.js']
        })
    }
}

async function getTabId() {
    const tabs = (await chrome?.tabs?.query({ active: true, currentWindow: true })) ?? { length: -1 }
    return tabs.length > 0 ? tabs[0].id : null
}

execScript()
