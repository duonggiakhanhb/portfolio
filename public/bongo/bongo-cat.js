
var terminal = document.querySelectorAll(".terminal-code line");
var notes = document.querySelectorAll(".note");
var paw = {
    left: {
        up: document.querySelector(".paw-left > .up"),
        down: document.querySelector(".paw-left > .down")
    },
    right: {
        up: document.querySelector(".paw-right > .up"),
        down: document.querySelector(".paw-right > .down")
    }
}

const style = getComputedStyle(document.documentElement);
const green = style.getPropertyValue("--green");
const pink = style.getPropertyValue("--pink");
const blue = style.getPropertyValue("--blue");
const orange = style.getPropertyValue("--orange");
const cyan = style.getPropertyValue("--cyan");


// Function -----------------------------------------------------------------------------------------------
const randomArray = (items) => { 
    return items[Math.floor(Math.random()*items.length)]; 
};
const colorizer = () => randomArray([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"]);

const randomFromToInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const dir = (amt) => `${randomArray(["-", "+"])}=${amt}`;




function clearTerminal(nodes) {
    nodes.forEach(element => {
        element.setAttribute("style", "stroke-dashoffset: 0.0001px; stroke-dasharray: 0px 999999px");
    });
};

function typingTerminal(duration, nodes ) {
    return new Promise((resolve, reject) => {
    let idx = 0;
    let bigloop = setInterval(function () {
        if (idx >= nodes.length) {
            clearInterval(bigloop);
            setTimeout(() => {
                clearTerminal(nodes);
                typingTerminal(duration, nodes);
            }, 0.1*1000)
            
        }
        else {

            let node = nodes[idx];
            let x1 = node.getAttribute("x1");
            let x2 = node.getAttribute("x2");
            let distance = x1-x2;
            let count = 0;
            idx ++;
            let firstloop = setInterval(function () {
                if (count >= duration) {
                    clearInterval(firstloop);
                }
                var offset = distance*(duration-count)/duration;
                offset = offset < 0 ? 0 : offset;
    
                node.setAttribute("style", `stroke-dashoffset: 0px; stroke-dasharray: ${distance-offset*0.9}px ${offset}px`);
                count+=0.005;
            }, 0.005*1000)  
        }
    }, 0.1*1000)
})
}


function pawAnimation(duration, state) {
    setInterval(() => {        
        paw.left.down.setAttribute("style", `opacity: ${state == true ? 1 : 0}`);
        paw.right.up.setAttribute("style", `opacity: ${state == true ? 1 : 0}`);

        paw.left.up.setAttribute("style", `opacity: ${state == true ? 0 : 1}`);
        paw.right.down.setAttribute("style", `opacity: ${state == true ? 0 : 1}`);
        state = !state;
    }, duration*1000)
}

pawAnimation(0.17, true);
typingTerminal(0.1, terminal);

// const tl = anime.timeline({
//     easing: 'easeOutExpo',
// });

// const noteEls = [].slice.call(shuffle(notes));
// const numNotes = noteEls.length / 3;
// const notesG1 = noteEls.splice(0, numNotes);
// const notesG2 = noteEls.splice(0, numNotes);
// const notesG3 = noteEls;

// const animateNotes = (els) => {
//     els.forEach((el) => {
//         el.setAttribute("style", "transform: none;");
//         anime({
//             targets: el,
//             stroke: colorizer(),
//             translateX: {
//                 value: function () { return dir(anime.random(-25 ,25)) },
//             },
//             opacity: "0"
//         });
//     })
//     anime(
//     {
//         targets: els,
//         complete: () => animateNotes(els),
//         scale: {
//             value: [0,1],
//         },
//         rotate: {
//             value: function () { return dir(anime.random(10, 20)) },
//         },
//         translateY: function () { return randomFromToInt(-200, -220) },
//         translateX: {
//             value: function () { dir(randomFromToInt(40 ,60)) },
//         },
//         opacity: ["100%", "0%"],
//         duration: 2000,
//         easing: 'easeInOutQuad',
//         delay: anime.stagger(500),
//     });
// }
// tl.add({ update: () => animateNotes(notesG1)}).add({ update: () => animateNotes(notesG2)}, "+=250").add({ update: () => animateNotes(notesG3)}, "+=250");
