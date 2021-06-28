<script>
  // Properties
  export let size = "full";
  export let header = false
  export let footer = false

  // Classes
  export let hoverable = false
  export let noStyle = false
</script>

<style>
  .container {
    position: relative;
    overflow: hidden;
    border-radius: 0.6rem;
    box-sizing: border-box;
    max-width: min(90vw, 100%);

    width: var(--width, 100%);
    margin: var(--margin, 0 auto 1rem auto);
    padding: var(--padding, 0.75rem);
    border: var(--border, 2px solid transparent);
    border-color: var(--border-color, transparent);
    background: var(--background, var(--primary, rgb(0 0 0 / 5%)))
  }

  .header {
    margin-top: 2.5rem !important;
    overflow: visible;
  }
  .header:before {
    content: attr(header);
    position: absolute;
    top: -1.8rem;
    left: 0;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .hoverable { box-shadow: 0 0 0.5rem rgb(0 0 0 / 10%); cursor:pointer; transition: 0.2s; }
  .hoverable:hover,
  .highlight { box-shadow: 0 0 .5rem rgb(0 0 0 / 30%); }

  .extra-small-size,
  .xs-size {
    width: 20rem;
  }
  .small-size,
  .s-size {
    width: 40rem;
  }
  .medium-size,
  .m-size {
    width: 60rem;
  }
  .large-size,
  .l-size {
    width: 80rem;
  }
  .extra-large-size,
  .xl-size {
    width: 100rem;
  }

  .noStyle {
    padding: 0;
    overflow: visible;
    box-shadow: none;
  }
</style>

<div
  class="container {size}-size" class:hoverable class:noStyle class:header class:footer {header} on:click>
  <slot />
</div>