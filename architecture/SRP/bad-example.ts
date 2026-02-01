class UserService{
    createUser(email : string){
        if(!email.includes('@')){
            throw new Error('Invalid email')
        }

        this.saveUser(email)
        this.sendWelcomeEmail(email)
    }

    saveUser(email : string){
        console.log("Saving user...")
    }

    sendWelcomeEmail(email : string){
        console.log(`Sending welcome email to ${email}`)
    }
}