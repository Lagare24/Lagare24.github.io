function buttonClick1() {
    let a = document.getElementById("p2-box1");
    if (a.style.display === "none") {
        a.style.display = "block";
        document.getElementById("buttons-box1").innerText = "Show Less";
        console.log("block");
    } else {
        a.style.display = "none";
        document.getElementById("buttons-box1").innerText = "Show More";
        console.log("none");
    }
}
function buttonClick3() {
    let c = document.getElementById("p2-box3");
    if (c.style.display === "none") {
        c.style.display = "block";
        document.getElementById("buttons-box3").innerText = "Show Less";
        console.log("block");
    } else {
        c.style.display = "none";
        document.getElementById("buttons-box3").innerText = "Show More";
        console.log("none");
    }
}
function buttonClick5() {
    let e = document.getElementById("p2-box5");
    if (e.style.display === "none") {
        e.style.display = "block";
        document.getElementById("buttons-box5").innerText = "Show Less";
        console.log("block");
    } else {
        document.getElementById("buttons-box5").innerText = "Show More";
        e.style.display = "none";
        console.log("none");
    }
}
function feedbackConfirm() {
    if(document.getElementById("feedback").value == ''){
        alert("Please enter some text before submitting");
    }else{
        alert("Comment successfully sent to the authors");
    }
}
function showVid() { 
    let cebCul = document.getElementById("cebu-culture");
    let mainBod = document.getElementById("main-body");
    let ceCul = document.getElementById("ceb-cul");
    if(cebCul.style.display === "none"){
        cebCul.style.display = "block";
        mainBod.style.overflow = "hidden";
        console.log("block");
        ceCul.src = "multimedias/cebu-culture.mp4";
    } else{
        cebCul.style.display = "none";
        mainBod.style.overflow = "visible";
        ceCul.src ="";
        console.log("none");
    }
}
function closeButton() {
    let cebuCulClose = document.getElementById("cebu-culture");
    let mainBodClose = document.getElementById("main-body");
    let ceCulClose = document.getElementById("ceb-cul");
    if(cebuCulClose.style.display === "block"){
        cebuCulClose.style.display = "none";
        ceCulClose.src = "";
        mainBodClose.style.overflow = "visible";
        console.log("working");
    }
}