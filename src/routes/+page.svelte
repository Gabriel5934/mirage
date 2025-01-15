<script lang="ts">
	import Button from '../components/Button.svelte';
	import ButtonText from '../components/ButtonText.svelte';
	import CarouselItem from '../components/CarouselItem.svelte';
	import Frame from '../components/Frame.svelte';
	import ArrowRightMini from '../components/Icons/ArrowRightMini.svelte';
	import GearMini from '../components/Icons/GearMini.svelte';
	import Stat from '../components/Stat.svelte';
	import Title from '../components/Title.svelte';

	import Area1 from '$lib/assets/images/area1.jpg';
	import Area2 from '$lib/assets/images/area2.jpeg';
	import Area3 from '$lib/assets/images/area3.jpg';
	import Area4 from '$lib/assets/images/area4.jpg';

	import Solution1 from '$lib/assets/images/solution1.jpg';
	import Solution2 from '$lib/assets/images/solution2.jpg';
	import Solution3 from '$lib/assets/images/solution3.jpg';
	import Solution4 from '$lib/assets/images/solution4.jpg';

	import Carousel1 from '$lib/assets/images/carousel1.jpg';
	import Carousel2 from '$lib/assets/images/carousel2.png';
	import Carousel3 from '$lib/assets/images/carousel3.jpg';

	import Partner1 from '$lib/assets/images/partner1.png';
	import Partner2 from '$lib/assets/images/partner2.png';
	import Partner3 from '$lib/assets/images/partner3.png';
	import Partner4 from '$lib/assets/images/partner4.png';
	import Partner5 from '$lib/assets/images/partner5.png';

	import Brazil from '$lib/assets/images/brazil.png';
	import Spain from '$lib/assets/images/spain.png';
	import Us from '$lib/assets/images/us.png';

	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';

	const carouselItems = [
		{
			image: Carousel1,
			title: m.carousel1()
		},
		{
			image: Carousel2,
			title: 'profissionais altamente capacitados'
		},
		{
			image: Carousel3,
			title: 'referência em tecnologia industrial'
		}
	];

	const expertise = [
		{
			value: 48,
			title: 'Anos'
		},
		{
			value: 5357740,
			title: 'Horas de Usinagem'
		},
		{
			value: 2398925,
			title: 'Peças Fabricadas'
		},
		{
			value: 250763,
			title: 'Pedidos Entregues'
		}
	];

	const areas = [
		{
			imageUrl: Area1,
			linkUrl: 'http://www.mirageusinagem.com.br/pt-br/areas-de-atuacao/aeroespacial/',
			caption: 'aeroespacial'
		},
		{
			imageUrl: Area2,
			linkUrl: 'http://www.mirageusinagem.com.br/pt-br/areas-de-atuacao/automobilistico/',
			caption: 'automobilístico'
		},
		{
			imageUrl: Area3,
			linkUrl: 'http://www.mirageusinagem.com.br/pt-br/areas-de-atuacao/energia/',
			caption: 'energia'
		},
		{
			imageUrl: Area4,
			linkUrl: 'http://www.mirageusinagem.com.br/pt-br/areas-de-atuacao/oleo-gas/',
			caption: 'óleo e gas'
		}
	];

	const solutions = [
		{
			imageUrl: Solution1,
			linkUrl: 'http://www.mirageusinagem.com.br/nossas-solucoes/medicao-tridimencional/',
			caption: 'medição tridimensional'
		},
		{
			imageUrl: Solution2,
			linkUrl: 'http://www.mirageusinagem.com.br/nossas-solucoes/usinagem-de-precisao/',
			caption: 'usinagem de precisão'
		},
		{
			imageUrl: Solution3,
			linkUrl: 'http://www.mirageusinagem.com.br/nossas-solucoes/fabricacao-de-ferramentais/',
			caption: 'fabricação de ferramentas'
		},
		{
			imageUrl: Solution4,
			linkUrl: 'http://www.mirageusinagem.com.br/nossas-solucoes/montagem-mecanica/',
			caption: 'montagem mecânica'
		}
	];

	const footerLinks = [
		'home',
		'institucional',
		'estrutura',
		'nossas soluções',
		'áreas de atuação',
		'certificações',
		'trabalhe conosco',
		'fale conosco'
	];

	const partnerLogos = [Partner1, Partner2, Partner3, Partner4, Partner5];

	let currentLanguage: Languages = $state(
		(page.url.pathname.split('/').pop() as Languages) || 'pt'
	);

	type Languages = 'pt' | 'es' | 'en';

	const languageButtons: Array<{ image: string; lang: Languages }> = [
		{
			image: Brazil,
			lang: 'pt'
		},
		{
			image: Spain,
			lang: 'es'
		},
		{
			image: Us,
			lang: 'en'
		}
	];

	const getCurrrentLanguage = () => {
		return languageButtons.find((button) => button.lang === currentLanguage);
	};

	const getRemainingLanguages = () => {
		return languageButtons.filter((button) => button.lang !== currentLanguage);
	};

	const updateLanguage = (lang: Languages) => {
		goto(i18n.resolveRoute('/', lang));
	};
</script>

<!-- Links -->
<header>
	<div class="flex items-center justify-between gap-8 px-4 py-4 md:justify-center">
		<div class="dropdown md:hidden">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</div>
			<ul
				tabindex="0"
				class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
			>
				{#each footerLinks as link}
					<li><a href="#" class="text-blac font-semibold uppercase">{link}</a></li>
				{/each}
			</ul>
		</div>
		<img
			src="http://www.mirageusinagem.com.br/wp-content/uploads/2018/07/logo.jpg"
			alt="logo"
			class="h-[80px]"
		/>
		<div class="dropdown dropdown-left md:hidden">
			<div tabindex="0" role="button" class="btn m-1">
				<img src={getCurrrentLanguage()?.image} alt="Português" />
			</div>
			<ul
				tabindex="-1"
				class="menu dropdown-content z-[1] w-full rounded-box bg-gray-200 p-2 shadow"
			>
				{#each getRemainingLanguages() as button}
					<li>
						<button onclick={() => updateLanguage(button.lang)}
							><img src={button.image} alt="Português" /></button
						>
					</li>
				{/each}
			</ul>
		</div>
		<span class="hidden font-display font-semibold uppercase md:block"
			>mirage@mirageusinagem.com.br</span
		>
		<span class="hidden font-display font-semibold uppercase md:block"
			>+55 12 3931-2001 | +55 12 3931-2888</span
		>
		<a
			href="https://br.linkedin.com/company/mirage-industria-e-com%C3%A9rcio-de-pe%C3%A7as"
			aria-label="linkedin"
			class="hidden md:block"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="h-6 w-6"
				viewBox="0 0 16 16"
			>
				<path
					d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
				/>
			</svg>
		</a>
		<a
			href="https://www.youtube.com/channel/UCXrx75BmeQ8KI8T5KlABhpg"
			aria-label="youtube"
			class="hidden md:block"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="h-6 w-6"
				viewBox="0 0 16 16"
			>
				<path
					d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
				/>
			</svg>
		</a>
		<div class="dropdown dropdown-left hidden md:block">
			<div tabindex="0" role="button" class="btn m-1">
				<img src={getCurrrentLanguage()?.image} alt="Português" />
			</div>
			<ul
				tabindex="-1"
				class="menu dropdown-content z-[1] w-full rounded-box bg-gray-200 p-2 shadow"
			>
				{#each getRemainingLanguages() as button}
					<li>
						<button onclick={() => updateLanguage(button.lang)}
							><img src={button.image} alt="Português" /></button
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="hidden w-full bg-blue-950 md:block">
		<div class="flex flex-wrap justify-center gap-4 p-4">
			{#each footerLinks as link}
				<a href="#" class="font-semibold uppercase text-white">{link}</a>
			{/each}
		</div>
	</div>

	<!-- Carousel -->
	<div class="carousel w-full">
		{#each carouselItems as item, i}
			<div id={`slide${i}`} class="carousel-item relative w-full">
				<CarouselItem {...item} />
			</div>
		{/each}
	</div>
</header>

<!-- Areas -->
<div class=" flex w-full flex-col items-center gap-8">
	<Title title="áreas de atuação" />
	<div class="customgrid w-full max-w-[1440px] gap-4 p-4">
		{#each areas as area}
			<Frame {...area} />
		{/each}
	</div>
</div>

<!-- Solutions -->
<div class="flex w-full flex-col items-center gap-8">
	<Title title="nossas soluções" />
	<div class="customgrid w-full max-w-[1440px] gap-4 p-4">
		{#each solutions as solution}
			<Frame {...solution} />
		{/each}
	</div>
	<div class="text-center">
		<Button
			><GearMini />
			<ButtonText message="ver todas as soluções" />
			<ArrowRightMini /></Button
		>
	</div>
</div>

<!-- Expertise -->
<div class=" flex flex-col items-center gap-8">
	<Title title="nossa expertise" />
	<div class="customgrid w-full max-w-[1440px] gap-8">
		{#each expertise as stat}
			<Stat {...stat} />
		{/each}
	</div>
</div>

<!-- Partners -->
<div class="flex flex-col items-center gap-8 p-8">
	<Title title="nossos parceiros" />
	<div class="partnersGrid w-full max-w-[1440px]">
		{#each partnerLogos as logo}
			<div class="flex justify-center">
				<img src={logo} alt="partner" />
			</div>
		{/each}
	</div>
</div>

<!-- Footer -->
<footer class="flex flex-col items-center gap-4 bg-gray-950 px-5 py-10">
	<span class="text-white">Copyright © 2024 – MIRAGE</span>
	<div class="flex flex-wrap justify-center gap-4">
		{#each footerLinks as link}
			<a href="#" class="font-semibold uppercase text-white">{link}</a>
		{/each}
	</div>
</footer>

<style>
	.customgrid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(222px, 1fr));
		justify-items: center;
	}

	.partnersGrid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
		justify-items: center;
	}
</style>
