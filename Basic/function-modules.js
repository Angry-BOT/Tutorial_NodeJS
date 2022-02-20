const variables = require("./variables-modules")

const giveFirstName = () => {
    console.log(variables.firstName)
}

const giveLastName = () => {
    console.log(variables.lastName)
}

module.exports = { giveFirstName, giveLastName }