<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let techStack: { name: string; icon: typeof SvelteComponent; link: string }[];
</script>

<div class="mt-8">
	<h2 class="text-lg font-semibold">Tech Stack</h2>
	<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
    {#each techStack as tech}
      <a href={tech.link} target="_blank" class="bg-muted dark:hover:bg-card flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed p-2 transition hover:bg-blue-50">
        <tech.icon class="size-5" />
        <span class="text-sm">{tech.name}</span>
      </a>
    {/each}
  </div>
</div>
