# REACT PROPS

## Learning Objectives

1. How to create basic React components using functions.

- Components represent part of the user interface. They can include:-

    - Header
    - Navigation
    - Main
    - Footer

- Component code is placed in a .js file.
- They are of 2 types (i.e) __stateless functional components__ and __stateful class components__

- Functional components are just JavaScript functions that return JSX(kinda like HTML)

```
function Welcome(props) {
    return <h1> Hello, {props.name} </h1>
}
```

2. How to reuse components

- To reuse Components you can create seperate files for them and import them where needed

``` import Button from './Button' ```

3. How to pass properties to components

- Props allow you to pass data from a parent component to its child components.

```
function Person({ name, age }) {
    return (
        <div>
            <p> Name: {name} </p>
            <p> Age: {age} </p>
        </div>
    );
}

// usage
<Person name='Alice' age={29}/>
```




