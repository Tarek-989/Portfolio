import { SelectedPage } from '@/shared/types';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SocialMediaIcons } from './SocialMediaIcons';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

export const Landing = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery({ query: '(min-width: 1060px)' });
	return (
		<section
			id={SelectedPage.Home}
			className='md:flex md:justify-between md:items-center md:h-full gap-16 py-16'
		>
			{/* Image section */}
			<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
				{isAboveMediumScreens ? (
					<div
						className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
						before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
						before:border-2 before:border-blue before:z-[-1]'
					>
						<img
							src='../assets/profile-image.png'
							className='hover:filter hover:saturate-50 transition duration-500 z-10 w-full
							max-w-[400px] md:max-w-[600px]'
							alt='Profile'
						/>
					</div>
				) : (
					<img
						src='../assets/profile-image.png'
						className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full
					max-w-[400px] md:max-w-[600px]'
						alt='Profile'
					/>
				)}
			</div>

			{/* Main section */}
			<div className='z-30 basis-3/5 mt-12 md:mt-32'>
				{/* Heading */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='text-6xl font-playFair z-10 text-center md:text-start'>
						Tarek {''}
						<span className='xs:relative xs:text-deep-blue xs:font-semibold z-20
							xs:before:content-brush before:absolute before:-left-[25px] 
							before:-top-[70px] before:z-[-1]'
						>
							Ahmad
						</span>
					</p>
					<p className='mt-10 mb-7 text-3xl font-playFair	 text-center md:text-start'>
						Frontend Web Developer (React.js)
					</p>
					<p className='mt-8 mb-7 text-lg text-center md:text-start'>
						Certificated Bachelor's Degree in Information and
						Communication Engineering with over 2 years of experience in (JavaScript, ExtJs, and React). Ambitious
						front-end web developer, fast learner, and constantly improving my skills.
					</p>
				</motion.div>

				{/* Contact Actions */}
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<AnchorLink
						className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold 
						hover:bg-blue hover:text-white transition duration-500'
						onClick={() => setSelectedPage(SelectedPage.Contact)}
						href={`#${SelectedPage.Contact}`}
					>
						Contact Me
					</AnchorLink>
					<AnchorLink
						className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
						onClick={() => setSelectedPage(SelectedPage.Contact)}
						href={`#${SelectedPage.Contact}`}
					>
						<div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex
						 items-center justify-center font-playFair px-10'>
							Let's talk.
						</div>
					</AnchorLink>
				</motion.div>

				{/* SM-Icon */}
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<SocialMediaIcons />
				</motion.div>
			</div>
		</section>
	)
}
