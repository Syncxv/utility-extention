async function execScript() {
    const tabId = await getTabId();
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['src/index.js']
    })
  }
  
  async function getTabId() {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    return (tabs.length > 0) ? tabs[0].id : null;
  }

  execScript()