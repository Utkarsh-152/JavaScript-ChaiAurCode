class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username ${this.username} is logged in.`)
    }
    static createID() {
        return `232`
    }
}

const shrey = new User('shrey')
// console.log(shrey.createID())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createID());