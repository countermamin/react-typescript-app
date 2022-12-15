import { FC } from 'react';
import CardProps, { CardVariant } from './Card.props';

const Card: FC<CardProps> = ({ width, height, children, variant }) => {
	return (
		<div
			style={{
				width,
				height,
				border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
				background: variant === CardVariant.primary ? 'lightgrey' : '',
			}}
		>
			{children}
		</div>
	);
};

export default Card;
