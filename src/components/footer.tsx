/* eslint-disable @next/next/no-img-element */
import { Baumans } from 'next/font/google';
import WhatsAppButton from './whatsAppButton';
import Link from 'next/link';

const baumans = Baumans({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
});

export default function Footer() {
	return (
		<footer>
			<WhatsAppButton />
			<div className="flex flex-wrap items-center justify-center gap-6 border-t border-gray-300 bg-slate-100 py-10 px-10 text-sm font-semibold md:justify-between lg:px-20">
				<div className="hidden shrink-0 items-end justify-between gap-1 bg-[#ffffff] py-4 md:flex lg:py-12">
					<div></div>
					<div className="z-10 flex items-end justify-center">
						<div className="h-10 w-10 lg:h-auto lg:w-auto">
							<img height={65} width={65} src="/clutchIcon.png" alt="logo" />
						</div>
						<h1
							style={{ fontWeight: 1000 }}
							className={`text-3xl text-[#e01926] shadow-black drop-shadow-lg lg:text-6xl ${baumans.className}`}
						>
							Platodis
						</h1>
						<p className="text-[8px] lg:mb-1 lg:text-base lg:font-[1000]">
							EMBREAGENS
						</p>
					</div>
					<div></div>
				</div>
				<div className="flex flex-col items-start">
					<div className="mb-5 space-y-1 text-xs lg:space-y-2 lg:text-base">
						<p>Platodis EMBREAGENS</p>
						<p>Rua Fangelo Partins, 587</p>
						<p>13503-250 - Jardim Estádio - Preto / SP</p>
						<p>Seg a sexta das 8h às 18h e aos sábados das 8h às 12h</p>
					</div>
					<div className="flex items-center justify-center gap-1">
						<div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
							<img height={30} width={30} src="/visa.png" alt="visa"></img>
						</div>
						<div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
							<img
								height={30}
								width={30}
								src="/mastercard.png"
								alt="mastercard"
							></img>
						</div>
						<div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
							<img
								height={30}
								width={30}
								src="/hipercard.png"
								alt="hipercard"
							></img>
						</div>
					</div>
				</div>
				<div className="w-[375px]"></div>
			</div>
			<div className="">
				<div className="h-[5px] w-full bg-black "></div>
				<div className="h-[5px] w-full bg-[#e01926]"></div>
				<div className="h-[5px] w-full bg-[#f5ec02]"></div>
			</div>
			<div className="bg-slate-100 py-6 text-center text-sm">
				<p className="font-normal">
					Copyright © 3023
					<Link className="px-1 font-bold" href="/">
						Platodis EMBREAGENS
					</Link>
					Todos os direitos reservados
				</p>
			</div>
		</footer>
	);
}
