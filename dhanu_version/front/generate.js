module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        userDetails: _.times(100, function (n) {
            return {
                id: n,
                userName: faker.name.findName(),
                password: "pass123",
                role: "admin"
            }
        })
    }
}