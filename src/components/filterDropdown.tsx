import useDetectClickOutside from '@/hooks/useDetectClickOutside';
import React from 'react';

export default function FilterDropDown() {
	const wrapperRef = React.useRef(null);
	const [open, setOpen] = React.useState(false);

	useDetectClickOutside(wrapperRef, setOpen);

	return (
		<div className="group relative" ref={wrapperRef}>
			<button
				onClick={() => setOpen(!open)}
				className="flex h-[42px] items-center justify-between rounded border border-gray-300 bg-white pl-5 pr-3 "
			>
				<p className="whitespace-nowrap">Filter Models</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className={`${
						open ? '-rotate-180' : ''
					} ml-10 h-6 w-6 transition-all group-hover:text-blue-500`}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</button>

			<ul
				className={`${
					open ? 'animate-openDropDown' : 'animate-closeDropDown border-y-0'
				} absolute top-12 w-48 overflow-hidden rounded border border-gray-300 bg-white text-sm font-medium text-gray-900 shadow-xl`}
			>
				<li className="w-full border-b border-gray-300 transition-all hover:bg-slate-100">
					<div className="flex items-center pl-3 ">
						<input
							id="list-radio-license"
							type="checkbox"
							value=""
							name="list-radio-1"
							className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600"
						/>
						<label
							htmlFor="list-radio-license"
							className="ml-2 w-full cursor-pointer py-3 text-sm font-medium text-gray-900"
						>
							Agrale{' '}
						</label>
					</div>
				</li>
				<li className="w-full border-b border-gray-300  transition-all hover:bg-slate-100">
					<div className="flex items-center pl-3">
						<input
							id="list-radio-id"
							type="checkbox"
							value=""
							name="list-radio-2"
							className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600"
						/>
						<label
							htmlFor="list-radio-id"
							className="ml-2 w-full cursor-pointer py-3 text-sm font-medium text-gray-900"
						>
							Chevrolet
						</label>
					</div>
				</li>
				<li className="w-full border-b border-gray-300  transition-all hover:bg-slate-100">
					<div className="flex items-center pl-3">
						<input
							id="list-radio-millitary"
							type="checkbox"
							value=""
							name="list-radio-3"
							className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600"
						/>
						<label
							htmlFor="list-radio-millitary"
							className="ml-2 w-full cursor-pointer py-3 text-sm font-medium text-gray-900"
						>
							Ford Caminhão
						</label>
					</div>
				</li>
				<li className="w-full transition-all hover:bg-slate-100">
					<div className="flex items-center pl-3">
						<input
							id="list-radio-passport"
							type="checkbox"
							value=""
							name="list-radio-4"
							className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600"
						/>
						<label
							htmlFor="list-radio-passport"
							className="ml-2 w-full cursor-pointer py-3 text-sm font-medium text-gray-900"
						>
							Mercedes Benz
						</label>
					</div>
				</li>
			</ul>
		</div>
	);
}
