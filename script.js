
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});


const commentForms = document.querySelectorAll("form[id^='commentForm']");
commentForms.forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nameInput = this.querySelector("input[type='text']");
        const commentInput = this.querySelector("textarea");
        const commentsList = this.nextElementSibling;

        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (name && comment) {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                <strong>${name}</strong>
                <p>${comment}</p>
            `;
            commentsList.appendChild(commentElement);
            nameInput.value = "";
            commentInput.value = "";
        } else {
            alert("Please fill in both fields before submitting.");
        }
    });
});


const subscribeForm = document.getElementById("subscribeForm");
subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector("input[type='email']");
    const email = emailInput.value.trim();

    if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        emailInput.value = "";
    } else {
        alert("Please enter a valid email address.");
    }
});
