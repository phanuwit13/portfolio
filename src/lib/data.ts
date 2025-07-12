import TsIcon from '$lib/assets/typescript.svg?component';
import ReactIcon from '$lib/assets/react.svg?component';
import NextjsIcon from '$lib/assets/nextjs.svg?component';
import TailwindIcon from '$lib/assets/tailwind.svg?component';
import ZustandIcon from '$lib/assets/zustand.svg?component';
import ReduxIcon from '$lib/assets/redux.svg?component';
import ReactQueryIcon from '$lib/assets/react-query.svg?component';
import ShadcnIcon from '$lib/assets/shadcn.svg?component';
import NodejsIcon from '$lib/assets/nodejs.svg?component';
import BunIcon from '$lib/assets/bun.svg?component';
import DockerIcon from '$lib/assets/docker.svg?component';
import GitIcon from '$lib/assets/git.svg?component';
import AngularIcon from '$lib/assets/angular.svg?component';
import VueIcon from '$lib/assets/vue.svg?component';
import SvelteIcon from '$lib/assets/svelte.svg?component';
import JestIcon from '$lib/assets/jest.svg?component';

export const techStack = [
  { name: 'TypeScript', icon: TsIcon, link: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: ReactIcon, link: 'https://react.dev/' },
  { name: 'Next.js', icon: NextjsIcon, link: 'https://nextjs.org/' },
  { name: 'Angular', icon: AngularIcon, link: 'https://angular.io/' },
  { name: 'Vue', icon: VueIcon, link: 'https://vuejs.org/' },
  { name: 'Svelte', icon: SvelteIcon, link: 'https://svelte.dev/' },
  { name: 'Zustand', icon: ZustandIcon, link: 'https://zustand-demo.pmnd.rs/' },
  { name: 'Redux', icon: ReduxIcon, link: 'https://redux.js.org/' },
  { name: 'React Query', icon: ReactQueryIcon, link: 'https://tanstack.com/query/latest' },
  { name: 'Tailwind CSS', icon: TailwindIcon, link: 'https://tailwindcss.com/' },
  { name: 'shadcn/ui', icon: ShadcnIcon, link: 'https://ui.shadcn.com/' },
  { name: 'Node.js', icon: NodejsIcon, link: 'https://nodejs.org/' },
  { name: 'Bun', icon: BunIcon, link: 'https://bun.sh/' },
  { name: 'Jest', icon: JestIcon, link: 'https://jestjs.io/' },
  { name: 'Docker', icon: DockerIcon, link: 'https://www.docker.com/' },
  { name: 'Git', icon: GitIcon, link: 'https://git-scm.com/' }
];

export const experience = [
	{
		role: 'Senior Front-End Developer',
		company: '7solutions Company Limited',
		period: 'Jul 2024 – present',
		companyDetail: undefined,
		description: [
			'Lead the development of back-office and e-commerce applications using React, TypeScript, and Next.js.',
			'Write unit tests using Jest to ensure clean, reliable code.',
			'Collaborate with design and back-end teams to deliver robust solutions.'
		]
	},
	{
		role: 'Full Stack Development Instructor (Part-time)',
		company: 'WeStride (Thailand)',
		period: 'May 2022 – present',
		companyDetail: undefined,
		description: [
			'Provide mentorship and guidance in HTML, CSS, JavaScript, and React.js.',
			"Design and teach web development courses, ensuring students' readiness for real-world projects."
		]
	},
	{
		role: 'Senior Software Engineer',
		company: 'Big C Supercenter Public Company Limited',
		period: 'Aug 2023 – Jul 2024',
		companyDetail: undefined,
		description: [
			'Led code reviews, ensuring high code quality and adherence to best practices.',
			'Contributed to architectural decisions for scalable software solutions using Next.js, React.js, Spring Boot.'
		]
	},
	{
		role: 'Front-End Developer',
		company: 'HarmonyX Solution Co., Ltd',
		period: 'Oct 2022 – Aug 2023',
		companyDetail: undefined,
		description: [
			'Developed responsive front-end applications for e-commerce and back-office systems.',
			'Collaborated closely with clients to implement new features and optimize user experience.'
		]
	},
	{
		role: 'Front-End Developer',
		company: 'ChomCHOBgroup Co.,Ltd',
		period: 'Apr 2021 – Oct 2022',
		companyDetail: undefined,
		description: [
			'Developed interactive web applications for web shopping, NFT ticket sales, and crypto platforms.',
			'Enhanced user interfaces and optimized performance for better user engagement.'
		]
	}
];

export const education = [
	{
		degree: 'Computer Engineering',
		school: 'Rajamangala university of technology isan',
		period: 'May 2017 – Mar 2021',
		details: [
			'GPA: 3.7',
			'Thesis involved web application for checking and scanning people who enter dormitory',
			"Graduated with a second class honors in bachelor's degree of Computer Engineering"
		]
	}
];

export const awards = [
	{
		title: 'The application of the Internet of Things',
		year: '2021',
		description: `Rajamangala Engineering Academic Competition get first runner up in The application of the Internet of Things (IOT) for engineers.`
	}
];

export const profile = {
	profileImg: '/images/phanuwit-profile.png',
	name: 'Phanuwit Kittirong',
	subtitle: 'Software Engineer / Full-stack Developer',
	links: [
		{ label: '+66 84 268 3954', href: 'tel:+66842683954' },
		{
			label: 'Resume',
			href: 'https://www.canva.com/design/DAFiDA0XEV4/2JSz35GBiKNcUmC4lZth-w/edit?utm_content=DAFiDA0XEV4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
		},
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/phanuwit13/' },
		{ label: 'GitHub', href: 'https://github.com/phanuwit13' }
	]
};
