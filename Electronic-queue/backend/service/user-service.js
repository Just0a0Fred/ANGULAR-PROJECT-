const UserModel = require('../models/user-model');
const bcrypt = require('bcryptjs');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(model) {
        const candidate = await UserModel.findOne({phoneNumber: model.phoneNumber});
        if (candidate) {
            throw ApiError.BadRequest('Пользователь с таким номером телефона уже существует');
        }
        const hashpassword = await bcrypt.hash(model.password, 3);
        model.password = hashpassword;
        model.userTalon = (await this.generateTalon()).toString();
        const user = await UserModel.create(model);
    }

    async login(phoneNumber, password) {
        const user = await UserModel.findOne({phoneNumber});
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким номером телефона не был найден');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnathorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnathorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async getUsers(token) {
        const userId = tokenService.findIdByToken(token);
        const user = await UserModel.findOne({_id: userId});
        user.password = '';
        return user;
    }

    async generateTalon() {
        const lastUser = await UserModel.findOne().sort({$natural: -1}).limit(1);
        const lastTalon = lastUser.userTalon;
        if (lastTalon.slice(1,3) == '999' && ((96 < lastTalon.charCodeAt(0)) && (lastTalon.charCodeAt(0) < 123))) {
            return String.fromCharCode(lastTalon.charCodeAt(0) + 1) + '000';
        } else {
            console.log(Number(lastTalon.slice(1, 4)));
            return lastTalon[0] + (Number(lastTalon.slice(1, 4)) + 1).toString();
        }
    }

    async findUser(userId) {
        return await UserModel.findOne({_id: userId});
    }
}

module.exports = new UserService();