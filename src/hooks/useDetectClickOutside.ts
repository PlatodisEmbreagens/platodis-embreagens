import React from 'react';

export default function useDetectClickOutside(
	ref: any,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
	React.useEffect(() => {
		function handleClickOutside(event: Event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}
