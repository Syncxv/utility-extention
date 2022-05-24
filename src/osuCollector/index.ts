import waitFor from "../util/waitFor";

const createButton = (id: string) => {
    const button = document.createElement("button");
    const text = document.createElement("small");
    text.textContent = "DOWNLOAD";
    button.appendChild(text);
    button.style.zIndex = "99999";
    button.id = id;
    button.className = "sc-eCImPb jasfVq mx-1 px-2 py-0 btn btn-outline-primary btn-sm";
    button.onclick = async () => await (await fetch(`http://localhost:3000/download/${id}`)).text();
    return button;
};

const osumain = async () => {
    await waitFor(".card.mr-2");
    const bruh = Array.from(document.querySelectorAll(".card.mr-2"));
    bruh.forEach((elem) => {
        console.log(elem);
        const imgSplithehe = elem.querySelector("img")?.src.split("/");
        if (imgSplithehe) {
            const id = imgSplithehe[imgSplithehe.findIndex((s) => s === "beatmaps") + 1];
            elem.appendChild(createButton(id));
        }
    });
};

export default osumain;
