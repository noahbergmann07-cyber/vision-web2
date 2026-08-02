// =====================================
// VISION WEB PREMIUM INTERACTIONS V2
// =====================================


// ===============================
// HEADER SCROLL SYSTEM
// ===============================

const header = document.querySelector(".header");

let lastScroll = 0;


function headerAnimation(){

    if(!header) return;

    const currentScroll = window.scrollY;

    if(currentScroll > 50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

    console.log("Scroll:", currentScroll);


    if(currentScroll > lastScroll && currentScroll > 120){

        header.classList.add("hide");

    }else{

        header.classList.remove("hide");

    }


    lastScroll = currentScroll;

}



// ===============================
// PREMIUM REVEAL SYSTEM
// ===============================


const revealElements = document.querySelectorAll(
    "section, .card, .project, .step, .priceCard, .aboutBox, .transformationHeader, .beforeCard, .afterCard, .service-card"
);



const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }


    });


},

{
    threshold:0.15
}

);



revealElements.forEach(element=>{

    element.classList.add("reveal");

    revealObserver.observe(element);

});




// ===============================
// PREMIUM BEFORE AFTER SLIDER
// ===============================


const comparison = document.querySelector(".comparison");
const comparisonBefore = document.querySelector(".comparisonBefore");
const comparisonHandle = document.querySelector(".comparisonHandle");


if(comparison && comparisonBefore && comparisonHandle){
    // ===============================
// SCROLL TRANSFORMATION EFFECT
// ===============================


function updateTransformation(){

    const rect = comparison.getBoundingClientRect();

    const windowHeight = window.innerHeight;


    const progress =
    1 - (rect.top / windowHeight);


    const value =
    Math.max(0, Math.min(progress, 1));


    const percentage =
5 + (value * 95);



    comparisonBefore.style.width =
    percentage + "%";


    comparisonHandle.style.left =
    percentage + "%";


}



window.addEventListener(
"scroll",
updateTransformation
);


updateTransformation();


let isDragging = false;


function moveSlider(x){


const rect = comparison.getBoundingClientRect();


let position = x - rect.left;


position = Math.max(
0,
Math.min(position, rect.width)
);


const percent =
(position / rect.width) * 100;


comparisonBefore.style.width =
percent + "%";


comparisonHandle.style.left =
percent + "%";


}



comparison.addEventListener(
"mousedown",
()=>{

isDragging = true;

}
);



window.addEventListener(
"mouseup",
()=>{

isDragging = false;

}
);



window.addEventListener(
"mousemove",
(e)=>{

if(isDragging){

moveSlider(e.clientX);

}

}
);



comparison.addEventListener(
"touchstart",
()=>{

isDragging = true;

}
);



window.addEventListener(
"touchend",
()=>{

isDragging = false;

}
);



window.addEventListener(
"touchmove",
(e)=>{

if(isDragging){

moveSlider(
e.touches[0].clientX
);

}

}

);


}


const transformationArea =
document.querySelector(".transformation");


const beforeCard =
document.querySelector(".beforeCard");


const afterCard =
document.querySelector(".afterCard");


function transformationAnimation(){


    if(!transformationArea) return;


    const rect =
    transformationArea.getBoundingClientRect();


    const progress = Math.min(
        Math.max(
            (window.innerHeight - rect.top)
            /
            window.innerHeight,
            0
        ),
        1
    );



    if(beforeCard){

        beforeCard.style.transform = `

        translateZ(${-80 - progress * 120}px)

        rotateY(${12 + progress * 8}deg)

        `;

    }



    if(afterCard){


        afterCard.style.transform = `

        translateZ(${80 + progress * 160}px)

        rotateY(${-8 - progress * 10}deg)

        scale(${1 + progress * .05})

        `;


    }



}




// ===============================
// CINEMATIC BRIDGE CAMERA
// ===============================


const bridge =
document.querySelector(".cinematicBridge");


const bridgeVideo =
document.querySelector(".cinematicBridge video");




function bridgeAnimation(){


    if(!bridge || !bridgeVideo) return;



    const rect =
    bridge.getBoundingClientRect();



    const progress = Math.min(

        Math.max(

            (window.innerHeight - rect.top)

            /

            (window.innerHeight + rect.height),

            0

        ),

        1

    );



    const scale =
    1.15 + progress * 0.35;



    bridgeVideo.style.transform =
    `scale(${scale})`;



}




// ===============================
// TRANSFORMATION SCENE ACTIVATION
// ===============================


const transformation =
document.querySelector(".transformation");



const sceneObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("sceneActive");

    }


});


},

{
threshold:.25
}

);



if(transformation){

sceneObserver.observe(transformation);

}




// ===============================
// BEFORE AFTER ACTIVATION
// ===============================


const transformationObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


if(beforeCard){

beforeCard.classList.add("sceneMove");

}


if(afterCard){

afterCard.classList.add("sceneMove");

}



}


});


},

{
threshold:.45
}

);



if(transformationArea){

transformationObserver.observe(transformationArea);

}





// ===============================
// MASTER SCROLL CONTROLLER
// ===============================


window.addEventListener(
"scroll",
()=>{


headerAnimation();


transformationAnimation();


bridgeAnimation();



},

{
passive:true
}

);



// ===============================
// PAGE LOAD EFFECT
// ===============================


window.addEventListener(
"load",
()=>{


document.body.classList.add("loaded");


}

);

const transformationBridge =
document.querySelector(".transformation-bridge");


const bridgeObserver = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            transformationBridge.classList.add("show");

        }

    });

},
{
    threshold:0.25
});


if(transformationBridge){

    bridgeObserver.observe(transformationBridge);

}
