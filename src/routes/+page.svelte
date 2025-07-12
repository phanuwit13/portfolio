<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import EducationList from '$lib/components/EducationList.svelte';
	import { techStack, experience, education, awards, profile } from '$lib/data';
	import { theme } from '$lib/stores/theme';

	const handleThemeChange = () => {
		const isDark = document.documentElement.classList.contains('dark');
		if (isDark) {
			theme.set('light');
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		} else {
			theme.set('dark');
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
		}
	};
</script>

<NavBar onThemeToggle={handleThemeChange} />
<div
	class="mx-auto max-w-4xl bg-gradient-to-br from-white to-gray-50 px-10 py-8 md:py-12 dark:from-gray-900 dark:to-gray-800"
>
	<ProfileHeader profileImg={profile.profileImg} name={profile.name} subtitle={profile.subtitle} links={profile.links} />
	<div class="mt-8">
		<h2 class="text-lg font-semibold">About</h2>
		<p class="mt-2 text-sm leading-relaxed">
			Experienced <b>Senior Front-End Developer</b> with 5+ years of expertise in React.js, TypeScript,
			and Next.js. Skilled in building scalable and high-performance web applications, writing unit tests,
			and collaborating with cross-functional teams to deliver innovative solutions. Passionate about
			mentoring junior developers and teaching web development as a Full-Stack Instructor.
		</p>
	</div>
	<TechStack {techStack} />
	<ExperienceList {experience} />
	<EducationList {education} {awards} />

	<div class="text-muted-foreground mt-10 text-center text-xs">
		Built by <a href="/" class="underline">Phanuwit.k</a> - source code available on
		<a href="https://github.com/phanuwit13/portfolio" target="_blank" class="underline">Github</a>
	</div>
</div>
