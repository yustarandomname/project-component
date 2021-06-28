<script>
  export let name = "help-outline";
</script>

<style>
  .icon {
    background-size:contain;
    background-repeat: no-repeat;
    color: var(--color, black);
    height: var(--size, 1.5em);
    width: var(--size, 1.5em)
  }
</style>

<slot>
  <ion-icon class="icon" {name} on:click></ion-icon>
</slot>