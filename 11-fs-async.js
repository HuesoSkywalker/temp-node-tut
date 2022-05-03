const {readFile, writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt','utf8', (err, result) =>{
    if(err){
        console.log(err);
        return
    }
const first = result
readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log(err);
        return
    }
    const second = result
    writeFile('./content/result-async.txt',
    `yo let's hit this up ${first} and kick ${second}`,
    (err, result) =>{
        if(err){
            console.log(err);
            return
        }
        console.log('done with task');
    })

})

})
console.log('next task');

