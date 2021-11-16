
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
    let _days,_hours,_minutes,_seconds;
    const _flipDuration = 500;
    let _countDownFinished = false;
    let _currentDataInMillieSeconds = Date.now();



    //functions 
    function init(days=0,hours=0,minutes=0,seconds=0){
        setCountDownTime(days,hours,minutes,seconds);
        setCountDownContent(days,hours,minutes,seconds);
        startCountDown();
    }


    function setCountDownTime(days,hours,minutes,seconds){
        _days = days;
        _hours = hours;
        _minutes = minutes;
        _seconds = seconds;
    }

    function setCountDownContent(days=0,hours=0,minutes=0,seconds=0){
        setElementContent(timerDTopSection,timerDBottomSection,days);
        setElementContent(timerHTopSection,timerHBottomSection,hours);
        setElementContent(timerMTopSection,timerMBottomSection,minutes);
        setElementContent(timerSTopSection,timerSBottomSection,seconds);
    }


    function addFlipAnimation(tSection=null,duration=0){
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
            args[j].innerHTML = content;
           }catch(error){
               console.log(error);
           }
       } 
   }

   // set the content of the box and animate it
    function setDays(days=0){
        setElementContent(timerDTopSection,timerDBottomSection,days);
        addFlipAnimation(timerDTopSection,_flipDuration);
    }

    function setHours(hours=0){
        setElementContent(timerHTopSection,timerHBottomSection,hours);
        addFlipAnimation(timerHTopSection,_flipDuration);
    }

    function setMinutes(minutes=0){
        setElementContent(timerMTopSection,timerMBottomSection,minutes);
        addFlipAnimation(timerMTopSection,_flipDuration);
    }

    function setSeconds(seconds=0){
        setElementContent(timerSTopSection,timerSBottomSection,seconds);
        addFlipAnimation(timerSTopSection,_flipDuration);
    }

    function decreamentSecond(){
        for(let j =_seconds; j >=0;j--){
            let duraiton = _seconds
            setTimeout(() => {
                setSeconds(j)
            }, ((duraiton-j))*1000);
        }
    }
    

    function decremeantMinut(){}

    function decreamentHour(){}

    function decreamentDay(){

    }
    function getTotalMillieSeconds() {
        return  ((_days*24*3600) + (_hours *3600) + (_minutes * 60) + _seconds) * 1000
    }

    function prependZero(time){
        return time < 10 ? `0${time}` : time;
    }

    function calculateDiff(){
        let currentDate = new Date();
        let _countdownDate = _currentDataInMillieSeconds + getTotalMillieSeconds();
        let totalTimeInSeconds = Math.abs(_countdownDate - currentDate) / 1000 ;

        let days = Math.floor(totalTimeInSeconds / (3600 * 24));
        let hours = Math.floor(totalTimeInSeconds/ 3600) % 24;
        let minutes = Math.floor(totalTimeInSeconds / 60) % 60 ;
        let seconds = Math.floor(totalTimeInSeconds) % 60;

        return {
            days:prependZero(days),
            hours:prependZero(hours),
            minutes:prependZero(minutes),
            seconds:prependZero(seconds)
        }
    }

    function startCountDown(){
        const dayInterval = setInterval(() => {
            const {days,hours} = calculateDiff();
            (hours === "01") ? (setDays(days),setHours(hours)) : setDays(days)
        }, 1000 * 3600 * 24);

        const hourInterval = setInterval(() => {
            const {hours,minutes} = calculateDiff();
            (minutes === "01") ? (setHours(hours),setMinutes(minutes)) : setHours(hours);
        }, 1000* 3600);

        const minutInterval = setInterval(() => {
            const {minutes,hours} = calculateDiff();
            (minutes === "01") ? (setMinutes(minutes),setHours(hours)) : setMinutes(minutes);
        }, 1000 * 60);

        const secondInterval = setInterval(() => {
            const {seconds,minutes} = calculateDiff();
            setSeconds(seconds);
        }, 1000 );

    }

    function terminate(){
        
    }

    function print(){
        console.log(_days)
    }

    function covertDaysToDHMS(){
    }

    function timerSetTime(){

    }

    function calculateTime(){

    }


    // API 
    return {
        init:init,
        setCountDownTime:setCountDownTime,
        startCountDown:startCountDown,
        print:print,
    }

})()
