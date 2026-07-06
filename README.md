# aditi-chirag-weddingg
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aditi ❤️ Chirag</title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">

</head>

<body>

<div class="hero">

<h3>Wedding Invitation</h3>

<h1>Aditi ❤️ Chirag</h1>

<p>
"Two hearts, one promise,
a lifetime of love."
</p>

<a href="#events">
<button>Open Invitation</button>
</a>

</div>


<section class="countdown">

<h2>Countdown to Forever 💍</h2>

<div id="timer"></div>

</section>


<section id="events">

<h2>Wedding Events</h2>

<div class="card">

<h3>🌿 Mehndi</h3>

<p>28 August 2026</p>

</div>

<div class="card">

<h3>💛 Haldi</h3>

<p>29 August 2026</p>

</div>

<div class="card">

<h3>🎵 Sangeet</h3>

<p>29 August 2026</p>

</div>

<div class="card">

<h3>💍 Wedding</h3>

<p>30 August 2026</p>

</div>

</section>


<section class="venue">

<h2>Venue</h2>

<p>Navdeep Resort</p>

<a href="https://maps.app.goo.gl/KBG1vhg4phfne3kB6?g_st=ic" target="_blank">

<button>Open Google Maps</button>

</a>

</section>


<script src="script.js"></script>

</body>

</html>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#fffdf8;
    color:#333;
}

.hero{
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
    background:linear-gradient(rgba(255,255,255,.7),rgba(255,255,255,.7)),
    url("images/photo1.jpg") center/cover;
}

.hero h3{
    color:#b8860b;
    letter-spacing:4px;
    margin-bottom:10px;
}

.hero h1{
    font-size:55px;
    font-family:'Cormorant Garamond',serif;
    color:#7a4a00;
}

.hero p{
    margin-top:20px;
    font-size:20px;
    max-width:600px;
    line-height:1.7;
}

button{
    margin-top:35px;
    padding:15px 35px;
    border:none;
    border-radius:40px;
    background:#c9a227;
    color:white;
    font-size:18px;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    transform:scale(1.05);
    background:#b8860b;
}

.countdown{
    padding:80px 20px;
    text-align:center;
    background:#fff;
}

.countdown h2{
    font-size:38px;
    margin-bottom:30px;
    color:#7a4a00;
}

#timer{
    font-size:32px;
    font-weight:bold;
    color:#b8860b;
}

#events{
    padding:80px 20px;
    background:#fff8ef;
}

#events h2{
    text-align:center;
    margin-bottom:50px;
    color:#7a4a00;
    font-size:38px;
}

.card{
    background:white;
    max-width:500px;
    margin:20px auto;
    padding:30px;
    border-radius:20px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    transition:.4s;
}

.card:hover{
    transform:translateY(-10px);
}

.card h3{
    color:#b8860b;
    margin-bottom:15px;
}

.card p{
    font-size:18px;
}

.venue{
    padding:80px 20px;
    text-align:center;
    background:white;
}

.venue h2{
    font-size:38px;
    color:#7a4a00;
}

.venue p{
    margin:20px 0;
    font-size:22px;
}

footer{
    padding:30px;
    text-align:center;
    background:#7a4a00;
    color:white;
}

@media(max-width:768px){

.hero h1{
font-size:38px;
}

.hero p{
font-size:17px;
}

.countdown h2,
#events h2,
.venue h2{
font-size:30px;
}

button{
width:100%;
max-width:280px;
}

.card{
margin:15px;
}

}
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