/**Buy ticket js */
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const removeModal = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function showBuyTicket() {
    modal.classList.add("open");
}

function removeBuyTicket() {
    modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showBuyTicket);
}
removeModal.addEventListener("click", removeBuyTicket);
modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});

/*Mobile menu button Open/Close*/
let header = document.getElementById("header");
let mobileMenuBtn = document.querySelector(".mobile-menu");
let headerHeight = header.clientHeight;
console.log(mobileMenuBtn);
mobileMenuBtn.onclick = function () {
    let isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
};
/*Auto close when choose menu */
let menuItems = document.querySelectorAll("#nav li a[href*='#']");
for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        let isParentMenu = menuItem.nextElementSibling;
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    };
}
