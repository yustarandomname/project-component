import { writable } from 'svelte/store';

let nextId = 3;

// Convert string to positive int
// Credits to esmiralha: https://stackoverflow.com/users/495174/esmiralha
String.prototype.hashCode = function () {
  let hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

class Tag {
  constructor(title, background, active) {
    this.title = title
    this.background = background
    this.active = active || false
    this.hashCode = title.toString().hashCode();
  }
}

let localData = [
  {
    id: 1,
    title: 'test789',
    text: '789 lorem lalala',
    created: new Date(),
    created_formated: formatDate(new Date()),
    tags: { test: new Tag("test"), 1: new Tag("1"), 7: new Tag("7") },
    author: 'You'
  },
  {
    id: 3,
    title: '789',
    text: '123 456 789',
    created: new Date(),
    created_formated: formatDate(new Date()),
    author: 'You'
  },
  {
    id: 2,
    title: 'youtube',
    text: "go to youtube.com",
    created: new Date(),
    created_formated: formatDate(new Date()),
    suggestion: { title: "youtube", url: "https://youtube.com" },
    tags: { external: new Tag("external", "--blue", true), youtube: new Tag("youtube", "--blue", true) },
    author: 'Admins'
  },
  {
    id: 0,
    title: 'test1234',
    text: '123 456',
    tags: { test: new Tag("test", null, true), 1: new Tag("1"), 7: new Tag("7") },
    created: new Date(),
    created_formated: formatDate(new Date()),
    author: 'You'
  },
  {
    id: 4,
    title: 'test123456 lalalala',
    text: '123 456',
    created: new Date(),
    created_formated: formatDate(new Date()),
    author: 'You'
  },
  {
    id: 5,
    title: 'test123456 lalalala1',
    text: '123 456',
    created: new Date(),
    created_formated: formatDate(new Date()),
    author: 'You'
  },
  {
    id: 6,
    title: 'test123456 lalalala2',
    text: '123 456',
    created: new Date(),
    created_formated: formatDate(new Date()),
    author: 'You'
  },
  {
    id: 7,
    title: 'test123456 lalalala3',
    text: '123 456',
    created: new Date(),
    created_formated: formatDate(new Date()),
    author: 'You'
  },
  {
    id: 8,
    title: 'test123456 lalalala4',
    text: '123 456',
    created: new Date(),
    created_formated: formatDate(new Date()),
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
  const { subscribe } = writable(localData);

  return {
    subscribe,

    suggestions: () => localData.filter((obj) => obj.title).map((obj) => (obj.suggestion) ? obj.suggestion : { title: obj.title }),

    add: (d) => set(n => {
      d.created = new Date()
      d.created_formated = formatDate(new Date()),
        d.id = nextId++

      localData.prepend(d)
      n.prepend(d)
    })
  };
}

export const data = createDataStore();