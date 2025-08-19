let slideIndex=1;
showSlides(slideIndex);

//Next and prev controls
function plusSlides(n){
    showSlides(slideIndex+=n);
}

function showSlides(n){
    let i;
    let slides=document.getElementsByClassName("mySlides");
    
    //return to start
    if (n>slides.length){
        slideIndex=1
    }

    if (n<1){
        slideIndex=slides.length
    }

    for (i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

   slides[slideIndex-1].style.display="block"; 
}

//--------------------------------------------------------
//Typewriter animation (home box)
const textElement=document.getElementById("typewriter1");
const textToType = "Hi! I'm Emily Yu, an incoming computer engineering student at the University of Waterloo! I'm really passionate about promoting STEM engagement among underrepresented groups and love problem solving. With an interest in software development and eagerness to explore hardware systems, I am looking forward to my next few years as part of Waterloo's innovative community and experiential learning opportunities.\n\nIn my spare time, I love spending time outdoors, going for runs, watching movies, and hanging out with friends! :)";    
let charIndex=0;
const typingSpeed=65;

let hasTyped1=false;

function typeWriter(){
    if (charIndex<textToType.length){
        textElement.textContent+=textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter,typingSpeed);
    }else{
        textElement.style.borderRight="none";
        textElement.style.animation="none";
    }
}


//-------------------------------------------------------------------------

const textElement2=document.getElementById("typewriter2");
const tagType="A snippet of summer 2025! <3";
let charIndex2=0;
const typeSpeed2=150;
let hasTyped2=false;

function typeWriter2(){
    if (charIndex2<tagType.length){
        textElement2.textContent+=tagType.charAt(charIndex2);
        charIndex2++;
        setTimeout(typeWriter2,typeSpeed2);
    }else{
        textElement2.style.borderRight="none";
        textElement2.style.animation="none";
    }
}

//Scroll trigger
window.addEventListener("scroll",function(){
    const windowHeight=this.window.innerHeight-50;
    const elementTop=textElement.getBoundingClientRect().top;

    const elementTop2=textElement2.getBoundingClientRect().top;

    if (elementTop<windowHeight && !hasTyped1){
        hasTyped1=true;
        typeWriter();
    }

    if (elementTop2<windowHeight && !hasTyped2){
        hasTyped2=true;
        typeWriter2();
    }
});


