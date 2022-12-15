import React, { FC } from 'react';
import UserItem from '../UserItem/UserItem';
import { UserListProps } from './UserList.props';

const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<div>
			{/* {users.map(user => (
				<UserItem key={user.id} user={user} />
			))} */}
		</div>
	);
};

export default UserList;
