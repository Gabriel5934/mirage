<script lang="ts">
	let { value, title }: { value: number; title: string } = $props();
</script>

<div class="flex flex-col items-center gap-4">
	<span class="text-5xl font-semibold text-blue-950">{value}</span>
	<hr class="h-[2px] w-[20px] bg-red-500" />
	<span class="text-lg text-gray-500">{title}</span>
</div>
