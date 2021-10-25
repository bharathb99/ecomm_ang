module.exports = function () {

    var faker = require("faker");

    var _ = require("lodash");

    return {

        userDetails: _.times(100, function (n) {
            return {
                id: n,
                userName: faker.name.findName(),
                country: faker.address.country(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                countrycode:faker.phone.countrycode(),
                line:faker.phone.line(),
                timeZone: faker.address.timeZone(),
                networkId: faker.random.alphaNumeric(4),
                password: "pass123",
                role: "admin",
                status: "Active"
            }
        })
    }
}