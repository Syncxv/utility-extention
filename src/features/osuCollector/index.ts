import { Feature } from '../../entities/Feature'
import waitFor from '../../util/waitFor'

const getBruh = async () => {
    await waitFor('.card.mr-2')
    const bruh = Array.from(document.querySelectorAll('.card.mr-2'))!
    return bruh
}

const appendToResults = (bruh: Element[]) => {
    bruh.forEach(elem => {
        if (elem.lastChild instanceof HTMLElement && elem.lastChild?.dataset.bruh === 'true') return
        console.log(elem)
        const imgSplithehe = elem.querySelector('img')?.src.split('/')
        if (imgSplithehe) {
            const id = imgSplithehe[imgSplithehe.findIndex(s => s === 'beatmaps') + 1]
            elem.appendChild(createButton(id))
        }
    })
}
const observer = new MutationObserver(async e => {
    console.log(e)
    const bruh = await getBruh()
    appendToResults(bruh)
})

const createButton = (id: string) => {
    const button = document.createElement('button')
    const text = document.createElement('small')
    text.textContent = 'DOWNLOAD'
    button.appendChild(text)
    button.style.zIndex = '99999'
    button.id = id
    button.setAttribute('data-bruh', 'true')
    button.className = 'sc-eCImPb jasfVq mx-1 px-2 py-0 btn btn-outline-primary btn-sm'
    button.onclick = async () => await (await fetch(`http://localhost:3000/download/${id}`)).text()
    return button
}

class OsuCollector extends Feature {
    async startFeature() {
        if (location.href.includes('https://osucollector.com/collections')) {
            const bruh = await getBruh()
            observer.observe(document.querySelector('.infinite-scroll-component.row')!, {
                attributes: true,
                childList: true,
                subtree: true
            })
            appendToResults(bruh)
        }
    }
}

export default OsuCollector
