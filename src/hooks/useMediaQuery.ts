import { useState, useEffect } from "react";

type Props = {
	query: string;
}

export const useMediaQuery = ({ query }: Props) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches)
		}
		const listener = () => setMatches(media.matches);
		window.addEventListener('resize', listener);
		return () => window.removeEventListener('resize', listener);
	}, [matches, query])

	return matches;
}

