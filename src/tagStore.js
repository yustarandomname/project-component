import { writable } from 'svelte/store';

function createTagStore() {
  const { subscribe, update, set } = writable({});

  return {
    subscribe,

    add: (tags) => update(obj => { return { ...obj, ...tags } }),
    toggle: (tagTitle) => update(obj => {
      obj[tagTitle].active = !obj[tagTitle].active
      return obj
    })
  }
}

export default createTagStore()