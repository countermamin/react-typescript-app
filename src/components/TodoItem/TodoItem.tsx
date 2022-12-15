import { toFormData } from 'axios';
import { FC } from 'react';
import { TodoItemProps } from './TodoItem.props';

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	return (
		<div>
			<input type='checkbox' checked={todo.completed} />
			{todo.id} {todo.title}
		</div>
	);
};

export default TodoItem;
