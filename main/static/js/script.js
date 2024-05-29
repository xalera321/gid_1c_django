// бесконечная лента прокрутки
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

document.addEventListener("DOMContentLoaded", function () {
    var cardContainer = document.querySelector(".card-container");

    if (cardContainer) {
        cardContainer.addEventListener("click", function (event) {
            var targetCard = event.target.closest(".custom-card");

            if (targetCard) {
                var link = targetCard.querySelector("a");

                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    }
});

