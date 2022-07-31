import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddTaskBar from './AddTaskBar'

import EmptyTaskList from './EmptyTaskList'
import TaskItem from './TaskItem'

function TaskList() {
	const [completedTasks, setCompletedTasks] = useState([{}])
	const [tasks, setTasks] = useState([
		{
			id: uuidv4(),
			title: 'Digite um texto no campo a cima e clique em "Criar" para adicionar uma tarefa',
			isCompleted: false
		},
		{
			id: uuidv4(),
			title: 'Clique no checkbox a esquerda para marcar a tarefa como concluída',
			isCompleted: true
		},
		{
			id: uuidv4(),
			title: 'Para excluir uma tarefa, clique na lixeira à direita',
			isCompleted: false
		}
	])

	function AddNewTask(title: string) {
		const newTask = {
			id: uuidv4(),
			title: title,
			isCompleted: false
		}
		setTasks([...tasks, newTask])
	}

	function ToggleTask(id: string) {
		const newTasks = tasks.map((task) => {
			if (task.id === id) {
				task.isCompleted = !task.isCompleted
			}
			return task
		})
		setTasks(newTasks)
	}

	function deleteTask(id: string) {
		const taskWithoutDeletedOne = tasks.filter((task) => {
			return !(task.id == id)
		})
		setTasks(taskWithoutDeletedOne)
	}

	function CheckCompletedTasks() {
		const completedTasks = tasks.filter((task) => {
			return task.isCompleted
		})
		setCompletedTasks(completedTasks)
	}

	useEffect(() => {
		CheckCompletedTasks()
	}, [tasks])

	return (
		<div className='max-w-[46.25rem] flex justify-center mx-auto px-4 flex-col'>

			<AddTaskBar onClickAddNewTask={AddNewTask} />
			
			<header className='flex justify-between w-full border-b-1 border-b border-gray-400 pb-6'>
				<div className='flex gap-2'>
					<h1 className='text-blue-300 font-bold text-sm'>Tarefaz criadas</h1>
					<span className='bg-gray-400 px-2 rounded-lg font-bold text-xs leading-5'>
						{tasks.length}
					</span>
				</div>

				<div className='flex gap-2'>
					<h1 className='text-purple-300 font-bold text-sm'>Tarefas concluídas</h1>
					<span className='bg-gray-400 px-2 rounded-lg font-bold text-xs leading-5'>
						{completedTasks.length}
					</span>
				</div>
			</header>

			{tasks.length ? (
				<div className='flex flex-col'>
					{tasks.map((task) => (
						<TaskItem
							key={task.id}
							id={task.id}
							title={task.title}
							isCompleted={task.isCompleted}
							onDeleteTask={deleteTask}
							onToggleCompletTask={ToggleTask}
						/>
					))}
				</div>
			) : (
				<EmptyTaskList />
			)}
		</div>
	)
}

export default TaskList
