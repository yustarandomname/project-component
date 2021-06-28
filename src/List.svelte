<script>
  import Container from "./Container.svelte"

  export let data;
  export let filter;

  export let styled = true
  export let size = "m"
</script>

{#each data as item}
  {#if filter && filter(item)}
    {#if styled}
    <Container header={item.title} {size}>
      <slot {item} />
    </Container>
    {:else}
      <slot {item} />
    {/if}
  {/if}
{/each}