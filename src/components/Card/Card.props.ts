import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
	width?: string;
	height?: string;
    variant: CardVariant; 
}

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

export default CardProps;