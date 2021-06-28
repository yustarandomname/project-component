<script>
  import {createEventDispatcher} from "svelte"
  import Container from "./Container.svelte"
  import Icon from "./Icon.svelte"

  export let query = ""
  export let focus = false
  export let suggestions
  export let selected = suggestions[0]
  export let maxSuggestions = 3
  export let keys = ["title","text"]
  
  export let filterSuggestions = () => {
    // reset selected index
    selectedIndex = 0

    if (query && keys) {
      return suggestions.filter((suggestion) => {
        return keys.some(key => {
          // Check if any key includes subQuery
          return query.toLowerCase().split(" ").some(subQuery => {
            return suggestion[key]?.toLowerCase().includes(subQuery)
          })
        })
      })
    }
    return suggestions
  }

  let selectedIndex = 0
  let searchField;
  const dispatch = createEventDispatcher()

  let activeSuggestions = filterSuggestions()

  function clickOutside(node) {
    const initialMaxSuggestions = maxSuggestions

    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        // set focus to false
        focus = false

        // reset maxSuggestions
        maxSuggestions = initialMaxSuggestions

        // reset selectedIndex
        selectedIndex = 0
        selected = activeSuggestions[selectedIndex]
      }
    }

    document.addEventListener('click', handleClick, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    }
  }

  function handleNavigation(e) {
    const modulo = (activeSuggestions.length > maxSuggestions) ? maxSuggestions + 1 : activeSuggestions.length;
    
    switch(e.which) {
      case 38:
        selectedIndex = (modulo + selectedIndex - 1) % modulo
        break;
      case 40:
        selectedIndex = (selectedIndex + 1) % modulo
        break;
      case 13:
        const suggestionObj = activeSuggestions[selectedIndex].suggestion

        if (activeSuggestions.length > maxSuggestions && maxSuggestions == selectedIndex && e.which == 13) {
          e.preventDefault()
          maxSuggestions += 3
        } else if (suggestionObj?.action) {
          e.preventDefault()
          suggestionObj.action()
        } else if (suggestionObj?.url) {
          e.preventDefault()
          window.open(suggestionObj.url, '_blank').focus();
        }
    }

    if (activeSuggestions[selectedIndex].suggestion?.action) {
      activeSuggestions[selectedIndex].suggestion?.action
    }

    selected = activeSuggestions[selectedIndex]
  }

  function handleSuggestion(suggestion) {
    query = suggestion.title
  }
</script>

<style>
  .positionBar {
    width: 100%;
    margin: 5em 0;
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    align-content: center;
  }

  input {
    transition: 0.5s padding;
  }

  .searchIcons {
    padding:0.75em;
    display: flex;
    cursor:pointer;
    gap: 0.5em;
    transition: 0.5s padding;
  }

  .focus > input,
  .focus > .searchIcons {
    padding: 1em 2em;
  }

  /* SUGGESTIONS */
  .suggestion {
    padding: 0.5em;
    display: block;
    margin: 0 2em 0.5em;
    cursor: pointer;
    background: rgb(255 255 255 / 30%);
    border-radius: 0.3em;
  }

  .suggestion.selected,
  .suggestion:hover {
    background: rgb(255 255 255 / 70%);
  }

  .suggestion.external {
    display: flex;
    justify-content: space-between;
    --color: var(--secondary, black);
  }

  .suggestion.external.selected,
  .suggestion.external:hover {
    --color: black;
  }
</style>

<div class="positionBar">
  <div style="max-width:90vw" use:clickOutside>
    <Container --margin="0" --padding="0" --background="var(var(--background), --red-focus)" size="m">
      <form class="searchbar" class:focus on:submit|preventDefault >
        <input 
          bind:this={searchField}
          type="text" 
          placeholder="search" bind:value={query}
          on:focus={() => focus = true} 
          on:keydown={handleNavigation}
          on:input={() => activeSuggestions = filterSuggestions()}>

        <div class="searchIcons">
          {#if query}
            <Icon name="close-outline" on:click={() => {query = ""}} />
          {/if}
          <Icon name="search" on:click={() => {if (query) dispatch("submit")}} />
        </div>
      </form>

        {#if activeSuggestions && focus}
          {#each activeSuggestions.slice(0,maxSuggestions) as suggestion, index}
            {#if suggestion.suggestion?.url}
              <!-- TODO -->
              <a class="suggestion external" class:selected={index == selectedIndex} href={suggestion.suggestion.url} target="_blank">
                {suggestion[[keys[0]]]}
                <Icon name="arrow-redo-outline"/>
              </a>
            {:else if suggestion.suggestion?.action}
              <!-- TODO -->
              <div class="suggestion" class:selected={index == selectedIndex} on:click={() => {searchField.focus(); suggestion.action}}>{suggestion[keys[0]]}</div>
            {:else}
              <div class="suggestion" class:selected={index == selectedIndex} on:click={() => {searchField.focus(); handleSuggestion(suggestion)}}>{suggestion[keys[0]]}</div>
            {/if}
          {/each}

          {#if activeSuggestions.length > maxSuggestions}
            <div class="loadMore suggestion" class:selected={activeSuggestions.slice(0,maxSuggestions).length == selectedIndex} on:click={() => {searchField.focus(); maxSuggestions += 3; activeSuggestions = filterSuggestions()}}>Show more ...</div>
          {/if}
        {/if}
    </Container>
  </div>
</div>