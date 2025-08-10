var loginData = /** @class */ (function () {
    function loginData(username) {
        this.username = username;
    }
    Object.defineProperty(loginData.prototype, "readUserName", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    return loginData;
}());
var user = new loginData("Demosalesmanager");
console.log(user.readUserName);
