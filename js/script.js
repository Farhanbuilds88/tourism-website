// MOBILE NAVBAR

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn){

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


// BUTTON ALERTS

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.innerText.includes("Book")){

            alert("Booking feature coming soon!");

        }

    });

});


// GALLERY LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

if(galleryImages.length > 0){

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = image.src;

        });

    });

}

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}


// ANIMATED COUNTERS

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || subject === "" || message === ""){

            alert("Please fill all fields!");

            return;

        }

        if(!email.includes("@")){

            alert("Please enter a valid email!");

            return;

        }

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}