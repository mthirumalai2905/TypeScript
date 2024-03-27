"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: "jsadf@gmail.com",
    password: "sdf",
    role: Roles.user
};
const isAdmin = (user1) => {
    const { name, role } = user1;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`;
};
console.log(isAdmin(user1));
