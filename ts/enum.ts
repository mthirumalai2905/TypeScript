enum Roles{
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?:string;
    email:string;
    password:string;
    role:Roles
}

const user1:LoginDetails = {
       email:"jsadf@gmail.com",
       password: "sdf",
       role:Roles.user
}

const isAdmin :(user1: LoginDetails) => void = (user1:LoginDetails) =>{
    const {name, role} = user1;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`
}

console.log(isAdmin(user1));