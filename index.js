let btnChangeColor = document.getElementById("btn-change-color");
let colorHex = document.getElementById("hex-color");

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


    btnChangeColor.addEventListener("click", function(){
        let hexColor = "#"
        
        for (var i = 0; i < 6; i++) {
        let hexRandom = Math.floor(Math.random() * hex.length);
        hexColor += hex[hexRandom];
    }  
    colorHex.innerHTML = document.body.style.backgroundColor = hexColor;  
    });
    
  

       

