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

    async checkAuthorization(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const accessToken = req.headers.authorization.split(' ')[1];
            const userData = await userService.checkAuthorization(refreshToken, accessToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 2 * 24 * 60 * 60 * 1000, httpOnly: true});

            return res.json(userData);
        } catch(e) {
            next(e);
        }
    }

    async getUser(req, res, next) {
        try {
            const user = await userService.getUser(req.headers.authorization.split(' ')[1]);
            return res.json(user);
        } catch(e) {
            next(e);
        }
    }

    async checkUserTypeAdmin(req, res, next) {
        try {
            const userType = await userService.getUserType(req.headers.authorization.split(' ')[1]);
            if (userType == 'Клиент') {
                return res.json(false);
            }
            
            return res.json(true);
        } catch(e) {
            next(e);
        }
    }
}

module.exports = new UserController();