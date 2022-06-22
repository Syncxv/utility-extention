import { h, render } from 'preact'
import { Feature } from '../../entities/Feature'
import { Cool } from './components/cool'

const fasterBadWebsites: { [key: string]: boolean } = {
    'pornhub.com': true,
    'pornhub.org': true,
    'pixiv.net': true,
    'redgifs.com': true,
    'hanime.tv': true,
    'nhentai.com': true,
    'gelbooru.com': true,
    'fakku.net': true,
    'rule34.xxx': true,
    'hitomi.la': true,
    'e-hentai.org': true,
    'nhentai.com/home': true
}

class NsfwBlocker extends Feature {
    async startFeature() {
        console.log('Hi')
        const splitted = location.hostname.split('.')
        splitted.length === 3 ? splitted.shift() : splitted
        const real = splitted.join('.')

        if (fasterBadWebsites[real]) {
            console.log("you're being very bad")
            document.body.innerHTML = ''
            render(h(Cool, {}), document.body)
        }
    }
}

export default NsfwBlocker
