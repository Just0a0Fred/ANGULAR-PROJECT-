const userService = require('../service/user-service');

class UserController {
    async registration(req, res, next) {
        try {
            const userData = await userService.registration(req.body);

            return res.json(userData);
        } catch(e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const {phoneNumber, password} = req.body;
            const userData = await userService.login(phoneNumber, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 2 *24 * 60 * 60 * 1000, httpOnly: true});

            return res.json(userData);
        } catch(e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch(e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 2 * 24 * 60 * 60 * 1000, httpOnly: true});

            return res.json(userData);
        } catch(e) {
            next(e);
        }
    }

    async getUser(req, res, next) {
        try {
            const user = await userService.getUsers(req.headers.authorization.split(' ')[1]);
            return res.json(user);
        } catch(e) {
            next(e);
        }
    }
}

module.exports = new UserController();