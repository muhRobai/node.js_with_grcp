const client = require('./client')

client.list({}, (err, notes) =>{
    if (err) {
        console.log(err)
    } else {
        console.log('successfully fetch Lst notes')
        console.log(notes)
    }
})