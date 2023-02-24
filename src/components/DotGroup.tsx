import { SelectedPage } from '@/shared';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}
export const DotGroup = ({ selectedPage, setSelectedPage }: Props) => {
	const selectedStyle = `relative bg-yellow before:absolute before:w-6 
		before:h-6 before:rounded-full before:border-2 before:border-yellow
		before:left-[-50%] before:top-[-50%]`;

	return (
		<div className="flex flex-col gap-6 fixed top-[60%] right-7">
			<AnchorLink
				className={`${selectedPage === SelectedPage.Home ? selectedStyle : 'bg-dark-grey'}
				w-3 h-3 rounded-full`}
				href={`#${SelectedPage.Home}`}
				onClick={() => setSelectedPage(SelectedPage.Home)}
			/>
			<AnchorLink
				className={`${selectedPage === SelectedPage.Skills ? selectedStyle : 'bg-dark-grey'}
				w-3 h-3 rounded-full`}
				href={`#${SelectedPage.Skills}`}
				onClick={() => setSelectedPage(SelectedPage.Skills)}
			/>
			<AnchorLink
				className={`${selectedPage === SelectedPage.Projects ? selectedStyle : 'bg-dark-grey'}
				w-3 h-3 rounded-full`}
				href={`#${SelectedPage.Projects}`}
				onClick={() => setSelectedPage(SelectedPage.Projects)}
			/>
			<AnchorLink
				className={`${selectedPage === SelectedPage.Contact ? selectedStyle : 'bg-dark-grey'}
				w-3 h-3 rounded-full`}
				href={`#${SelectedPage.Contact}`}
				onClick={() => setSelectedPage(SelectedPage.Contact)}
			/>
		</div>
	)
}
