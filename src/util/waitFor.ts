import sleep from './sleep'

export default async (querySelector: string) => {
    let elem

    while (!(elem = document.querySelector(querySelector))) {
        await sleep(1)
    }

    return elem
}
