import React from 'react';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";

 function Login() {
 	const {register, reset, handleSubmit, formState: {errors, isValid} } = useForm({mode: "onBlur"});

 	const onSubmit = (data) => {
 		console.log(data);
 		reset();
 	};

	return (
		<div className="container">
		<div className="form">
			<h1>Регистрация</h1>
		<form onSubmit={handleSubmit(onSubmit)} className="form__registrations" action="">
		<label htmlFor="name">Ваше имя:</label>
		<div className="form__name">
			<input type="text" {...register("name", 
				{required: "Поле обязательно к заполнению",})}/>
			{errors?.name && <p>{errors?.name?.message}</p>}	
		</div>
		<label htmlFor="email">Ваш email:</label>
		<div className="form__email">
			<input type="email" {...register("email", 
				{required: "Поле обязательно к заполнению",})}/>
			{errors?.name && <p>{errors?.name?.message}</p>}	
		</div>
			<label htmlFor="tell">Номер телефона:</label>
			<div className="form__tel">
			<input type="tel" {...register("tel", 
				{required: "Поле обязательно к заполнению",})}/>
			{errors?.name && <p>{errors?.name?.message}</p>}		
		</div>
		<div className="form__submit">
			<input type="submit" value="зарегистрироваться" disabled={!isValid}/>	
		</div>
		</form>
		</div>
		</div>
	);
}

export default Login;