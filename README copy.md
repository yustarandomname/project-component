# ProjectC components
> svelte UI components for lightweight apps

## What is this package?
This project is part of project C. A set of lightweight web application. The task for each app is to improve our (digital) life by implementing a easy to understand interface. For instance, one of our app is a reminder app specialized for reminding us where we last parked our vehicles or a simple to use calculator. Each app is build with svelte. A component based framework. 

## Who is this package for?
For developer who would like to build lightweight apps for there personal problems. Like, watering plants, setting timers or taking some notes.

## How to use this package?
First intialize a svete project
```
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
```

To install this package
```
npm i projectc-components
npm install
npm run dev
```

To use a component
```html
  <script>
    import {Container} from "projectc-components"
  </script>

  <Container size="xl" background="rgba(200,0,0,0.5)">
    Hello
  </Container>
```

## What components are in this package?
So far we have implemented 8 components, we have a:
1. Container
2. Grid 
3. [!beta] Columns
4. Form / Input
5. Navigation bar (with authentication features)
6. Buttons
7. Icons 
8. Popup
9. Tabs (lazy loaded)

For a full list visit our demo site [here](https://svelte.dev/repl/0ab58f1d867b45fb91a10967fbe6dd31?version=3.37.0) 

## Where can I help with this project?
This project is maintained by a computer science student at TU Delft. In my free time I work on this project. If you would like to contribute, please send a pull request to the github repo [here](https://github.com/yustarandomname/projectC-components/pulls). Any issues are welcome ofcourse.

# What we are working on
1. Make tabs clickable again

# Change log
## version 1.2.5
- Added better way of developing tabs

## version 1.2.6
- Added image component

## version 1.2.7
- Add two new Input components
  - Number
  - File