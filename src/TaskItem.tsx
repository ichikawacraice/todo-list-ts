import checkEmpty from './assets/icons/check-empty.svg'
import checkCompleted from './assets/icons/check-completed.svg'
import { Trash } from 'phosphor-react'

interface Tasks {
	id: string
	title: string
	isCompleted: boolean
	onDeleteTask: (id: string) => void
	onToggleCompletTask: (id: string) => void
}

function TaskItem({ id, title, isCompleted, onDeleteTask, onToggleCompletTask }: Tasks) {
	function handleDeleteTask() {
		onDeleteTask(id)
	}

	function handleToggleTask() {
		onToggleCompletTask(id)
	}

	return (
		<div
			key={id}
			className='flex justify-between border rounded-md border-gray-400 bg-gray-500 p-4 gap-4 my-2'
		>
			<button className='min-w-[1.5625rem] flex' onClick={handleToggleTask} title='Concluir tarefa'>
				{isCompleted ? (
					<img src={checkCompleted} alt='check-completed' />
				) : (
					<img src={checkEmpty} alt='check-empty' />
				)}
			</button>

			<div className='grow text-sm'>
				{isCompleted ? <del className='text-gray-300'>{title}</del> : title}
			</div>

			<button
				className='text-gray-300 hover:text-danger min-w-[1.5625rem] flex'
				onClick={handleDeleteTask}
				title='Deletar Task'
			>
				<Trash size={20} />
			</button>
		</div>
	)
}

export default TaskItem
