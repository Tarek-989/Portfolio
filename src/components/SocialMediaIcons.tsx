import React from 'react'

type Props = {}

export const SocialMediaIcons = (props: Props) => {
	return (
		<div className='flex justify-center md:justify-start my-10 gap-7'>
			<a className='hover:opacity-50 transition duration-500'
				href='https://www.linkedin.com/in/mhd-tarek-ahmad-87b9521b3'
				target='_blank'
				rel='noreferrer'
			>
				<img src='../assets/linkedin.png' alt='linkedIn-link' />
			</a>

			<a className='hover:opacity-50 transition duration-500'
				href='https://www.facebook.com/Tarek.Ahmad.989'
				target='_blank'
				rel='noreferrer'
			>
				<img src='../assets/facebook.png' alt='facebook-link' />
			</a>

			<a className='hover:opacity-50 transition duration-500'
				href='https://wa.me/963962203435'
				target='_blank'
				rel='noreferrer'
			>
				<img src='../assets/whatsapp.png' alt='whatsapp-link' />
			</a>

			<a className='hover:opacity-50 transition duration-500'
				href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMkNZjXwtDfkmmSZKpLKFJCqdZlvcdtFjFkHCpnCPnxzqMxnWPHPpMrvlBndslptJsnQPBl'
				target='_blank'
				rel='noreferrer'
			>
				<img src='../assets/gmail.png' alt='gmail-link' />
			</a>
		</div>
	)
}
