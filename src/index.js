

  var checkReady = setInterval(() => {
    if (document.readyState === "complete") {
        clearInterval(checkReady) 
        console.log("%cSTARTED", "font-size: 24px; color: red")
    const injectCSS = css => {
        let el = document.createElement('style');
        el.type = 'text/css';
        el.innerText = css;
        el.id = "bruuuuuuuuuuuh"
        document.head.appendChild(el);
        return el;
      };
      
      injectCSS(`[title="Play on TV"] {
        display: none;
      }
      .ytp-remote-button.ytp-button {
        display: none;
      }`)

    }
  })
