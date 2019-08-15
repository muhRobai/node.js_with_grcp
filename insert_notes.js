const client = require('./client')

let newNote = {
    title: "new Note",
    content: "new Note Content"
}

client.insert(newNote, (err, note)=>{
    if (err) {
        console.log(err)
    }else{
        console.log('new note created successfully')
        console.log(note)
    }
})