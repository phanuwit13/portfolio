<script>
  import store from '../../../store/store.js'

  import Folder from '../../icon/document/index.svelte'

  const workData = [
    {
      image: Folder,
      name: 'Portfolio',
      work: 'Svelte + Bootstrap',
      url: 'https://phanuwit-k.pages.dev/',
      git: 'https://github.com/phanuwit13/portfolio',
      detail:
        'Web Portfolio is an online representation of work you have created, as well as your skills and experiences built using Svelte and Bootstrap.',
      active: false,
    },
    {
      image: Folder,
      name: 'Todo Task Application',
      work: 'NuxtJS + Tailwind + Hasura',
      url: 'https://todo-list-webapplication.pages.dev/',
      git: 'https://github.com/phanuwit13/todo-list-webapplication',
      detail:
        'Todo Task Application is a web application with user authentication using Hasura and a simple interface for creating, updating, and deleting task. Built using Nuxt.js, a powerful. It also features Tailwind CSS for a responsive and customizable user interface.',
      active: false,
    },
    {
      image: Folder,
      name: 'E-Commerce',
      work: 'Next.js + Tailwind',
      url: 'https://e-commerce-aij.pages.dev/',
      git: 'https://github.com/phanuwit13/e-commerce',
      detail:
        'E-Commerce is a web application developed with Next.js and Tailwind CSS. With login, add to cart, product listing, and product detail features, I create a seamless shopping experience for users. By implementing these tools.',
      active: false,
    },
    {
      image: Folder,
      name: 'Pokedex Application',
      work: 'Vite.js + Tailwind',
      url: 'https://pokedex-project.pages.dev/',
      git: 'https://github.com/phanuwit13/pokedex-project',
      detail:
        "A web Pokedex list is a site that provides detailed information about Pokemon, including stats, moves, and evolution details, searchable by name or type. It's a valuable resource for Pokemon fans and players.",
      active: false,
    },
    {
      image: Folder,
      name: 'Management Activity RMUTI',
      work: 'PHP + Bootstrap',
      url: 'https://www.cpe.rmuti.ac.th/project/mini_activity/',
      git: 'https://github.com/phanuwit13/webmini',
      detail:
        'The university event management website simplifies event planning by enabling users to add, edit, and delete events and activity units. Its user-friendly interface keeps students informed about upcoming events and streamlines the process for event coordinators.',
      active: false,
    },
    {
      image: Folder,
      name: 'Movie List',
      work: 'Angular + Tailwind',
      url: 'https://movie-market-place.pages.dev/',
      git: 'https://github.com/phanuwit13/movie-market-place',
      detail:
        'This website displays information on the most popular and highly-rated movies and TV series currently in theaters. Users can browse details such as plot summaries, cast and crew information, and user ratings, making it a valuable resource for movie and TV enthusiasts.',
      active: false,
    },
    {
      image: Folder,
      name: 'Video Meeting',
      work: 'Next.js + Twilio Video',
      url: 'https://video-meeing.pages.dev/',
      git: 'https://github.com/phanuwit13/video-meeing',
      detail:
        'Video Meeting is a straightforward web application for one-on-one video calls, utilizing Next.js and Twilio Video. It offers a simple, user-friendly interface for personal and professional online meetings without the complexities of larger platforms.',
      active: false,
    },
    {
      image: Folder,
      name: 'Countdown Birthday',
      work: 'React.js',
      url: 'https://countdown-to-birthday.pages.dev/',
      git: 'https://github.com/phanuwit13/westride-basicReact-useState/tree/final',
      detail:
        'A React.js web app providing a personalized birthday countdown timer.',
      active: false,
    },
  ]

  //store
  let darkModeStore = store.darkMode

  $: if ($darkModeStore) {
    if ($darkModeStore.type === 'DARK_MODE_SUCCESS') {
      console.log('darkModeStore', $darkModeStore)
    }
  }

  const hoverCard = (index) => {
    workData[index].active = !workData[index].active
  }

  const checkIconColor = (active, dark) => {
    if (dark) {
      return active ? '#212327' : '#EDC578'
    } else {
      return active ? '#ffffff' : '#5fa8d3'
    }
  }

  // onMount(() => {
  //   console.log(document.body.classList[0])
  // })
</script>

<div
  class="container-experience d-flex justify-content-center align-items-center flex-column gap-4 px-4"
>
  <div class="row w-100 gy-4 my-4">
    <div
      class="text-focus-in col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column"
    >
      <span class="experience-tag">Portfolio</span>
      <span class="experience-titel"> Project & Website</span>
    </div>
    {#each workData as item, index}
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-focus-in">
        <a
          href={item.git}
          target="_blank"
          on:mouseleave={() => {
            hoverCard(index)
          }}
          on:mouseenter={() => hoverCard(index)}
          class="experience-card h-100 p-3 d-flex flex-column gap-2 text-decoration-none"
        >
          <div>
            <svelte:component
              this={item.image}
              width={'3em'}
              fill={checkIconColor(item.active, $darkModeStore.data.darkMode)}
            />
          </div>
          <a
            href={item.url}
            target="_blank"
            class="experience-card-title"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
          <div class="d-flex justify-content-between">
            <div class="experience-card-subtitle">
              {item.work}
            </div>
          </div>
          <div class="experience-card-detail">
            {item.detail}
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<!-- style -->
<style>
  :global(body.dark-mode) {
    background-color: #212327 !important;
  }
  .container-experience {
    margin-top: 40px;
  }
  .experience-titel {
    font-size: 2rem;
    font-weight: 600;
  }
  :global(body.dark-mode) .experience-card-title,
  :global(body.dark-mode) .experience-card-subtitle,
  :global(body.dark-mode) .experience-titel,
  :global(body.dark-mode) .experience-card-detail {
    color: #f8f9fa;
  }
  :global(body.dark-mode) .experience-card-time,
  :global(body.dark-mode) .experience-tag {
    color: #edc578;
  }
  .experience-card {
    position: relative;
    background-color: #f8f9fa;
    z-index: 0;
    overflow: hidden;
    border-top: 4px solid #5fa8d3;
  }
  :global(body.dark-mode) .experience-card::before {
    background: #edc578;
  }
  .experience-card::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #5fa8d3;
    height: 40px;
    width: 40px;
    border-radius: 60px;
    transform: scale(1.5);
    transform-origin: 50% 50%;
    transition: transform 0.4s ease-out;
  }
  :global(body.dark-mode) .experience-card:hover .experience-card-title,
  :global(body.dark-mode) .experience-card:hover .experience-card-subtitle,
  :global(body.dark-mode) .experience-card:hover .experience-card-detail {
    color: #ffffff;
  }
  .experience-card:hover {
    color: #ffffff;
  }
  :global(body.dark-mode) .experience-card:hover {
    color: #212327;
  }
  .experience-card:hover::before {
    transform: scale(26);
  }
  :global(body.dark-mode) .experience-card {
    background-color: #555555;
    border-top: 4px solid #edc578;
  }
  .experience-tag {
    color: #5fa8d3;
    font-size: 1.25rem;
    font-weight: 500;
  }
  .experience-card-title {
    width: fit-content;
    /* text-decoration: none; */
    color: #212529;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .experience-card-title:hover {
    text-decoration: underline;
    text-decoration-thickness: 1.4px;
  }

  .experience-card-subtitle {
    color: #212529;
    font-size: 1rem;
    font-weight: 500;
  }
  .experience-card-detail {
    color: #212529;
    font-size: 0.75rem;
  }

  .text-focus-in {
    -webkit-animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  /* text-focus-in */
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
</style>
