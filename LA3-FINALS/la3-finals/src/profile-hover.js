export function profileHover() {
    const parentDivs = document.querySelectorAll('[id^="playlist-profile"], [id^="pinned-playlist-profile"], [id^="playlist-categ"]');


    parentDivs.forEach((parentDiv) => {
    const childDiv = parentDiv.querySelector('[id^="play-btn"]');

    parentDiv.addEventListener("mouseenter", () => {
        childDiv.classList.add("lg:opacity-100");
    });

    parentDiv.addEventListener("mouseleave", () => {
        childDiv.classList.remove("lg:opacity-100");
    });
    });
}
  