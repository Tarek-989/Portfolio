import { LineGradient, SelectedPage } from '@/shared';
import { useMediaQuery } from '@/hooks';
import { motion } from 'framer-motion';

export const MySkills = () => {
	const isAboveMediumScreens = useMediaQuery({ query: '(min-width: 1060px)' });

	return (
		<section id={SelectedPage.Skills} className='pt-10 pb-24'>
			<div className='md:flex md:justify-between md:gap-16 mt-32'>
				<motion.div
					className='md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='font-playFair font-semibold text-4xl mb-5'>
						MY <span className='text-red'>SKILLS</span>
					</p>
					<LineGradient width='w-1/3' />
					<p className='mt-10 mb-7'>
						HTML5 · CSS · JavaScript · TypeScript · Sencha ExtJS · ReactJs ·
						Material-UI · Git · Responsive Web Design · Web Applications · JSON ·
						Agile Methodologies · PHP · laravel · Angular · CodeIgniter · C# · C++
					</p>
				</motion.div>
				<div className='mt-16 md:mt-0'>
					{isAboveMediumScreens ? (
						<div
							className='relative z-0 ml-20 before:absolute before:-top-10 
								before:-left-10 before:w-full before:h-full before:border-2
								before:border-blue before:z-[-1]'
						>
							<img
								src='../assets/skills-image.png'
								className='z-10'
								alt='Skills'
							/>
						</div>
					) : (
						<img
							src='../assets/skills-image.png'
							className='z-10'
							alt='Skills'
						/>
					)}
				</div>
			</div>

			{/* Experiences */}
			<div className='md:flex md:justify-between mt-16 gap-32'>
				<motion.div
					className='md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='font-playFair font-semibold text-4xl mb-5'>
						MY <span className='text-red'>Experiences</span>
					</p>
					<LineGradient width='w-1/3' />
				</motion.div>
			</div>
			<div className='md:flex md:justify-between gap-32'>

				{/* Experience 1 */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playFair font-semibold text-5xl text-red'>01</p>
							<p className='font-playFair font-semibold text-3xl mt-3 text-slate-300'>
								Web Developer at Ecomundo
							</p>
						</div>
					</div>
					<p className='mt-5'>
						<li>
							Developing a new version of the Cosmetics Factory application using
							React.js Library with Micro Frontend architecture.
						</li>
						<li>
							Maintaining the current version of Cosmetics Factory Application using Sencha ExtJS Framework.
						</li>
						<li>
							Training and helping junior developers with Sencha ExtJS + React-lib code.
						</li>
						<li>
							Solving and tracking the tickets assigned by my superiors.
						</li>
					</p>
				</motion.div>
				{/* Experience 2 */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playFair font-semibold text-5xl text-red'>02</p>
							<p className='font-playFair font-semibold text-3xl mt-3 text-slate-300'>
								Web Developer at Aya ISP
							</p>
						</div>
					</div>
					<p className='mt-5'>
						<li>
							Website designing, building, and maintaining.
						</li>
						<li>
							Conferring with teams to resolve conflicts, prioritize needs and develop
							content criteria.
						</li>
						<li>
							Performing AYA ISP website updates.
						</li>
						<li>
							Developing, and validating test routines and schedules to ensure that test
							cases mimic external interfaces and address all browser and device
							types.
						</li>
						<li>
							Evaluating code to ensure it meets industry standards, is properly
							structured, and is compatible with all platforms.
						</li>
					</p>
				</motion.div>
				{/* Experience 3 */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playFair font-semibold text-5xl text-red'>03</p>
							<p className='font-playFair font-semibold text-3xl mt-3 text-slate-300'>
								Customer Care at Aya ISP
							</p>
						</div>
					</div>
					<p className='mt-5'>
						<li>Managing a team of customer service.</li>
						<li>Identifying training requirements and any skill gaps.</li>
						<li>Tracking and developing the work of the department.</li>
						<li>Identifying, reporting, and recommending support solution paths for
							ongoing issues.
						</li>
						<li>Acknowledging and resolving customer complaints.</li>
						<li>training a team of junior customer service representatives.</li>
					</p>
				</motion.div>
			</div>
		</section>
	)
}