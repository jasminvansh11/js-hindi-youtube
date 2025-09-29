const user = {
    _email:'jasminvansh@gmail.com',
    _pass: 'jasmin123',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const users = Object.create(user)
console.log(users.email);
