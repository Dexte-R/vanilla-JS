let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('p is resolved')
    } else {
        reject('p is rejected')
    }
})

p.then((pass) => {
    console.trace("Resolved: " + pass)
}).catch((fail) => {
    console.trace("Rejected: " + fail)
})

let q = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve('q is resolved')
    } else {
        reject('q is rejected')
    }
})

function promises() {
    Promise.all([
        p,
        q
    ]).then((message) => {
        console.trace("This concatenation prints out every element in the array: " + message)
        console.trace("The following prints out the array object: ")
        console.trace(message)
    }).catch((fail) => {
        console.trace("All promises failed")
    })
}

Promise.race([
    p,
    q,
]).then((message) => {
    console.trace("Resolved in race: " + message)
}).catch((err) => {
    console.trace("Rejected in race: " + err)
})

async function allPromises() {
    try {
        console.trace('My async function test')
        let output = await p
        console.trace("Asyn resolve: " + output)
    } catch (err) {
        console.trace("Async reject: " + err)
    }
}

allPromises()
promises()