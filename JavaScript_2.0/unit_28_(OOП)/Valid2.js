class Valid2 extends Valid {
	constructor(email, password, emailError, passwordError) {
		super(email, password)
		this.emailError = ''
		this.passwordError = ''
		this.emailErrorMessage = emailError
		this.passwordErrorMessage = passwordError
	}
	validate() {
		super.validate()
		if (!this.isValid) {
			this.passwordError = this.passwordErrorMessage
			return false
		}
		if (this.email === '') {
			this.isValid = false
			this.emailError = this.emailErrorMessage
			return false
		}
		this.isValid = true
		return true
	}
}
