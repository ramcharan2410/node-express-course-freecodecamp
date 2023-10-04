// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
// Even though time taken is 0 seconds, as this is asynchronous, it will be executed after the below console.log() statement.
console.log('third')
// completed and exited operating system process
