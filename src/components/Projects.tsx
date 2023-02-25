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
					className='md:grid md:grid-cols-3 justify-center text-center items-center'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
				>
					{/* Row 1 */}
					<div
						className='flex justify-center text-center items-center p-10 bg-red
							w-[320px] h-[320px] text-2xl font-playFair font-semibold mx-auto'
					>
						Beautiful User Interface
					</div>
					<Project
						title='Admin Dashboard'
						subTitle='An admin dashboard website built with React,
					 		Material-UI, and nivo charts to provide an easy-to-use interface for managing business operations.
					 		With customizable charts and graphs, and comprehensive reporting tools, monitor sales, inventory,
					   		and customer relationships with ease.' />
					<Project
						title='My Portfolio'
						subTitle='A responsive landing page built with React, Tailwindcss
						 and designed with a mobile-first approach, providing an optimized user 
						 experience on all devices, with a modern and clean design, engaging copy, 
						 clear calls-to-action, and high-quality images that showcase the projects that I create.' />

					{/* Row 2 */}
					<Project title='Project 3' subTitle='' />
					<Project title='Project 4' subTitle='' />
					<Project title='Project 5' subTitle='' />

					{/* Row 3 */}
					<Project title='Project 6' subTitle='' />
					<Project
						title='Landing page for fitness website'
						subTitle='A responsive landing page built with React, Tailwindcss
						 and designed with a mobile-first approach, providing an optimized user 
						 experience on all devices, with a modern and clean design, engaging copy, 
						 clear calls-to-action, and high-quality images that showcase fitness programs, 
						 nutrition plans, and coaching services.' />
					<div
						className='flex justify-center text-center items-center p-10 bg-blue
							w-[320px] h-[320px] text-2xl font-playFair font-semibold mx-auto'
					>
						Smooth User Experience
					</div>
				</motion.div>
			</div>
		</section>
	)
}