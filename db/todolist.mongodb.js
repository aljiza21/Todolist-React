// POST /todos
use('todolistDB')
db.tasks.insertOne(
  { _id: 6, task: "Ecommerce Activity", checked: false}
)

use('todolistDB')
db.tasks.insertMany([
  { _id: 4, task: "Todolist Activity", checked: false},
  { _id: 5, task: "NodeJS Server", checked: false}
])

// GET /todos
use('todolistDB')
db.tasks.find()

// GET /todos/:id
use('todolistDB')
db.tasks.findOne({_id: 4})

// PATCH /todos/:id
use('todolistDB')
db.tasks.updateOne({ _id: 4 }, { $set: { checked: true } })

// DELETE /todos/:id
use('todolistDB')
db.tasks.deleteOne({ _id: 1 })

