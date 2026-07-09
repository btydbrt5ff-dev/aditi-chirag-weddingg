// =======================
// Wedding Countdown
// =======================

const weddingDate = new Date("August 30, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance < 0){

        timer.innerHTML = "💍 We Are Married ❤️";
        return;

    }

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    const seconds = Math.floor((distance % (1000*60)) / 1000);

    timer.innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

},1000);


// =======================
// Fade Animation on Scroll
// =======================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=".8s";

    observer.observe(card);

});


// =======================
// Floating Hearts ❤️
// =======================

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-20px";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.pointerEvents="none";
    heart.style.animation="floatHeart 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

},800);


// =======================
// Heart Animation CSS
// =======================

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0) rotate(0deg);
opacity:1;

}

100%{

transform:translateY(-110vh) rotate(360deg);
opacity:0;

}

}

`;

document.head.appendChild(style);


// =======================
// Smooth Button Click
// =======================

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        if(this.hash){

            e.preventDefault();

            document.querySelector(this.hash).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});