<script>
  import { onMount } from 'svelte'
  import store from '../../../store/store.js'

  import Education from '../../icon/education/index.svelte'
  import FullStack from '../../icon/stack/index.svelte'
  import FrontEnd from '../../icon/frontEnd/index.svelte'
  import Instructor from '../../icon/Instructor/index.svelte'

  const experienceData = [
    {
      image: FullStack,
      position: 'Senior Software Engineer',
      work: 'Big C Supercenter Public Company Limited',
      time: 'Aug 2566 - Now',
      detail:
        'I currently work as a Front-End Developer at HarmonyX Solution Co., Ltd. My responsibilities include web e-commerce, web application back office and implemented software solutions based on the company requirements such as implemented new feature for customer.',
      active: false,
    },
    {
      image: Instructor,
      position: 'Front-End Development Instructor',
      work: 'WeStride',
      time: 'May 2564 - Now',
      detail:
        'I currently work as a Front-End Development Instructor at WeStride. My responsibilities include provide advice and answer student questions in courses about website development such as HTML, CSS, javascript and reacts.',
      active: false,
    },
    {
      image: FrontEnd,
      position: 'Front-End Developer',
      work: 'HarmonyX Solution Co., Ltd.',
      time: 'Otc 2565 - Aug 2566',
      detail:
        'I currently work as a Front-End Developer at HarmonyX Solution Co., Ltd. My responsibilities include web e-commerce, web application back office and implemented software solutions based on the company requirements such as implemented new feature for customer.',
      active: false,
    },
    {
      image: FrontEnd,
      position: 'Front-End Developer',
      work: 'Chomchobgroup Co.,Ltd.',
      time: 'Apr 2564 - Otc 2565',
      detail:
        'I work as a Front-End Developer at Chomchobgroup Co., Ltd. My responsibilities include Web Shopping, platform redeems point web preview, token sale platform, web crypto convert and web application sale NFT ticket.',
      active: false,
    },
    {
      image: FullStack,
      position: 'Full-Stack Developer (internship)',
      work: 'Digio (Thailand) Co., Ltd',
      time: 'Nov 2563 - Mar 2564',
      detail:
        "I developed Front-End and Back-End. I'm learning about Front-End using reactjs and nextjs, Back-End using expressjs. My responsibilities include web application for donation and fixed bug for back office or assign tasks for me.",
      active: false,
    },
    {
      image: Education,
      position: 'Computer Engineering',
      work: 'RMUTI',
      time: 'Jun 2560 - Mar 2564',
      detail:
        'I graduated with a bachelor’s degree in Computer Engineering from Rajamangala University of Technology Isan, In my course of study I study about OOP ,Machine Learning, Computer Vision,Data Structure, Web Programing, etc.',
      active: false,
    },
  ]

  //store
  let darkModeStore = store.darkMode

  $: if ($darkModeStore) {
    if ($darkModeStore.type === 'DARK_MODE_SUCCESS') {
      // userAddress = $darkModeStore.data
      console.log('darkModeStore', $darkModeStore)
    }
  }

  const hoverCard = (index) => {
    experienceData[index].active = !experienceData[index].active
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
      <span class="experience-tag">Resume</span>
      <span class="experience-titel"> Education & Experience</span>
    </div>
    {#each experienceData as item, index}
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-focus-in">
        <div
          on:mouseleave={() => {
            hoverCard(index)
          }}
          on:mouseenter={() => hoverCard(index)}
          class="experience-card h-100 p-3 d-flex flex-column gap-2"
        >
          <div>
            <svelte:component
              this={item.image}
              width={'3em'}
              fill={checkIconColor(item.active, $darkModeStore.data.darkMode)}
            />
          </div>
          <div class="experience-card-title">
            {item.position}
          </div>
          <div class="d-flex justify-content-between">
            <div class="experience-card-subtitle">
              {item.work}
            </div>
            <div class="experience-card-time">
              {item.time}
            </div>
          </div>
          <div class="experience-card-detail">
            {item.detail}
          </div>
        </div>
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
  .experience-card:hover .experience-card-time {
    color: #ffffff;
  }
  :global(body.dark-mode) .experience-card:hover .experience-card-time {
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
    font-size: 1.25rem;
    font-weight: 500;
  }
  .experience-card-subtitle {
    font-size: 1rem;
    font-weight: 500;
  }
  .experience-card-time {
    color: #5fa8d3;
    font-size: 0.75rem;
    font-weight: 500;
    text-wrap: nowrap;
  }
  .experience-card-detail {
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
