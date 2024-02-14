let counter = 0
let secoundarycounter = 10
let x = setInterval(()=>{
    console.log(counter)
    if(counter <10) {
        document.getElementById("red").style.opacity =1
        document.getElementById("green").style.opacity =0
        document.getElementById("counter").innertext = '0' +counter
    }else if(counter == 10){
        document.getElementById("red").style.opacity =1
        document.getElementById("green").style.opacity =0
        document.getElementById("counter").innertext = counter
    }else if (counter< 20 && counter > 10){
        document.getElementById("counter").innerText= secoundarycounter
        secoundarycounter--
    }else if(counter == 20){
        document.getElementById("counter").innerText= secoundarycounter = 10
        counter = 0
        secoundarycounter = 10
    }
    counter++
},1000)   