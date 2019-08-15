const client = require('./client')

client.delete({id: '3'}, (err,_)=>{
    if (err) {
        console.log(err)
    } else {
        console.log('Note Has been Successfully deleted')
    }
})