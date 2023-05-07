// encadeamento de then

const myPromise = new Promise((resolve,reject) => {
    const nome = 'admin'
        if(nome === 'admin'){
            resolve('Usuário encontrado')
        }else{
            reject('Usuário não encontrado')
        }
    })

myPromise.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})


// Retorno do catch

const myPromise3 = new Promise((resolve,reject) => {
    const nome = 'ester'
        if(nome === 'admin'){
            resolve('Usuário encontrado')
        }else{
            reject('Usuário não encontrado')
        }
    })

// tratando erro recebido

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})


// Resolver várias promessas com all
const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('P1 ok! Timeout')
    }, 2000)
})

const p2 = new Promise((resolve,reject) => {
    resolve('P2 Ok!')
})

const p3 = new Promise((resolve,reject) => {
    resolve('P3 Ok!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})


console.log('Depois do all()')


// Resolver várias promessas com race

const p4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('P4 ok! Timeout')
    }, 2000)
})

const p5 = new Promise((resolve,reject) => {
    resolve('P5 Ok!')
})

const p6 = new Promise((resolve,reject) => {
    resolve('P6 Ok!')
})

const resolveAllRace = Promise.race([p4,p5,p6]).then((data) => {
    console.log(data)
})

