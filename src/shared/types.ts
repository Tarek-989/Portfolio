export enum SelectedPage {
	Home = 'home',
	Skills = 'skills',
	Projects = 'projects',
	Testimonials = 'testimonials',
	Contact = 'contact',
}

export type SelectedPageKeys = keyof typeof SelectedPage;