<script>
  import { onMount } from 'svelte'
  import store from '../../../store/store.js'

  import Education from '../../icon/education/index.svelte'
  import FullStack from '../../icon/stack/index.svelte'
  import FrontEnd from '../../icon/frontEnd/index.svelte'
  import Instructor from '../../icon/Instructor/index.svelte'

  const experienceData = [
    {
      image: Education,
      position: 'Computer Engineering',
      work: 'RMUTI',
      time: 'Jun 2560 - Mar 2564',
      detail:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt quia, laborum assumenda reprehenderit minus minima est necessitatibus fuga culpa, velit eaque. Esse molestias molestiae sunt a suscipit debitis non?',
    },
    {
      image: FullStack,
      position: 'Full-Stack Developer',
      work: 'Digio (Thailand) Co., Ltd',
      time: 'Nov 2563 - Mar 2564',
      detail:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt quia, laborum assumenda reprehenderit minus minima est necessitatibus fuga culpa, velit eaque. Esse molestias molestiae sunt a suscipit debitis non?',
    },
    {
      image: FrontEnd,
      position: 'Front-End Developer',
      work: 'Chomchobgroup Co.,Ltd.',
      time: 'Apr 2564 - Now',
      detail:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt quia, laborum assumenda reprehenderit minus minima est necessitatibus fuga culpa, velit eaque. Esse molestias molestiae sunt a suscipit debitis non?',
    },
    {
      image: Instructor,
      position: 'Front-End Development Instructor',
      work: 'WeStride',
      time: 'May 2564 - Now',
      detail:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt quia, laborum assumenda reprehenderit minus minima est necessitatibus fuga culpa, velit eaque. Esse molestias molestiae sunt a suscipit debitis non?',
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

  onMount(() => {
    console.log(document.body.classList[0])
  })
</script>

<div
  class="container-experience d-flex justify-content-center align-items-center flex-column gap-4  px-4"
>
  <div class="row w-100 gy-4 my-4">
    <div class="col-12 col-sm-12  col-md-6 col-lg-4 d-flex flex-column">
      <span class="experience-tag">Resume</span>
      <span class="experience-titel"> Education & Experience</span>
    </div>
    {#each experienceData as item}
      <div class="col-12 col-sm-12  col-md-6 col-lg-4">
        <div class="experience-card h-100 p-3 d-flex flex-column gap-2">
          <div>
            <svelte:component
              this={item.image}
              width={'3em'}
              fill={$darkModeStore.data.darkMode ? '#ffe45e' : '#5fa8d3'}
            />
          </div>
          <div class="experience-card-title">
            {item.position}
          </div>
          <div class="d-flex justify-content-between">
            <div class="experience-card-subtitle">
              {item.work}
            </div>
            <div class="experience-card-time ">
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
    color: #ffe45e;
  }
  .experience-card {
    background-color: #f8f9fa;
    border-top: 4px solid #5fa8d3;
  }
  :global(body.dark-mode) .experience-card {
    background-color: #555555;
    border-top: 4px solid #ffe45e;
  }
  .experience-tag{
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
  }
  .experience-card-detail {
    font-size: 0.75rem;
  }
</style>
