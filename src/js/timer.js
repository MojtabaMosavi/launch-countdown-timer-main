
export const Timer=(function(){

    // dom caching 
    const timer = document.querySelector(".timer");
    const timerDTopSection = timer.querySelector(".timer__top-section--days");
    const timerDBottomSection = timer.querySelector(".timer__bottom-section--days");
    const timerHTopSection = timer.querySelector(".timer__top-section--hours");
    const timerHBottomSection = timer.querySelector(".timer__bottom-section--hours");
    const timerMTopSection = timer.querySelector(".timer__top-section--minutes");
    const timerMBottomSection = timer.querySelector(".timer__bottom-section--minutes");
    const timerSTopSection = timer.querySelector(".timer__top-section--seconds");
    const timerSBottomSection = timer.querySelector(".timer__bottom-section--seconds");



    // variables 
    let _days,_hours,_minutes,_seconds,_diffInSeconds;
    const _flipDuration = 500;
    let _countDownFinished = false;
    let _currentDataInMillieSeconds = Date.now();
    const intervals = []
    


    //functions 
    function init(days=0,hours=0,minutes=0,seconds=0){
        setCountDownTime(days,hours,minutes,seconds);
        setCountDownContent(days,hours,minutes,seconds);
        _startCountDown();
    }

    /**
     * initilizes the the countdown variables 
     * @param {days} days 
     * @param {*hours} hours 
     * @param {*minutes} minutes 
     * @param {*seconds} seconds 
     */
    function setCountDownTime(days,hours,minutes,seconds){
        _days = days;
        _hours = hours;
        _minutes = minutes;
        _seconds = seconds +1 ;
    }


    /**
     * 
     * @param {days} days 
     * @param {*hours} hours 
     * @param {*minutes} minutes 
     * @param {* seconds} seconds 
     */
    function setCountDownContent(days=0,hours=0,minutes=0,seconds=0){
        setElementContent(timerDTopSection,timerDBottomSection,days);
        setElementContent(timerHTopSection,timerHBottomSection,hours);
        setElementContent(timerMTopSection,timerMBottomSection,minutes);
        setElementContent(timerSTopSection,timerSBottomSection,seconds);
    }

    /**
     * 
     * @param {tsection} tSection top-section of the timer__box
     * @param {*duration} duration of the aniamtion 
     */
    function _addFlipAnimation(tSection=null,duration=0){
        tSection.classList.add("timer__top-section--active");
        setTimeout(()=>{
            tSection.classList.remove("timer__top-section--active");
        },duration)
    }

    /**
     * function to set content of n elements 
     * The last element = content
     * @param  {...any} args
     * elements 
     */
   function setElementContent(...args){
       const content = args.pop();
       for(let j=0; j !== args.length; j++){
           try{
            args[j].innerHTML = prependZero(content);
           }catch(error){
               console.log(error);
           }
       } 
   }

   // set the content of the box and animate it
    function setDays(days=0){
        setElementContent(timerDTopSection,timerDBottomSection,days);
        _addFlipAnimation(timerDTopSection,_flipDuration);
    }

    function setHours(hours=0){
        setElementContent(timerHTopSection,timerHBottomSection,hours);
        _addFlipAnimation(timerHTopSection,_flipDuration);
    }

    function setMinutes(minutes=0){
        setElementContent(timerMTopSection,timerMBottomSection,minutes);
        _addFlipAnimation(timerMTopSection,_flipDuration);
    }

    function setSeconds(seconds=0){
        setElementContent(timerSTopSection,timerSBottomSection,seconds);
        _addFlipAnimation(timerSTopSection,_flipDuration);
    }

    /**
     * 
     * @returns total countdown time in milliesecond
     */
    function getTotalMillieSeconds() {
        return  ((_days*24*3600) + (_hours *3600) + (_minutes * 60) + _seconds) * 1000
    }

    /**
     * 
     * @param {time} time 
     * @returns time with a leading zero if time < 10 
     */
    function prependZero(time){
        return time < 10 ? `0${time}` : time;
    }

    /**
     * 
     * @returns obejct containing the countdown time 
     */
    function calculateCountdownTime(){
        let currentDate = new Date();
        let _countdownDate = _currentDataInMillieSeconds + getTotalMillieSeconds();
        _diffInSeconds = Math.abs(_countdownDate - currentDate) / 1000;
        Math.floor(_diffInSeconds) === 0 ? _countDownFinished = true : null;

        let days = Math.floor(_diffInSeconds / (3600 * 24));
        let hours = Math.floor(_diffInSeconds/ 3600) % 24;
        let minutes = Math.floor(_diffInSeconds / 60) % 60 ;
        let seconds = Math.floor(_diffInSeconds) % 60;
        
        return {
            days:days,
            hours:hours,
            minutes:minutes,
            seconds:seconds
        }
    }

    function _startCountDown(){

        // updating the countdown 
        const secondInterval = setInterval(() => {
            const {days,seconds,minutes,hours} = calculateCountdownTime();

            // update days 
            (minutes === 59 && seconds === 59 && hours === 23) ? 
            (setDays(days),setHours(hours),setMinutes(minutes),setSeconds(seconds)): 
            setSeconds(seconds);

            // update hours 
            (minutes === 59 && seconds === 58 && hours === 0) ? 
            (setHours(hours),setMinutes(minutes),setSeconds(seconds)) : setSeconds(seconds);

            // update minutes 
            (seconds === 59) ? (setMinutes(minutes),setSeconds(seconds)): setSeconds(seconds);
            
            //update seconds  
            setSeconds(seconds);

            // terminating the countdown 
            (_countDownFinished) ? terminateCountdown(): null;

        }, 1000 );
        intervals.push(secondInterval);

    }

    function terminateCountdown(){
        intervals.forEach(interval => (
            clearInterval(interval)
        ))
    }
    // API 
    return {
        init:init,
        setCountDownTime:setCountDownTime,
        prependZero: prependZero,
        getTotalMillieSeconds:getTotalMillieSeconds,
        terminateCountdown:terminateCountdown,
        calculateCountdownTime:calculateCountdownTime,
        setSeconds:setSeconds,
        setMinutes:setMinutes,
        setHours:setHours,
        setDays:setDays,
        setCountDownTime:setCountDownTime,
        setElementContent:setElementContent,

    }   

})()
