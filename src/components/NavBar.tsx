import { useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared';
import { Link } from './Link';

type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}

export const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveMediaScreens = useMediaQuery({ query: '(min-width: 950px)' })
	const navBarBGcolor = isTopOfPage ? '' : 'bg-red drop-shadow';

	return (
		<nav className={`${navBarBGcolor} z-40 w-full fixed top-0 py-6 `}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				<h4 className='font-playFair text-3xl font-bold'>Tarek Ahmad</h4>

				{/* Desktop View */}
				{
					isAboveMediaScreens ? (
						<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
							<Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page='Testimonials' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						</div>
					) : (
						<button
							className='rounded-full bg-red p-2'
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						>
							<img src='../assets/menu-icon.svg' alt='menu-icon' />
						</button>
					)
				}

				{/* Mobile View */}
				{!isAboveMediaScreens && isMenuToggled && (
					<div className='fixed right-0 bottom-0 h-full bg-red w-80'>
						{/* Close Icon */}
						<div className='flex justify-end p-12'>
							<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
								<img src='../assets/close-icon.svg' alt='close-icon' />
							</button>
						</div>
						{/* Menu Items */}
						<div className='flex flex-col gap-10 ml-[33%] text-2xl text-dark-grey'>
							<Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page='Testimonials' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}