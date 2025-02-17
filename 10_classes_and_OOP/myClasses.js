// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.password = password;
//         this.email = email
//     }

//     encryptedPassword() {
//         return `{this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chaiwithshrey = new User('shrey', 'shrey@Html.com', 'doyouknow')

// console.log(chaiwithshrey.encryptedPassword())
// console.log(chaiwithshrey.changeUsername())


function User(username, email, password){
    this.username = username;
    this.password = password;
    this.email = email
}

User.prototype.encryptedPassword = function() {
        return `${this.password}abc`
    }

User.prototype.changeUsername = function() {
        return `${this.username.toUpperCase()}`
    }

const tea = new User('shrey', 'shrey@Html.com', 'doyouknow')

console.log(tea.encryptedPassword())
console.log(tea.changeUsername())
console.log(tea)