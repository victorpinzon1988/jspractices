window.onload= function(){

    let timeOnClocks = (function(){
        let _secondsTimer = 0;
        let _minutesTimer = 0;
        let _hoursTimer = 0;
        let _timerRunning = false;

        let daysOfTheWeek = {
            1: 'LUN',
            2: 'MAR',
            3: 'MIE',
            4: 'JUE',
            5: 'VIE',
            6: 'SAB',
            7: 'DOM'
        };
        
        let changeDigitalClock = () => {

            let now = new Date();
            document.getElementById('seconds').innerHTML = (now.getSeconds() < 10) ? ('0' + now.getSeconds()) : now.getSeconds();
            document.getElementById('minutes').innerHTML = (now.getMinutes() < 10) ? ('0' + now.getMinutes()) : now.getMinutes();
            document.getElementById('hours').innerHTML = (now.getHours() < 10) ? ('0' + now.getHours()) : now.getHours();
            document.getElementById('days').innerHTML = daysOfTheWeek[now.getDay()];
        };

        let changeAnalogousClock = () => {
            let now = new Date();
            
            document.getElementById('second-hand').style.transform = 'rotate(' + (((now.getSeconds() / 60) * 360) - 90) + 'deg)';
            document.getElementById('minute-hand').style.transform = 'rotate(' + (((now.getMinutes() / 60) * 360) - 90) + 'deg)';
            document.getElementById('hour-hand').style.transform = 'rotate('+ (((now.getHours() / 12) * 360) + ((now.getMinutes()/60)*30) - 90) +'deg)';
        }

        let changeTimer = () =>{

            if(_timerRunning){
                ++_secondsTimer;

                if(_secondsTimer >= 60){
                    _secondsTimer = 0;
                    _minutesTimer++;
                }

                if(_minutesTimer >= 60){
                    _secondsTimer = 0;
                    _minutesTimer = 0;
                    _hoursTimer++;
                }

                document.getElementById('hours-timer').innerHTML =  (_hoursTimer < 10) ? ('0' + _hoursTimer) : _hoursTimer;
                document.getElementById('minutes-timer').innerHTML = (_minutesTimer < 10) ? ('0' + _minutesTimer) : _minutesTimer;
                document.getElementById('seconds-timer').innerHTML = (_secondsTimer < 10) ? ('0' + _secondsTimer) : _secondsTimer;
            }

        }

        return{
            changeTimeOnClock: function(){
                changeDigitalClock();
                changeTimer();
                changeAnalogousClock();
                
            },
            startTimer: function(){
                _timerRunning = true;
            },
            stopTimer: function(){
                _timerRunning = false;
            },
            resetTimer: function(){
                _secondsTimer = 0;
                _minutesTimer = 0;
                _hoursTimer = 0;
            }
        
        };

    }());


    timeOnClocks.changeTimeOnClock();
    window.setInterval(timeOnClocks.changeTimeOnClock, 1000);

    //Hides all containers except the clock container
    document.getElementById('clockButton').onclick = function(){
        let timerPanel = document.getElementById('timer-container');
        if(!timerPanel.classList.contains('hide-panel'))
            timerPanel.classList.add('hide-panel');

        let analogousPanel = document.getElementById('analogous-container');
        if(!analogousPanel.classList.contains('hide-panel'))
            analogousPanel.classList.add('hide-panel');
        
        let clockPanel = document.getElementById('clock-container');
        clockPanel.classList.remove('hide-panel');
    };


    document.getElementById('timerButton').onclick = function(){
        let clockPanel = document.getElementById('clock-container');
        if(!clockPanel.classList.contains('hide-panel'))
            clockPanel.classList.add('hide-panel');

        let analogousPanel = document.getElementById('analogous-container');
        if(!analogousPanel.classList.contains('hide-panel'))
            analogousPanel.classList.add('hide-panel');
        

        let timerPanel = document.getElementById('timer-container');
        timerPanel.classList.remove('hide-panel');
    };
    
    this.document.getElementById('analogousClockButton').onclick = function(){
        let clockPanel = document.getElementById('clock-container');
        if(!clockPanel.classList.contains('hide-panel'))
            clockPanel.classList.add('hide-panel');
            
        let timerPanel = document.getElementById('timer-container');
        if(!timerPanel.classList.contains('hide-panel'))
            timerPanel.classList.add('hide-panel');
        
        let analogousPanel = document.getElementById('analogous-container');
        analogousPanel.classList.remove('hide-panel');
    };

    //Timer control panel
    document.getElementById('start-timer-button').onclick = function(){
        timeOnClocks.startTimer();
    }

    this.document.getElementById('stop-timer-button').onclick = function(){
        timeOnClocks.stopTimer();
    }

    this.document.getElementById('reset-timer-button').onclick = function(){
        timeOnClocks.resetTimer();
    }





    

};