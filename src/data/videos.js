import { resource } from './resource';

const videos = [
  {
    "id": "314f198e",
    "title": "Redux: Extracting Action Creators",
    "duration": "3:52",
    "technology": "js",
    "description": "Learn how to keep code maintainable and self-documenting by extracting action creators from the components.",
    "instructorId": "0ec1d359"
  },
  {
    "id": "dd64a4b8",
    "title": "Redux: Generating Containers with connect() from React Redux (FooterLink)",
    "duration": "3:27",
    "technology": "js",
    "description": "Learn how to use container’s own props inside the mapStateToProps() and mapDispatchToProps() functions.",
    "instructorId": "0ec1d359"
  },
  {
    "id": "eb1906d9",
    "title": "Redux: Generating Containers with connect() from React Redux (AddTodo)",
    "duration": "4:41",
    "technology": "js",
    "description": "Learn how to inject dispatch() as a prop into a React component by using connect() from React Redux library.",
    "instructorId": "0ec1d359"
  },
  {
    "id": "c55b205f",
    "title": "Redux: Generating Containers with connect() from React Redux (VisibleTodoList)",
    "duration": "5:13",
    "technology": "js",
    "description": "Learn how to write mapStateToProps() and mapDispatchToProps() functions and use connect() from React Redux library to generate container components.",
    "instructorId": "0ec1d359"
  },
  {
    "id": "ee4f8a5d",
    "title": "Redux: Passing the Store Down with <Provider> from React Redux",
    "duration": "1:30",
    "technology": "js",
    "description": "Learn how to use the  that comes with React Redux instead of the hand-rolled implementation from the previous lesson.",
    "instructorId": "0ec1d359"
  },
  {
    "id": "10bdf932",
    "title": "Getting started with the react-rails gem",
    "duration": "3:00",
    "technology": "react",
    "description": "React and Ruby on Rails play very nicely together if you are using the <a href=\"https://github.com/reactjs/react-rails\">react-rails gem</a>. Using react-rails, you can easily drop in React components throughout your Rails application. In this lesson, we will get react-rails installed and create our first React component.",
    "instructorId": "2fea5dcb"
  },
  {
    "id": "b762d9cd",
    "title": "Multiple HTTP Requests with $q",
    "duration": "5:06",
    "technology": "angularjs",
    "description": "In AngularJS, multiple HTTP requests can be coordinated with $q.all, making your project's code cleaner and more testable.",
    "instructorId": "2fea5dcb"
  },
  {
    "id": "1ea07770",
    "title": "Testing With Protractor Page Objects",
    "duration": "3:28",
    "technology": "angularjs",
    "description": "Protractor Page Objects are a recommended for testing your AngularJS applications. Page Objects abstract the interaction between the browser and your functional tests, resulting in much cleaner tests. ",
    "instructorId": "2fea5dcb"
  },
  {
    "id": "42328375",
    "title": "Test Simple Binding With Protractor",
    "duration": "2:24",
    "technology": "angularjs",
    "description": "Protractor is built to interact with AngularJS applications. In this lesson, we will take a look at how Protractor interacts with the application using its <code>element</code> and finder functions.",
    "instructorId": "2fea5dcb"
  },
  {
    "id": "ec6946be",
    "title": "Getting Started With Protractor",
    "duration": "3:25",
    "technology": "angularjs",
    "description": "Protractor is an end-to-end testing library for AngularJS. This video lesson will walk through getting Protractor installed and writing your first test.",
    "instructorId": "2fea5dcb"
  },
  {
    "id": "df1f6a22",
    "title": "Immutable.Record() as data models",
    "duration": "5:33",
    "technology": "js",
    "description": "The Immutable.js Record() allows you to model your immutable data much like you would model data with native Javascript classes or objects. It differs from native classes because it cannot be mutated after it's creation and it <em>always</em> has a default value. It's an excellent construct in which to piece together your stores, be them Flux or some other storage implementation. Let's quickly create an Immutable Record().",
    "instructorId": "5e48e78a"
  },
  {
    "id": "7776e51c",
    "title": "Lightning Fast Immutable.js Equality Checks with Hash Codes",
    "duration": "2:27",
    "technology": "js",
    "description": "While Immutable.js offers .is() to confirm value equality between iterables it comes at the cost of referencing each key and value in both objects. For lightning fast equality checks, Immutable.js can produce a hash code based on an iterable's content. If two iterables have the same content, their hash codes will be the same. It's worth noting that this technique is unsuitable for mission critical application development since there is a chance, however slight, that checksums like these might collide. This is outlined here: <a href=\"https://en.wikipedia.org/wiki/Collision_(computer_science)\">https://en.wikipedia.org/wiki/Collision_(computer_science)</a>",
    "instructorId": "5e48e78a"
  },
  {
    "id": "ad930827",
    "title": "Transforming Immutable Data with Reduce",
    "duration": "8:25",
    "technology": "js",
    "description": "Immutable.js iterables offer the reduce() method, a powerful and often misunderstood functional operator on which map(), filter(), groupBy(), etc. are built. The concept is simple: reduce transforms your iterable into something else, that's all. The name is misleading as you may or may not actually \"reduce\" anything. Let's replicate the groupBy() and filter() methods with reduce to illustrate how it works.",
    "instructorId": "5e48e78a"
  },
  {
    "id": "e3dae633",
    "title": "Maintaining Order in Immutable.js Objects",
    "duration": "8:08",
    "technology": "js",
    "description": "Immutable.js's Map doesn't promise iteration order after a set() operation. When we need a guarantee for iteration order, we can use OrderedMap. This comes at a slight performance cost, or for you computer science people, it is amortized at an unstable O(log32 N). Let's explore ordering. ",
    "instructorId": "5e48e78a"
  },
  {
    "id": "61460854",
    "title": "Simple Undo/Redo with Immutable.js Data Structures",
    "duration": "8:35",
    "technology": "js",
    "description": "Implementing Undo/Redo can be tricky business. Consider two strategies to simplify implenting undo/redo: 1) use immutable data 2) react to that data with a top-down approach. Let's build a simple drawing app that will draw circles on a canvas and allow us to undo/redo our drawing. ",
    "instructorId": "5e48e78a"
  },
  {
    "id": "ca37dfa8",
    "title": "Review of Angular 2, RxJS, and Reducers from ngrx/store",
    "duration": "3:38",
    "technology": "angular2",
    "description": "This lesson summarizes everything the course has covered and how Angular 2, RxJS, and ngrx/store work together to achive a reactive application.",
    "instructorId": "fa4cf2d5"
  },
  {
    "id": "40041a10",
    "title": "Using a Value from the Store in a Reducer",
    "duration": "3:31",
    "technology": "angular2",
    "description": "RxJS allows you to combine streams in various ways. This lesson shows you how to take a click stream and combine it with a store stream to use a value from the store inside a reducer.",
    "instructorId": "fa4cf2d5"
  },
  {
    "id": "1b5f868d",
    "title": "Using a Reducer to Change an Object's Property Inside an Array",
    "duration": "5:05",
    "technology": "angular2",
    "description": "Reducers are also often used for changing a single property inside of other reducers. This lesson shows how a type can enter the people reducer, but then the people reducer can use a different type to call the clock reducer and get a value back.",
    "instructorId": "fa4cf2d5"
  },
  {
    "id": "d5d11ade",
    "title": "Using Two Reducers Together",
    "duration": "1:38",
    "technology": "angular2",
    "description": "Reducers can easily be used inside one another to update related state. This lesson shows how you can use the clock reducer inside of the people reducer to create the time for each new person.",
    "instructorId": "fa4cf2d5"
  },
  {
    "id": "83888e02",
    "title": "Adding a Second Reducer to the Store",
    "duration": "2:33",
    "technology": "angular2",
    "description": "Stores can accept as many reducers as you need. This lesson covers adding a second reducer that will be used to control an array of people.",
    "instructorId": "fa4cf2d5"
  },
  {
    "id": "029d1f3b",
    "title": "Accessible Icon Buttons",
    "duration": "3:42",
    "technology": "otherjs",
    "description": "Icon buttons are very common in web applications, yet they often have accessibility problems. Learn how to make your icon buttons accessible to keyboard and screen reader users with HTML, CSS, SVG and ARIA.",
    "instructorId": "34112383"
  },
  {
    "id": "49d07497",
    "title": "Core Concepts of React: Components, Props, and State",
    "duration": "6:54",
    "technology": "react",
    "description": "In this lesson we'll dig into the absolute fundamentals of React by exploring the concepts of components, properties, and state and how they work together to build React applications.",
    "instructorId": "a5ee08b5"
  },
  {
    "id": "d852c265",
    "title": "Using React with the FullCalendar jQuery plugin",
    "duration": "2:55",
    "technology": "react",
    "description": "In this lesson, we use React and the FullCalendar.js JQuery plugin to demonstrate how you can use complex JQuery plugins to create dynamic React components.",
    "instructorId": "834666cf"
  }
];

const { getAllOfVideo, getVideo } = resource('Video', videos);

export { getAllOfVideo, getVideo };
