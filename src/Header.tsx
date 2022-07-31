import logo from './assets/logo//logo-todo.svg'

function Header() {
	return (
		<header className='min-h-[12.5rem] bg-gray-700 flex justify-center align-middle px-4'>
			<img src={logo} alt='TO DO LOGO' />
		</header>
	)
}

export default Header
