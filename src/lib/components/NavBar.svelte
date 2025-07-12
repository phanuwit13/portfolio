<script lang="ts">
	import LightIcon from '$lib/assets/light.svg?component';
	import DarkIcon from '$lib/assets/dark.svg?component';

	export let onThemeToggle: () => void = () => {};
</script>

<nav
	class="m-auto flex max-w-4xl items-center justify-between space-x-8 shadow bg-muted px-4 py-2 dark:bg-gray-800"
>
	<img src="/images/pk.png" class="size-6 dark:filter-[brightness(0)_invert(1)]" alt="" />
	<button
		on:click={onThemeToggle}
		class="relative size-8 cursor-pointer rounded-full p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
		aria-label="Toggle Theme"
	>
		<LightIcon
			class="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
		/>
		<DarkIcon
			class="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
		/>
	</button>
</nav>
