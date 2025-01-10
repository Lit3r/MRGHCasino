let buttons = document.querySelectorAll(".button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
        let t = event.target;
        t.style.setProperty("width", (t.offsetWidth + 15) + "px"); 
        t.style.setProperty("height", (t.offsetHeight + 15) + "px");
        setTimeout(function(){
            t.style.setProperty("width", (t.offsetWidth - 15) + "px"); 
            t.style.setProperty("height", (t.offsetHeight - 15) + "px");
        }, 250);
    });
}

let loginb = document.querySelector("#loginb");
let signinb = document.querySelector("#signinb");

let signgin = document.querySelector("#signin");
let login = document.querySelector("#login");


loginb.addEventListener("click", function(){
    login.style.setProperty("display", "block");
});

window.addEventListener("click", function(event){
    let t = event.target;
    if(t.classList.contains("popout") || t.classList.contains("button")) {
        if(t.matches("#signinb")){
        signin.style.setProperty("display", "block");
        this.setTimeout(function(){
            signin.style.setProperty("opacity", "1");
        },0);
        }
        if(t.matches("#loginb")) {
        login.style.setProperty("display", "block");
        this.setTimeout(function(){
            login.style.setProperty("opacity", "1");
        },0);
        }
    }
});

let close = document.querySelectorAll(".close");

for(let i = 0; i < 2; i++){
    close[i].addEventListener("click", function(){
        setTimeout(
            function(){
                login.style.setProperty("opacity", "0.0");
                signin.style.setProperty("opacity", "0.0");
                setTimeout(
                    function(){
                        login.style.setProperty("display", "none");
                        signin.style.setProperty("display", "none");
                    }
                , 400);
            }
        , 0);
    });
}