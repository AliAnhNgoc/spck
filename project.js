
let contactForm = document.getElementById("contactForm")
let thankTitle = document.getElementById("thankTitle")
let button = document.getElementById("contact__btn")
let attention = document.getElementById("attention")
let contact__name = document.getElementById("contact__name")
let contact__email = document.getElementById("contact__email")
let onTop = document.getElementById("onTop")

let home = document.getElementById("home")
let about = document.getElementById("about")
let more = document.getElementById("more")
let contact = document.getElementById("contact")

button.onclick = function () {
    if (contact__name.value == "" || contact__email.value == "") {
        attention.innerText = "Please fill in all the blanks !";
    } else {
        contactForm.classList.add("hidden")
        thankTitle.classList.remove("hidden")
    }
}

contact__name.oninput = function () {
    attention.innerText = "";

}

contact__email.oninput = function () {
    attention.innerText = "";

}

onTop.onclick = function () {
    window.scrollTo(0, 0);
    console.log("test")
}

//about 1387 more 2693 contact 4804      
window.onscroll = function () {
    let y = window.pageYOffset;

    if (y >= 0 && y < 1387) {
        home.classList.add("selected")
    } else {
        home.classList.remove("selected")
    }

    if (y >= 1387 && y < 2693) {
        about.classList.add("selected")
    } else {
        about.classList.remove("selected")
    }

    if (y >= 2693 && y < 4804) {
        more.classList.add("selected")
    } else {
        more.classList.remove("selected")
    }

    if (y >= 4804) {
        contact.classList.add("selected")
    } else {
        contact.classList.remove("selected")
    }
}

