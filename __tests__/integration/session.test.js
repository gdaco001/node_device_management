const { User } = require("../../src/app/models");

describe("Authentication", () => {
    it("should receive jwt token when authen", async () => {
        const user = await User.create({
            name: "Gabriel",
            email: "gdaco001@gmail.com.test",
            password_hash: "testtest"
        });
        console.log(user);
        expect(user.email).toBe("gdaco001@gmail.com.test")
    });
});
