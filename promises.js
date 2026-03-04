

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    },2000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 resolved")
    })
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 3 resolved")
    })
})

p1.then((data)=>{
    console.log(data)
})


/* 2nd answer */



function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

const p5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data received")
    }, 1000)
})

/* 3rd answer */
function doubleAfter2Seconds(x) {
   return new Promise((resolve)=>{
    setTimeout((()=>{
        resolve(x*2)
    }))
   },2000)     
}
 /* 4th answer */
doubleAfter2Seconds(10).then((result)=>{
    console.log(result)
})

function checkEvenOrOdd(num) {
    return new Promise((resolve,reject)=>{
        if(num>10){
            resolve("greater than 10")
        } else {
            reject("not greater than 10")
        }
    })

}

/*intermediate answer */

async function test() {
  console.log("1️ Inside async - Start");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("3️ Async task finished");
      resolve();
    }, 3000);
  });

  console.log("5️ Inside async - After await");
}

console.log("0️ Global Start");

test();

console.log("2️ Global End");



async function asyncTask() {
  console.log("Async Start");

  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  console.log("Async Finished");
}

asyncTask();

for (let i = 0; i < 5; i++) {
  console.log("Sync Loop:", i);
}


const ans=Promise.all([p1,p2,p3])
ans.then((data)=>{
    console.log(data)
})

async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("C");
}

test();
console.log("B");

async function first() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("First Done");
}

async function second() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Second Done");
}

first();
second();

console.log("Synchronous Code Running");