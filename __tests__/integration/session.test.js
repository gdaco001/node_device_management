const request = require("supertest")

const app = require("../../src/app")
const { User } = require("../../src/app/models");
const truncate = require('../utils/truncate')

describe("Authentication", () => {
    beforeEach(async () =>{
        await truncate();
    })
    it("should authenticate with valid credentials", async () => {
        const user = await User.create({
            name: "Gabriel",
            email: "gdaco001@gmail.com.test",
            password_hash: "testtest"
        });
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "testtest"
            })
        expect(response.status).toBe(200)
    });
});
