const cookieImage = document.getElementById("cookie");
const cookieClick = document.getElementById("clicker__counter");
let cookieSize = document.getElementById("cookie")

cookieImage.onclick = function() {
    let currentClicks = parseInt(cookieClick.textContent);
    cookieClick.textContent = currentClicks + 1; 
    if (cookieClick.textContent % 2 == 1){
        cookieSize.style.width = '180px';
        cookieSize.style.height = '150px';
    }           
    else {
        cookieSize.style.width = '200px';
        cookieSize.style.height = '140px';
    }
};
