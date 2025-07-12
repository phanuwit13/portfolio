<script lang="ts">
	interface ExperienceItem {
		role: string;
		company: string;
		period: string;
		companyDetail?: string;
		description: string[];
	}

	export let experience: ExperienceItem[];
</script>

<div class="mt-8">
	<h2 class="text-lg font-semibold">Experience</h2>
	<div class="mt-4 flex flex-col gap-5">
		{#each experience as exp}
			<div class="mb-8">
				<div class="flex flex-col md:flex-row md:justify-between">
					<span class="font-semibold">{exp.role}</span>
					<span class="text-muted-foreground text-xs">{exp.period}</span>
				</div>
				<div class="text-muted-foreground italic">{exp.company}</div>
				<ul class="mt-2 ml-5 list-disc space-y-1 text-sm">
					{#each exp.description as desc}
						<li>{desc}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
