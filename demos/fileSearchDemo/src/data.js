import { writable } from 'svelte/store';

let defaultData = [
  {
    title: 'test1234',
    text: '123 456',
    tags: [1, 2, 3, 4],
    created: new Date(),
    created_formated: formatDate(new Date()),
    author: 'You'
  },
  {
    title: 'test789',
    text: '123 456 789',
    created: new Date(),
    tags: [1, 2, 3, 4, 7, 8, 9],
    author: 'You'
  }
]


function formatDate(date) {
  const dateTypeArray = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }]

  function format(m) {
    let f = new Intl.DateTimeFormat('en', m);
    return f.format(date);
  }

  return dateTypeArray.map(format).join('-')
}

function createDataStore() {
  const { subscribe, update } = writable(defaultData);

  return {
    subscribe,

    add: (d) => update(n => {
      d.created = new Date()
      n.prepend(d)
    })
  };
}

export const data = createDataStore();