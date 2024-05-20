document.getElementById("submit").addEventListener("click",()=>{
    let firstInput = document.getElementById("frstname");
    let firstOutput = firstInput.value;
    document.getElementById("name").innerText = firstOutput;
    //second
    let secondInput = document.getElementById("fathername");
    let secondOutput = secondInput.value;
    document.getElementById("f-name").innerText = secondOutput;
    //third
    let thirdInput = document.getElementById("degree");
    let thirdOutput = thirdInput.value;
    document.getElementById("last-degree").innerText = thirdOutput;
    //four
    let fourthInput = document.getElementById("age");
    let fourthOutput = fourthInput.value;
    document.getElementById("h2-Age").innerHTML = fourthOutput;
    //five
    let fivthInput = document.getElementById("gender");
    let fivthOutput = fivthInput.value;
    document.getElementById("h2-gender").innerText = fivthOutput;
})