const promise=  new Promise((resolve, reject) => { 
    
    setTimeout(() => reject(new Error('something is wrong')),1000)


 });
console.log(promise)
promise.then(console.log ).catch( error=> console.log(`oh no ${error}`) );


