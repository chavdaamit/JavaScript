// setTimeout() executes code after some time delay,
// and clearTimeout() is used to stop it if needed.


let times

const currentTime = () =>{
    
    let DateAndTime = new Date();

    let time = DateAndTime.toLocaleTimeString();

    console.log(time)

    times = setTimeout(currentTime, 1000)
}

currentTime();

setTimeout(() => {
    
    clearTimeout(times)
    console.log("Timer is Stop")
}, 15000);