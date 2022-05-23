module.exports = class UserDto {
    phoneNumber;
    id;
    
    constructor(model) {
        this.phoneNumber = model.phoneNumber;
        this.id = model._id;
    }
}