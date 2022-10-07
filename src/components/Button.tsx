import classNames from 'classnames';
import React from 'react';

type ButtonProps  = {
	onClick?: (event: React.MouseEvent) => void;
	className?: string;
	outline?: boolean;
	children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({onClick, className, outline, children}) => (
	<>
		<button
			onClick={onClick}
		 	className={classNames('button', className, {
				'button--outline': outline,
			})}>

		{children}
		</button>
	</>
);

export default Button;
