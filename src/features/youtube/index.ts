import injectCSS from "../util/injectCss";

const youtubeMain = () => {
    injectCSS(`[aria-label="Play on TV"] {
        display: none;
      }`);
    injectCSS(`.ytp-remote-button.ytp-button {
        display: none;
      }`);
};

export default youtubeMain;
