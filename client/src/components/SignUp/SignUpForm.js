import { useState } from 'react';
import styles from './SignUpForm.css';

const SignUpForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const [disabled, setDisabled] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!disabled) {
			setDisabled(true);
		}

		const user = {
			email,
			password,
			firstName,
			lastName,
		};
	};

	return (
		<div>
			<main>
				<section>
					<h1>Sign Up</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<div>
								<label htmlFor='firstName'>First Name</label>
								<input
									type='text'
									id='firstName'
									name='firstName'
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor='lastName'>Last Name</label>
								<input
									type='text'
									id='lastName'
									name='lastName'
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
								/>
							</div>
						</div>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button type='submit' disabled={disabled}>
							{disabled ? 'Registering..' : 'Register'}
						</button>
					</form>
					<p>
						Already have an account? <a href='/login'>Log In</a>
					</p>
				</section>
			</main>
		</div>
	);
};

export default SignUpForm;
