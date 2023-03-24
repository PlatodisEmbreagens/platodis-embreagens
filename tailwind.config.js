/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				pageLoad: 'pageLoad 0.7s ease-out forwards ',
				openDropDown: 'openDropDownKey 0.2s ease-out forwards ',
				closeDropDown: 'closeDropDownKey 0s ease-out forwards ',
			},
			keyframes: {
				pageLoad: {
					'0%': { height: '100%' },
					'30%': { height: '100%' },
					'100%': { height: '0px' },
				},
				openDropDownKey: {
					'0%': { height: '0px' },
					'100%': { height: '181px' },
				},
				closeDropDownKey: {
					'0%': { height: '181px' },
					'100%': { height: '0px' },
				},
			},
		},
	},
	plugins: [],
};
