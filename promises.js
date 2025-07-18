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

// Basic Promise Example
{
const myPromise = new Promise((resolve, reject) => {
  const success = true

  if (success) {
    resolve("It worked!")     // this tells the promise: "you’re done successfully"
  } else {
    reject("It failed.")      // this tells the promise: "it failed"
  }
})

myPromise
  .then((result) => {
    console.log(result)  // prints "It worked!"
  })
  .catch((error) => {
    console.error(error) // prints "It failed." if rejected
  })
}

// Flip Coin - Promise Example
{
  const flipCoin = new Promise((resolve, reject) => {
  const heads = Math.random() > 0.5

  if (heads) {
    resolve("Heads!")
  } else {
    reject("Tails!")
  }
})

flipCoin
  .then((result) => console.log("You got:", result))
  .catch((error) => console.log("Try again:", error))
  // JavaScript allows method chaining over multiple lines for readability.
}

// Set promise to wait one second then call message
{
const practicePromise = new Promise((resolve, reject) => {
  // wait 1 second, then call resolve with a message
  setTimeout(() => resolve("Complete"), 1000)
})

practicePromise.then((message) => {
  console.log(message)
})
}

// Roll Dice - Promise Practice

function rollDice() {
  return new Promise((resolve, reject) => {
    // roll the dice
    const roll = Math.floor(Math.random() * 6) + 1
        console.log("You rolled: ", roll)
    // check result with if/else
    if (roll <= 4) {
        resolve("You win!")
    } else {
        reject("You lose!")
    }
  })
}

rollDice()
  .then((result) => {
    // log the winning result
    console.log(result)
  })
  .catch((error) => {
    // log the losing result
    console.log(error)
  })