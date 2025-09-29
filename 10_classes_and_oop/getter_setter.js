class user {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value;
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        return this._password = value
    }
}

const jasmin = new user('jasmin@gmail.com','jasmin123@')
console.log(jasmin.password);
console.log(jasmin.email);

