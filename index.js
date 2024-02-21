let hrs = document.getElementById("hrs"),
    min = document.getElementById("min"),
    sec = document.getElementById("sec");

setInterval(() => {
    let currectTime = new Date();

    hrs.innerHTML = (currectTime.getHours() < 10 ? "0" : "") + currectTime.getHours();
    min.innerHTML = currectTime.getMinutes();
    sec.innerHTML = (currectTime.getSeconds()<10? "0" : "") + currectTime.getSeconds();
}, 0)
