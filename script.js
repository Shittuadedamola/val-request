const noButtonWordings = ["No", "Are you sure?", "Are you sure you're sure?", "You better say yes", 
    "Babe pleeeeeaaasseee🥺", "Can't you say yes babe?", "You really mean it?"
]

var ini = 0
var siz = 30

const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const yesContainer = document.querySelector(".yes-container");
const yesVideo = document.querySelector(".yes-container video");


window.addEventListener('DOMContentLoaded', function(){
    btns[1].innerHTML = noButtonWordings[ini]
})

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const answer = e.target.classList
        
        if (answer.contains("yes")){
            container.style.display = "none"
            yesContainer.style.display = "flex"
            yesVideo.play().catch(err => {
            console.log("Safari autoplay fix:", err);
    });
        }

        else if(answer.contains("no")){
            ini++
            if (ini >= noButtonWordings.length) {
                ini = noButtonWordings.length - 1;
            }
            btns[1].innerHTML = noButtonWordings[ini]
            siz+=8
            btns[0].style.width = siz+"%";
            btns[0].style.height = siz+"%"
        }
    })
})