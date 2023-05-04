import { motion } from 'framer-motion';

type Props = {
	title: string;
	subTitle: string;
	URL: string;
}

export const Project = ({ title, subTitle, URL }: Props) => {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
	bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
	const projectTitle = title.split(' ').join('-').toLowerCase();
	const projectVariant = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	}
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		if (URL === '') {
			event.preventDefault();
		}
	};
	return (
		<motion.div
			className='relative'
			variants={projectVariant}
		>
			<a href={URL} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
				<div className={overlayStyles}>
					<p className='text-2xl font-playFair'>{title}</p>
					<p className='mt-7'>{subTitle}</p>
				</div>
				<img className='w-[400px] h-[400px]' src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
			</a>
		</motion.div>
	)
}