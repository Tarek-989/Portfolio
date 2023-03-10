import { LineGradient, PageProps, SelectedPage } from '@/shared';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export const Contact = ({ setSelectedPage }: PageProps) => {
	const { register, trigger, formState: { errors } } = useForm();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	}
	return (
		<section id={SelectedPage.Contact} className='py-48 w-5/6 mx-auto'>
			{/* Heading */}
			<motion.div
				className='flex justify-end w-full'
				onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<div>
					<p className='font-playFair font-semibold text-4xl'>
						<span className='text-yellow'>Contact Me</span> To Get Started
					</p>
					<div className='flex md:justify-end my-5'>
						<LineGradient width='w-1/2' />
					</div>
				</div>
			</motion.div>

			{/* Form & Image */}
			<div className='md:flex md:justify-between gap-16 mt-5'>
				<motion.div
					className='basis-1/2 flex justify-center'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<img src={`../assets/contact-image.jpeg`} alt='contact' />
				</motion.div>
				<motion.div
					className='basis-1/2 mt-10 md:mt-0'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<form
						target='_blank'
						onSubmit={onSubmit}
						action='https://formsubmit.co/9fbebe3fd3da406a51ea0b6f58379383'
						method='POST'
					>
						<input
							className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
							type='text'
							placeholder='Name'
							{...register('name', {
								required: true,
								maxLength: 100,
							})}
						/>
						{errors.name && (
							<p className='text-red mt-1'>
								{errors.name.type === 'required' && 'This field is required.'}
								{errors.name.type === 'maxLength' && 'Max length is 100 char.'}
							</p>
						)}

						<input
							className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
							type='text'
							placeholder='Email'
							{...register('email', {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className='text-red mt-1'>
								{errors.email.type === 'required' && 'This field is required.'}
								{errors.email.type === 'pattern' && 'InValid email address.'}
							</p>
						)}

						<textarea
							className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
							placeholder='Massage'
							rows={4}
							cols={50}
							{...register('massage', {
								required: true,
								maxLength: 2000,
							})}
						/>
						{errors.massage && (
							<p className='text-red mt-1'>
								{errors.massage.type === 'required' && 'This field is required.'}
								{errors.massage.type === 'maxLength' && 'Max length is 2000 char.'}
							</p>
						)}

						<button
							type='submit'
							className='p-5 bg-yellow font-semibold text-deep-blue mt-5 
							hover:bg-gradient-rainblue hover:text-white transition duration-500'
						>
							Send me a massage
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	)
}