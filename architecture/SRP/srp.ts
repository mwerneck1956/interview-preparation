class UserValidator {
    validate(email: string) {
        if (!email.includes('@')) {
            throw new Error('Invalid email')
        }
    }
}

class UserRepository {
    save(name: string, email: string) {
        console.log("Saving user...")
    }
}

class EmailService {
    sendWelcomeEmail(email: string) {
        console.log('Sending welcome email')
    }
}

class UserService {
    constructor(
        private validator: UserValidator,
        private repository: UserRepository,
        private emailService: EmailService
    ) { }

    createUser(name: string, email: string) {
        this.validator.validate(email)
        this.repository.save(name, email)
        this.emailService.sendWelcomeEmail(email)
    }
}