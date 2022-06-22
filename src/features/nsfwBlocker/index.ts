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
};
