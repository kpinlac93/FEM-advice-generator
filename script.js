const button = document.querySelector(".button");

button.addEventListener("click", fetchData);

async function fetchData () {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data);
        document.getElementById("msg").innerHTML = data.slip.advice;
        document.getElementById("num").innerHTML = data.slip.id;
    } catch(err) {
        document.getElementById;
    }
}