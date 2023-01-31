var terminal = document.querySelectorAll(".terminal-code line");
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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

pawAnimation(0.19, true);
typingTerminal(0.1, terminal);
