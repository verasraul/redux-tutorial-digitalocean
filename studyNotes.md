What is Redux?

Redux is a state container for JavaScript applications. Normally with React, you manage state at a component level, and pass state around via props. With Redux, the entire state of your application is managed in one immutable object. Every update to the Redux state results in a copy of sections of the state, plus the new change.

Redux was originally created by Dan Abramov and Andrew Clark.


Why should I use Redux?

    Easily manage global state - access or update any part of the state from any Redux-connected component
    Easily keep track of changes with Redux DevTools - any action or state change is tracked and easy to follow with Redux. The fact that the entire state of the application is tracked with each change means you can easily do time-travel debugging to move back and forth between changes.

        The downside to Redux is that there's a lot of initial boilerplate to set up and maintain (especially if you use plain Redux without Redux Toolkit). A smaller application may not need Redux and may instead benefit from simply using the Context API for global state needs.



Terminology

    Actions:
        An action sends data from your application to the Redux store. An action is conventionally an object with two properties: type and (optional) payload. The type is generally an uppercase string (assigned to a constant) that describes the action. The payload is additional data that may be passed.

        Action creators:
        An action creator is a function that returns an action.

    Reducers:
        A reducer is a function that takes two parameters: state and action. A reducer is immutable and always returns a copy of the entire state. A reducer typically consists of a switch statement that goes through all the possible action types.

    Store:
        The Redux application state lives in the store, which is initialized with a reducer. When used with React, a <Provider> exists to wrap the application, and anything within the Provider can have access to Redux.

    Dispatch:
        dispatch is a method available on the store object that accepts an object which is used to update the Redux state. Usually, this object is the result of invoking an action creator.

    Connect:
        The connect() function is one typical way to connect React to Redux. A connected component is sometimes referred to as a container.

