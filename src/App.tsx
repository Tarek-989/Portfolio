import { useEffect, useState } from 'react'
import { DotGroup, Landing, MySkills, NavBar, Projects } from '@/components';
import { useMediaQuery } from '@/hooks';
import { LineGradient, SelectedPage } from '@/shared';



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
			{isAboveMediaScreens && (
				<DotGroup
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
			)}
			<Landing setSelectedPage={setSelectedPage} />
			<LineGradient />
			<MySkills setSelectedPage={setSelectedPage} />
			<LineGradient />
			<Projects setSelectedPage={setSelectedPage} />
		</div>
	)
}

export default App
