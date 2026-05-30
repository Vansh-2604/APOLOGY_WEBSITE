function showLove(){

    document.getElementById("thankYouMsg").style.display = "block";

    document.querySelector(".thank-box")
            .classList.add("drop-animation");
    
    setTimeout(() => {
        document.getElementById("thankYouMsg").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 300);

    for(let i = 0; i < 100; i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "0px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
function scrollToMessage(){
    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });
}
function goToReasons(){
    document.getElementById("reasons").scrollIntoView({
        behavior: "smooth"
    });
}

function goToForgive(){
    document.getElementById("forgive").scrollIntoView({
        behavior: "smooth"
    });
}