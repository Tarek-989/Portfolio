
type Props = {
	width?: string;
}

export const LineGradient = ({ width = 'w-full' }: Props) => {
	return (
		<div className={`h-0.5 ${width} bg-gradient-rainblue `} />
	)
}