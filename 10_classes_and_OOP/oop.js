const user = {
    username: "shrey",
    loginCount: 9,
    signedIn: true,

    getUserName: function(){
        //console.log(`username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserName())

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);