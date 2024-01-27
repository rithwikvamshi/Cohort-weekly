// Without using setInterval, try to code a counter in Javascript.



const now = new Date();
let n=0;
let i=0;
let sec=now.getSeconds();
console.log();
while(true){
    const next = new Date();
    if(next.getSeconds()-sec==n){
        console.log(n++);
    }
}

// coding is failing sometimes why?
//how to do it with (Hint: setTimeout)
