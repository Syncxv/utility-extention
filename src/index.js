const injectCSS = css => {
    let el = document.createElement('style');
    el.type = 'text/css';
    el.innerText = css;
    document.head.appendChild(el);
    return el;
  };
  
  injectCSS(`.ytp-remote-button.ytp-button {
    display: none;
  }`)