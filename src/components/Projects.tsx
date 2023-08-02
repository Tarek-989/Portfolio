import { LineGradient, PageProps, SelectedPage } from '@/shared';
import { motion } from 'framer-motion';
import { Project } from './Project';

export const Projects = ({ setSelectedPage }: PageProps) => {
	const container = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.2 } }
	}
	return (
		<section id={SelectedPage.Projects} className='py-48 w-5/6 mx-auto'>
			{/* Heading */}
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
				className='md:w-2/4 mx-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className='font-playFair font-semibold text-4xl'>
						<span className='text-red'>PRO</span>JECTS
					</p>
					<div className='flex justify-center mt-5'>
						<LineGradient width='w-1/3' />
					</div>
				</div>
				<p className='my-10'>
					In this section, you will find a selection of projects that I have worked on
					throughout my career. Each project showcases my skills and expertise in <b>React</b>,
					as well as my ability to solve complex problems and deliver results.
					From <b>Admin Dashboard</b>, which demonstrated my creativity and innovation, to <b>Fitness Website</b>,
					which highlighted my ability to build responsive application, these projects
					demonstrate the breadth and depth of my experience.
					For each project, you will find a brief description, the tools and technologies used.
				</p>
			</motion.div>

			{/* Projects */}
			<div className='flex justify-center'>
				<motion.div
					className='sm:grid sm:grid-cols-3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
				>
					{/* Row 1 */}
					<div
						className='flex justify-center text-center items-center p-10 bg-red
						max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
					>
						Beautiful User Interface
					</div>
					<Project
						title='Admin Dashboard'
						subTitle='An admin dashboard website built with React,
					 		Material-UI, and nivo charts to provide an easy-to-use interface for managing business operations.
					 		With customizable charts and graphs, and comprehensive reporting tools, monitor sales, inventory,
					   		and customer relationships with ease.'
						URL='https://admin-dashboard-a9d.pages.dev/'
					/>
					<Project
						title='Finance Dashboard'
						subTitle='A simple finance dashboard website built using React, Material-UI, Machine learning,
						and Redux Toolkit to provide customizable charts and grids to help you monitor your
						financial metrics, such as revenue, expenses, and profits.'
						URL='https://finance-dashboard-frontend.onrender.com/'
					/>

					{/* Row 2 */}
					<Project
						title='My Portfolio'
						subTitle='A responsive landing page built with React, Tailwindcss 
						and designed with a mobile-first approach, providing an optimized user 
						experience on all devices, with a modern and clean design, engaging copy, 
						clear calls-to-action, and high-quality images that showcase the projects that I create.'
						URL='https://portfolio-55b.pages.dev/'
					/>
					<Project
						title='Promptopia'
						subTitle='Promptopia is an open-source AI prompting tool for modern world to discover, 
						create and share creative prompts built using Next.js 13, Tailwindcss 
						and designed with a mobile-first approach, providing an optimized user 
						experience on all devices.'
						URL='https://promptopia-wheat-chi.vercel.app'
					/>
					<Project title='Project 5' subTitle='Coming Soon ...' URL='' />

					{/* Row 3 */}
					<Project title='Project 6' subTitle='Coming Soon ...' URL='' />
					<Project
						title='Landing page for fitness website'
						subTitle='A responsive landing page built with React, Tailwindcss
						 and designed with a mobile-first approach, providing an optimized user 
						 experience on all devices, with a modern and clean design, engaging copy, 
						 clear calls-to-action, and high-quality images that showcase fitness programs, 
						 nutrition plans, and coaching services.'
						URL='https://fitness-site-8ia.pages.dev/'
					/>
					<div
						className='flex justify-center text-center items-center p-10 bg-blue
						max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
					>
						Smooth User Experience
					</div>
				</motion.div>
			</div>
		</section>
	)
}