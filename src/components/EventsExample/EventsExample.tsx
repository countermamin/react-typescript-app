import { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value);
	};

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('Dropped');
	};
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};

	return (
		<div>
			<input
				value={value}
				onChange={changeHandler}
				type='text'
				placeholder='Управляемый'
			/>
			<input ref={inputRef} type='text' placeholder='Неуправляемый' />
			<button onClick={clickHandler}>Вызвать</button>
			<div
				onDrag={dragHandler}
				draggable
				style={{ width: 200, height: 200, background: 'grey' }}
			></div>
			<div
				style={{
					width: 200,
					height: 200,
					background: isDrag ? 'red' : 'grey',
					marginTop: 15,
				}}
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
			></div>
		</div>
	);
};

export default EventsExample;
