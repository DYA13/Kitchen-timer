const startButton = document.querySelector("#startButton");
const countdown = document.querySelector("#countdown");
//const myAudio = document.querySelector("#myAudio");

function play() {
    //myAudio.play();
    document.querySelector("#audioParent").innerHTML = `<audio src="https://cdn.glitch.global/155b1476-8cac-4142-b664-6f237a310478/sound2.mp3?v=1643809459517" id="myAudio" autoplay="autoplay" loop="loop" type="audio/mp3"></audio>`;
    document.querySelector("#countdown").textContent = "Time is out!";
    setTimeout(resetTimer, 6000);
    }

startButton.addEventListener("click", function(){
timer();		
})

function timer(){

    const timer = Number(document.querySelector("#minutes").value);
    let amountTime = (timer*60) + Number(document.querySelector("#seconds").value);
    
    function calculateTime(){
        const countdown=document.querySelector("#countdown");
    
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
    
        amountTime--;
    
        if (seconds<10) {
            seconds = "0"+seconds;
        }
      
        
        countdown.textContent = `${minutes} : ${seconds}`;
        if (amountTime<0) {
                stopTimer();
            amountTime=0;
		play()
        }
		

        function stopTimer(){
            clearInterval(timerId);
			//refresh()
        }
    }
    let timerId = setInterval(calculateTime,1000);


    }
    
    function resetTimer() {
        document.querySelector("#countdown").textContent = "00:00";
        document.querySelector("#minutes").value = "";
        document.querySelector("#seconds").value = "";
        myAudio.pause();
        myAudio.currentTime = 0;
      }  
