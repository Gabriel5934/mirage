<script lang="ts">
	let { title }: { title: string } = $props();
</script>

<div class="flex flex-col items-center gap-4">
	<span class="font-display text-3xl font-bold uppercase text-black">{title}</span>
	<hr class="h-[4px] w-[50px] bg-red-500" />
</div>
