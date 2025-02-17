class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password() {
        return `${this._password}shrey`
    }

    set password(value) {
        this._password = value
    }
}

const shrey = new User('shrey@mail.com', 'this')
console.log(shrey.email)