import clipboard from './assets/img/clipboard.svg'

export default function EmptyTaskList() {
	return (
		<div className='my-16 justify-center flex-col text-center text-gray-300'>
			<img className='mx-auto mb-6' src={clipboard} alt='clipboard' />
			<strong>Você ainda não tem tarefas cadastradas</strong>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</div>
	)
}
