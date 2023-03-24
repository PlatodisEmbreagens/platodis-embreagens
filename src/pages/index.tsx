/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header';
import FilterDropDown from '@/components/filterDropdown';
import { itemList } from '@/util/itemList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>PLATODIS EMBREAGENS</title>
				<meta name="description" content="PLATODIS EMBREAGENS" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/tabIcon.png" />
			</Head>
			<main
				className={`${inter.className} min-h-screen bg-[#fff] text-gray-700`}
			>
				<Header />
				<div>
					<div className="relative h-[120px] w-full overflow-hidden sm:h-[200px] md:h-[250px] lg:h-[500px]">
						<img
							className="mx-auto"
							// layout="fill"
							// objectFit="cover"
							src="/deleteMeTwo.jpg"
							alt="logo"
						/>
					</div>

					<div className="flex w-full items-center justify-center border-b border-gray-300 bg-gradient-to-t from-slate-100 to-transparent">
						<div className="flex w-full max-w-[1150px] flex-wrap items-center justify-between gap-5 px-4 pb-4 sm:mt-0 sm:pt-6 sm:pb-8">
							<form className="flex flex-grow">
								<input
									className="w-[60vw] max-w-[600px] flex-grow rounded-l border border-gray-300  py-2.5 pl-6 text-sm text-gray-700  focus:border-blue-500 focus:outline-blue-500"
									type="text"
									id="searchItems"
									placeholder="O que você procura..."
									required
								/>
								<button
									type="submit"
									className="flex items-center justify-center rounded-r border border-l-0 border-gray-300 bg-gray-300 px-4 transition-all hover:text-blue-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
										/>
									</svg>
								</button>
							</form>
							<FilterDropDown />
						</div>
					</div>
					<img
						className="mx-auto mt-7"
						height={116}
						width={1150}
						src="/deleteMe.jpg"
						alt="delete me"
					/>
					<div className="mx-auto mt-0 mb-10 flex max-w-[1300px] flex-wrap items-center justify-evenly gap-3 px-2 sm:mb-32 sm:mt-10 sm:justify-center sm:gap-16 sm:px-10">
						{itemList.map((item, index) => (
							<div
								key={index}
								className="group mt-5 flex flex-col items-center justify-center gap-5 sm:mt-0"
							>
								<img
									className="w-[120px] transition-all group-hover:scale-105 sm:w-[150px]"
									// height={124}
									// width={150}
									src={item.image}
									alt={item.name}
								/>
								<p className="w-[150px] text-center text-xs sm:w-[250px] sm:text-sm">
									{item.name.toUpperCase()}
								</p>
								<a
									href="https://api.whatsapp.com/send?phone=5519971441863&amp;text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
									target="_blank"
									className="flex w-min items-center justify-center gap-1 rounded bg-[#25d366] px-1.5 py-2.5 text-white transition-all hover:bg-[#1da850] sm:gap-2 sm:p-3"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-4 w-4 sm:h-6  sm:w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
										/>
									</svg>
									<p className="whitespace-nowrap text-xs sm:text-sm sm:font-semibold">
										CHAMAR NO WHATS
									</p>
								</a>
							</div>
						))}
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
