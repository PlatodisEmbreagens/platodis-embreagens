/* eslint-disable @next/next/no-img-element */
import { Baumans } from 'next/font/google';
import useHeaderPostion from '@/hooks/useHeaderPosition';
import React from 'react';
import useDetectClickOutside from '@/hooks/useDetectClickOutside';

const baumans = Baumans({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
});

export default function Header() {
	const [dropDown, setDropDown] = React.useState<string | boolean>(false);

	const wrapperRef = React.useRef(null);

	useDetectClickOutside(wrapperRef, setDropDown);

	const scrollingDown = useHeaderPostion();

	return (
		<header
			className={`${
				scrollingDown ? '-top-[82px] sm:-top-[112px]' : 'top-0'
			} sticky z-50 transition-all duration-500`}
		>
			<div className="relative">
				<img
					className="absolute top-11 left-0 z-10 hidden sm:top-[77px] md:block"
					height={127}
					width={150}
					src="/test.png"
					alt="logo"
				/>

				<div className="flex items-end justify-between gap-1 bg-[#ffffff] pb-2 pt-12 sm:pb-6 sm:pt-16">
					<div></div>
					<div className="my-3 flex items-end justify-center sm:my-0">
						<div className="h-10 w-10 sm:h-auto sm:w-auto">
							<img height={65} width={65} src="/clutchIcon.png" alt="logo" />
						</div>
						<h1
							style={{ fontWeight: 1000 }}
							className={`text-4xl text-[#e01926] shadow-black drop-shadow-lg sm:text-6xl ${baumans.className}`}
						>
							Platodis
						</h1>
						<p className="mb-1 ml-1 text-xs font-[1000] sm:text-base">
							EMBREAGENS
						</p>
					</div>
					<div></div>
				</div>
				<div className="w-full">
					<div className="h-1.5 w-full bg-black sm:h-2.5 "></div>
					<div className="h-1.5 w-full bg-[#e01926] sm:h-2.5"></div>
					<div className="h-5 w-full bg-gradient-to-b from-[#f5ec02] to-[#f5ed020a] sm:h-[45px]"></div>
				</div>
				<div
					ref={wrapperRef}
					className="fixed top-0 right-0 flex w-screen items-center justify-end gap-8 border-b border-gray-300 bg-slate-100  py-2 pr-4 sm:pr-20"
				>
					<div className="group relative flex cursor-pointer items-center gap-2">
						<div>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</div>

						<p className="hidden sm:block">Receber Ofertas</p>
					</div>
					<div className="group relative flex cursor-pointer items-center gap-2">
						<button
							onClick={() =>
								setDropDown(() => {
									if (dropDown === 'openTwo') return false;
									else return 'openTwo';
								})
							}
						>
							<svg
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className={`${
									dropDown === 'openTwo' ? 'scale-105 text-sky-700' : ''
								} h-6 w-6 transition-all`}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</button>

						<p className="hidden sm:block">Contato</p>
						<div
							className={`${
								dropDown === 'openTwo' && 'max-sm:h-[344px]'
							} absolute top-6 -right-[72px] h-0 w-[250px] overflow-hidden shadow-xl transition-all duration-300 sm:-right-4 sm:group-hover:h-[344px]`}
						>
							<p className="mt-2 cursor-default bg-[#25d366] px-6 py-4 text-sm text-white">
								Clique no botão abaixo e fale com nossos vendedores!
							</p>
							<a
								href="https://api.whatsapp.com/send?phone=5516992133266&amp;text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
								target="_blank"
								className="flex items-center justify-between gap-4 bg-slate-200 py-6 px-4 transition-all duration-300 hover:bg-slate-500 hover:text-[#25d366]"
							>
								<svg viewBox="0 0 32 32" className="h-10 w-10 fill-[#25d366]">
									<path
										d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
										fillRule="evenodd"
									></path>
								</svg>
								<div className="flex shrink-0 items-start justify-center gap-1 pr-2">
									<p className="">{'(16)'}</p>
									<p>99213-3266</p>
								</div>
								<div></div>
							</a>
							<a
								href="https://api.whatsapp.com/send?phone=5519997491963&amp;text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
								target="_blank"
								className="flex items-center justify-between gap-4 bg-slate-200 py-6 px-4 transition-all duration-300 hover:bg-slate-500 hover:text-[#25d366]"
							>
								<svg viewBox="0 0 32 32" className="h-10 w-10 fill-[#25d366]">
									<path
										d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
										fillRule="evenodd"
									></path>
								</svg>
								<div className="flex shrink-0 items-start justify-center gap-1 pr-2">
									<p className="">{'(19)'}</p>
									<p>99749-1963</p>
								</div>
								<div></div>
							</a>
							<a
								href="https://api.whatsapp.com/send?phone=5519971441863&amp;text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
								target="_blank"
								className="flex items-center justify-between gap-4 bg-slate-200 py-6 px-4 transition-all duration-300 hover:bg-slate-500 hover:text-[#25d366]"
							>
								<svg viewBox="0 0 32 32" className="h-10 w-10 fill-[#25d366]">
									<path
										d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
										fillRule="evenodd"
									></path>
								</svg>

								<div className="flex shrink-0 items-start justify-center gap-1 pr-2">
									<p className="">{'(19)'}</p>
									<p>97144-1863</p>
								</div>
								<div></div>
							</a>
						</div>
					</div>
					<div className="group relative flex cursor-pointer items-center gap-2">
						<button
							onClick={() =>
								setDropDown(() => {
									if (dropDown === 'openThree') return false;
									else return 'openThree';
								})
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								fill="none"
								className={`${
									dropDown === 'openThree' ? 'scale-105 text-sky-700' : ''
								} h-6 w-6 transition-all`}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
						</button>

						<p className="hidden sm:block">Localização</p>
						<div
							className={`${
								dropDown === 'openThree' && 'max-sm:h-[328px]'
							} absolute top-6 -right-4 h-[0px] w-min overflow-hidden bg-slate-50 shadow-xl transition-all duration-300 sm:w-[350px] sm:group-hover:h-[328px]`}
						>
							{/* <p className="mt-2 cursor-default bg-[#25d366] px-6 py-4 text-sm text-white">
							Clique no botão abaixo e fale com nossos vendedores!
						</p> */}
							<div className="mt-2 cursor-default space-y-8 whitespace-nowrap bg-slate-200 px-4 py-8 text-right text-sm sm:px-12 sm:text-left">
								<div className="space-y-2">
									<p className="font-semibold">Horário de Atendimento</p>
									<p>Seg a sexta das 8h às 18h e aos </p>
									<p>sábados das 8h às 12h</p>
									<p>8:00 | 18:00</p>
								</div>
								<div className="space-y-2">
									<p className="font-semibold">Platodis EMBREAGENS</p>
									<p>Rua Fangelo Partins, 587</p>
									<p>13503-250 - Jardim Estádio - Preto / SP</p>
								</div>
								<p className="font-semibold underline">{'(16) '} 99213-3266</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="fixed top-0 left-0 z-50 h-screen w-full animate-pageLoad bg-[#1f1f1f]"></div> */}
			</div>
		</header>
	);
}
