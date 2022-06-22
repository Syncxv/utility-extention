// import sleep from '../util/sleep';

// const badWebsites = [
//     'pornhub.com',
//     'pornhub.org',
//     'pixiv.net',
//     'redgifs.com',
//     'hanime.tv',
//     'nhentai.com',
//     'gelbooru.com',
//     'fakku.net',
//     'rule34.xxx',
//     'hitomi.la',
//     'e-hentai.org',
//     'nhentai.com/home',
// ];
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
    'nhentai.com/home': true,
};
export const nsfwBlockerMain = async () => {
    console.log('Hi');
    const splitted = location.hostname.split('.');
    splitted.length === 3 ? splitted.shift() : splitted;
    const real = splitted.join('.');

    if (fasterBadWebsites[real]) {
        console.log("you're being very bad");
        document.body.innerHTML = '';
        document.body.style.display = 'flex';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        document.body.style.height = '100vh';
        document.body.append('GET BACK ON THE GRIND KIND SIR');
    }

    // badWebsites.forEach((s) => {
    //     const real = location.hostname.replace('www.', '');
    //     console.log(s, real);
    //     if (real === s) {
    //         console.log("you're being very bad");
    //         document.body.innerHTML = '';
    //         document.body.style.display = 'flex';
    //         document.body.style.alignItems = 'center';
    //         document.body.style.justifyContent = 'center';
    //         document.body.style.height = '100vh';
    //         document.body.append('GET BACK ON THE GRIND KIND SIR');
    //     }
    // });
};
