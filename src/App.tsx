import { useEffect, useState } from 'react'
import { DotGroup, Landing, NavBar } from '@/components';
import { SelectedPage } from '@/shared/types';
import { useMediaQuery } from './hooks';



function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
	const isAboveMediaScreens = useMediaQuery({ query: '(min-width: 1060px)' })
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) {
				setIsTopOfPage(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<div className='app bg-deep-blue'>
			<NavBar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className='w-5/6 mx-auto md:h-full'>
				{isAboveMediaScreens && (
					<DotGroup
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
				<Landing setSelectedPage={setSelectedPage} /> 
			</div>
		</div>
	)
}

export default App
