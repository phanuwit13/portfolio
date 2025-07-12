<script lang="ts">
  import VerifiedIcon from '$lib/assets/verified.svg?component';

  export let profileImg: string;
  export let name: string;
  export let subtitle: string;
  export let links: { label: string; href: string }[];
</script>

<div class="flex flex-col items-center gap-4 md:flex-row md:gap-8">
  <img src={profileImg} alt="Avatar" class="size-40 rounded-full border-2 border-gray-200 p-1 dark:border-gray-700" />
  <div class="flex-1 text-center md:text-left">
    <p class="text-muted-foreground text-sm">Coding, Creativity, Traveling...</p>
    <h1 class="flex items-center justify-center gap-2 text-2xl font-bold md:justify-start">
      {name}
      <VerifiedIcon class="size-4" />
    </h1>
    <p class="text-muted-foreground mt-1 text-sm">{subtitle}</p>
    <div class="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
      {#each links as link}
        <a href={link.href} class="text-xs underline hover:text-blue-600" target="_blank">{link.label}</a>
      {/each}
    </div>
  </div>
</div>
