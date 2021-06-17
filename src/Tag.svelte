<script>
  import {createEventDispatcher} from 'svelte'
  export let selected = false

  const dispatch = createEventDispatcher()

  const toggle = () => {
    selected = !selected
    dispatch('toggle')
  }
</script>

<style>


</style>

<div>
  <slot />
  <div class="options">
    <div class="toggle" on:click={toggle}></div>
  </div>
</div>