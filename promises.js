// Example 1
const promise = new Promise((resolve, reject) => {
  const sum = 1 + 1
  if (sum === 2) {
    resolve("success")
  } else {
    reject("error")
  }
})

promise
  .then((message) => {
    console.log(message)
  })
  .catch(message => {
    console.error(message)
  }


// Example 2
  setTimeout(() => {
    console.log("here")
  }, 250)

    // Above converted to promise

setTimeoutPromise(250).then(() => {
    console.log('here')
}) 

function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

// Chaining Timeouts Together

{
setTimeout(() => {
    console.log("1")
    setTimeout(() => {
        console.log("2")
        setTimeout(() => {
            console.log("3")
        }, 250)
    }, 250)
}, 250)

// Above is callback hell
// Below is conversion to a promise, chained together

setTimeoutPromise(250)
.then(() => {
    console.log("1")
    return setTimeoutPromise(250)
})
.then(() => {
    console.log("2")
    return setTimeoutPromise(250)
})
.then(() => {
    console.log("3")
})

function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}
}