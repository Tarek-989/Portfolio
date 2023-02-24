import { SelectedPage, SelectedPageKeys } from '@/shared';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	page: SelectedPageKeys;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}

export const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
	const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
	return (
		<AnchorLink
			className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
				hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	)
}
