export enum SelectedPage {
	Home = 'home',
	Skills = 'skills',
	Projects = 'projects',
	Contact = 'contact',
}

export type SelectedPageKeys = keyof typeof SelectedPage;

export type PageProps = {
	setSelectedPage: (value: SelectedPage) => void;
}
