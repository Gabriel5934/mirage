<script lang="ts">
	import Button from './Button.svelte';
	import ButtonText from './ButtonText.svelte';
	import ArrowRightMini from './Icons/ArrowRightMini.svelte';

	let { title, image }: { title: string; image: string } = $props();
</script>

<div
	style="--image-url: url({image})"
	class="flex w-full justify-center bg-cover text-center md:bg-[image:var(--image-url)] md:py-32"
>
	<div class="flex w-full max-w-[1008px] flex-col items-center gap-4">
		<img src={image} class="h-[323px] w-full object-cover md:hidden" alt="imagem ilustrativa" />
		<span class="font-display text-3xl font-bold uppercase text-black md:text-5xl md:text-white"
			>{title}</span
		>
		<span class="font-display text-xl text-gray-400 md:text-white"
			>A Mirage tem orgulho de ser uma empresa 100% nacional atuando desde 1976!</span
		>
		<Button>
			<ButtonText message="Nos envie uma mensagem" />
			<ArrowRightMini />
		</Button>
	</div>
</div>
