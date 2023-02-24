export enum SelectedPage {
	Home = 'home',
	Skills = 'skills',
	Projects = 'projects',
	Contact = 'contact',
}

export type SelectedPageKeys = keyof typeof SelectedPage;