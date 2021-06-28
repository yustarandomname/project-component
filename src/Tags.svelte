<script>
  import tagStore from "./tagStore"

  export let tags = [];

  // console.log(tags)

  let tagColor = ["--red", "--blue", "--secondary"] // Choose one of these default colors when color is not defined

  tagStore.add(tags); // Add tags from component to tagStore
</script>

<style>
  .tags {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 0.5em;
    margin: 0.25em 0;

  }

  .tag {
    background: var(--activeColor);
    border:1px solid var(--activeColor);
    border-radius: 0.5em;
    padding: 0.25em 0.5em;
    cursor:pointer;
    font-size: 0.8em
  }

  .tag.active {
    border-color: black;
  }
</style>

<div class="tags">
  {#each Object.entries($tagStore) as [title, tag]}
    <!-- TODO: make this more clever -->
    {#if Object.keys(tags).includes(title)}
      <div class="tag" on:click={() => tagStore.toggle(title)} class:active={tag.active} style="--activeColor:{tag.color || "var(" + tagColor[tag.hashCode % tagColor.length] + ")"}">
        {tag.title}
      </div>
    {/if}
  {/each}
</div>
  