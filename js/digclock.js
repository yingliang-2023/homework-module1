    //creat a time data function
    function currentTime(){
        //Declare Variables
        var d= new Date();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        var ampm; 
        var utchr=d.getUTCHours();
        var timeDiff;
        var adjTimeDiff;
        var timeZone;

        //add 0 to single digits for seconds
        if (sec<10){
            sec="0"+sec;
        }

        //add 0 to single digits for minutes
        if(min<10){
            min="0"+min;
        }
    

    //Determine AM or PM string
    if(hr ==12){
        ampm="PM";
    }else if(hr>12){
        hr-=12;
        ampm="PM";
    }else{
        ampm="AM";
    }

    if(utchr>12){
        utchr-=12;
    }

    timeDiff=hr-utchr;


    //Assemble time format to display
    var time=hr+":"+min+":"+sec+" "+ampm;

    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText=time;
}  
    //Initial run of time data function
    currentTime();

    //Run time data function every 1 second
    setInterval(currentTime,1000);