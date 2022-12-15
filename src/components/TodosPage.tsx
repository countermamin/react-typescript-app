import { FC, useState, useEffect } from 'react';
import List from './List/List';
import TodoItem from './TodoItem/TodoItem';
import { ITodo } from '../types/types';
import axios from 'axios';

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		const response = await axios.get<ITodo[]>(
			'https://jsonplaceholder.typicode.com/todos?_limit=10'
		);
		setTodos(response.data);
	};

	return (
		<div>
			<List
				items={todos}
				renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
			/>
		</div>
	);
};

export default TodosPage;
