import { SocialMediaIcons } from "./SocialMediaIcons"

export const Footer = () => {
	return (
		<footer className='h-64 pt-10 bg-slate-800'>
			<div className='w-5/6 mx-auto'>
				<SocialMediaIcons />
				<div className='md:flex justify-center md:justify-between text-center'>
					<p className='font-playFair font-semibold text-2xl text-yellow'>
						Tarek Ahmad
					</p>
					<p className='font-playFair text-md text-yellow'>
						©2023, All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}