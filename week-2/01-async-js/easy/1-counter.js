// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


let i=0;
function counter(){
    i=i+1
    console.log(i);
}
setInterval(counter,1000);
