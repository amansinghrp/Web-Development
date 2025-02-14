let btn = document.querySelector("button");
let currMode = "light"
btn.addEventListener("click", ()=>{
    if(currMode ==="light"){
        currMode = "dark";
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
    else
    {
        currMode = "light";
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}) 