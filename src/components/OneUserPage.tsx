import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';

type UserItemPageParams = {
	id: string;
};

const OneUserPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<UserItemPageParams>();
	const navigate = useNavigate();

	useEffect(() => {
		fetchUser();
	}, []);

	const fetchUser = async () => {
		const response = await axios.get<IUser>(
			'https://jsonplaceholder.typicode.com/users/' + params.id
		);
		setUser(response.data);
		console.log(response.data);
	};
	return (
		<div>
			<button onClick={() => navigate('/users')}>Back</button>
			<h1>Страница пользователя {user?.name}</h1>
			<div>{user?.email}</div>
			<div>
				{user?.address.city}
				{user?.address.street}
				{user?.address.zipcode}
			</div>
		</div>
	);
};

export default OneUserPage;
