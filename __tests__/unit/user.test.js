const { User } = require('../../src/app/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    });
    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Gabriel',
            email: 'gdaco001@gmail.com_test',
            password: 'testtest'
        });
        expect(await bcrypt.compare('testtest', user.password_hash)).toBe(true);
    });
});