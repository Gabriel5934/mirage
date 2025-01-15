<script lang="ts">
	let { imageUrl, caption, linkUrl }: { imageUrl: string; caption: string; linkUrl: string } =
		$props();
</script>

<div class="flex flex-col items-center gap-4 bg-white p-4 shadow-md">
	<a href={linkUrl} target="_blank" rel="noopener noreferrer">
		<img
			src={imageUrl}
			alt={caption}
			class="w-full transform transition-transform hover:scale-105"
			loading="lazy"
			decoding="async"
		/>
	</a>

	<span class="font-display text-lg font-bold uppercase text-black">{caption}</span>
</div>
