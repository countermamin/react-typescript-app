import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import List from './List/List';
import UserItem from './UserItem/UserItem';
import { useNavigate } from 'react-router-dom';

const UserPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const response = await axios.get<IUser[]>(
			'https://jsonplaceholder.typicode.com/users'
		);
		setUsers(response.data);
	};
	return (
		<div>
			<List
				items={users}
				renderItem={(user: IUser) => (
					<UserItem
						onClick={user => navigate('/users/' + user.id)}
						user={user}
						key={user.id}
					/>
				)}
			/>
		</div>
	);
};

export default UserPage;
