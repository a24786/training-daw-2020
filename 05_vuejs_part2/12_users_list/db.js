module.exports = function() {
    var faker = require('faker')

    let users = Array(50).fill({})
    users = users.map((item,index) => {
        return {
            id: index,
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.internet.avatar(),
            description: faker.lorem.paragraphs(3)
        }
    })

    return { users }
}