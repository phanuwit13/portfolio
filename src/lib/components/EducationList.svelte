<script lang="ts">
	interface EducationItem {
		degree: string;
		school: string;
		period: string;
		details: string[];
	}

	interface AwardItem {
		title: string;
		year: string;
		description: string;
	}

	export let education: EducationItem[];
	export let awards: AwardItem[];
</script>

<div class="mt-8">
	<h2 class="text-lg font-semibold">Education</h2>
	<div class="mt-4 flex flex-col gap-4">
		{#each education as edu}
			<div class="mb-6">
				<div class="flex flex-col md:flex-row md:justify-between">
					<span class="font-semibold">{edu.degree}</span>
					<span class="text-muted-foreground text-xs">{edu.period}</span>
				</div>
				<div class="text-muted-foreground italic">{edu.school}</div>
				<ul class="mt-2 ml-5 list-disc space-y-1 text-sm">
					{#each edu.details as det}
						<li>{det}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<div class="mt-8">
	<h2 class="text-lg font-semibold">Awards</h2>
	<div class="mt-4 flex flex-col gap-4">
		{#each awards as award}
			<div class="mb-4">
				<div class="flex flex-col md:flex-row md:justify-between">
					<span class="font-semibold">{award.title}</span>
					<span class="text-muted-foreground text-xs">{award.year}</span>
				</div>
				<div class="text-muted-foreground mt-1 text-sm italic">{award.description}</div>
			</div>
		{/each}
	</div>
</div>
