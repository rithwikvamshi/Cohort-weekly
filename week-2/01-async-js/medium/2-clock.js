// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


let i=0;
function counter(){
    const now = new Date();
    hr=now.getHours();
    min=now.getMinutes();
    sec=now.getSeconds();
    let tim="AM";
    if(hr>12){
        hr=hr-12;
        tim="PM";
    }
    console.log(hr+":"+min+":"+sec+" "+tim);
}
setInterval(counter,1000);

