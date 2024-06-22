const express = require('express')
const getEmployeeDetails = require('./controllers/employee.controller')
const app = express()
const PORT = 6000

app.use(express.json())
app.post('/profile/details', getEmployeeDetails)

app.listen(PORT, ()=> {
      console.log(`Your app is running on http://localhost:${PORT}`)
})