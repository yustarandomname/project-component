<svelte:head>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</svelte:head>

<style>
  :root {
    --base: white;
    --primary: rgb(0 0 0 / 5%);
    --secondary: rgb(0 0 0 / 30%);
    --focus: rgb(0 0 0 / 50%);

    --red: rgb(255 0 0 / 10%);
    --red-focus: rgb(255 0 0  / 50%);
    --red-darker: rgb(255 0 0 / 80%);

    --blue: rgb(0 0 255 / 10%);
    --blue-focus: rgb(0 0 255 / 50%);
    --blue-darker: rgb(0 0 255 / 80%);

    --green: rgb(0 255 0 / 10%);
    --green-focus: rgb(0 255 0 / 50%);
    --green-darker: rgb(0 255 0 / 80%);
  }

  :global(body) {
    background: var(--base);
    padding: 0;
    margin: 0;
    font-family: Roboto, Arial, sans-serif;
  }

  :global(input) {
    padding: 0.75em;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    border-radius: 0.5em;
    font-size: 1em;
    border: 2px solid transparent;
  }

  :global(a) {
    color: black;
    text-decoration: none;
  }
</style>

<slot/>