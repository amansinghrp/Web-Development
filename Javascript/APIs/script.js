let URL = "https://cat-fact.herokuapp.com/facts"
let factPara = document.querySelector("#factPara");
let btn = document.querySelector("#btn");

const getfacts = async ()=>{
    console.log("Getting data....");
    let response = await fetch(URL);
    let data = await response.json();
    factPara.innerText = data[2].text;
}

btn.addEventListener("click", getfacts);
