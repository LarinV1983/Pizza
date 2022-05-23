import React from 'react';
import {Link} from "react-router-dom";


function Register() {
	return (
		<div>
			<h1>Registration</h1>
			<p>
				<Link to="login">login</Link>
			</p>
		</div>
	);
}
export default Register;