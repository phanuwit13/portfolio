<script>
  // import { onMount } from 'svelte'
  import Banner from '../../components/home/banner/banner.svelte'
  import Experience from '../../components/home/experience/experience.svelte'
  import Portfolio from '../../components/home/portfolio/portfolio.svelte'
</script>

<div>
  <div class="container-content container-sm position-relative">
    <div class=''>
      <Banner />
      <Experience />
      <Portfolio />
    </div>
  </div>
</div>

<style>
  .container-content{
    z-index: 1;
  }
  .background-banner {
    z-index: -1;
    width: 100%;
    background-color: #f8f9fa;
    height: 400px;
    top: 50px;
  }
  :global(body.dark-mode) .background-banner {
    background-color: #555555;
  }
</style>
