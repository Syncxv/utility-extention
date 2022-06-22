import { Feature } from '../../entities/Feature'
import injectCSS from '../../util/injectCss'

class RemoveYoutubeTvButton extends Feature {
    startFeature(): void {
        injectCSS(`[aria-label="Play on TV"] {
      display: none;
    }`)
        injectCSS(`.ytp-remote-button.ytp-button {
      display: none;
    }`)
    }
}

export default RemoveYoutubeTvButton
