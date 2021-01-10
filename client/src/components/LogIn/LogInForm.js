import { useState } from 'react';
import styles from './LogInForm.css';

const LogInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [disabled, setDisabled] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!disabled) {
			setDisabled(true);
		}

		const user = {
			email,
			password,
		};
	};

	return (
		<div>
			<main>
				<section>
					<h1>Log In</h1>
					<form onSubmit={handleSubmit}>
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
							{disabled ? 'Logging in..' : 'Log In'}
						</button>
					</form>
					<p>
						Do not have an account? <a href='/signup'>Sign Up</a>
					</p>
				</section>
			</main>
		</div>
	);
};

export default LogInForm;
