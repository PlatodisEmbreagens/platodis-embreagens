import React from 'react';

export default function useHeaderPostion() {
	const [y, setY] = React.useState(0);

	const [scrollingDown, setScrollingDown] = React.useState(false);

	const handleNavigation = React.useCallback(
		(e: any) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				setScrollingDown(false);
			} else if (y < window.scrollY) {
				setScrollingDown(true);
			}
			setY(window.scrollY);
		},
		[y]
	);

	React.useEffect(() => {
		setY(window.scrollY);
		window.addEventListener('scroll', handleNavigation);

		return () => {
			window.removeEventListener('scroll', handleNavigation);
		};
	}, [handleNavigation]);

	return scrollingDown;
}
