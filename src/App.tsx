import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import OneUserPage from './components/OneUserPage';
import OneTodoPage from './components/OneTodoPage';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<NavLink to='/users'>Пользователи</NavLink>
				<NavLink to='/todos'>Список дел</NavLink>
			</div>
			<Routes>
				<Route path='/users' element={<UserPage />} />
				<Route path='/users/:id' element={<OneUserPage />} />
				<Route path='/todos' element={<TodosPage />} />
				<Route path='/todos/:id' element={<OneTodoPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
