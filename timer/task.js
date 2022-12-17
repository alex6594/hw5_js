const countTime  = function(){
    const sec = document.getElementById("seconds");
    const min = document.getElementById("minutes");
    const h = document.getElementById("hours");

    if (sec.textContent >= 1){
        sec.textContent --;
    }	
    else if((sec.textContent = '0') && (min.textContent >= 1)){
        min.textContent --;
        sec.textContent = 59;
    }
    else if((min.textContent = '0') && (h.textContent >= 1)){
            h.textContent --;
            min.textContent = 59;
        }
    else {
        alert('No much time')
    }
    }
    


setInterval(countTime,1000);