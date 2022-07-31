import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

function AddTaskBar({ onClickAddNewTask }: { onClickAddNewTask: (title: string) => void }) {
	const [newTask, setNewTask] = useState('')

	function handleAddNewTask() {
		onClickAddNewTask(newTask)
		setNewTask('')
	}

	return (
		<div className='flex justify-center mt-[-1.6875rem] gap-2 mb-14'>
			<input
				className='placeholder:text-gray-300 grow h-[3.375rem] bg-gray-500 border-2 border-gray-500 rounded-md p-4 text-gray-100 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue text-sm'
				type='text'
				placeholder='Adicione uma nova tarefa'
				onChange={(e) => setNewTask(e.target.value)}
				value={newTask}
			/>
			<button
				className='bg-blue-500 rounded-md text-sm font-bold flex gap-1 py-4 px-4 md:px-8 hover:bg-blue-300 transition-colors disabled:bg-gray-500'
				onClick={handleAddNewTask}
				disabled={!newTask.length}
			>
				Criar <PlusCircle size={16} />
			</button>
		</div>
	)
}

export default AddTaskBar
