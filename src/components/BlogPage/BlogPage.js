import React from "react";

const BlogPage = () => {
  return (
    <div className="container mb-3 shadow p-4  bg-white rounded">
      <h1 className="text-center text-primary mb-3">Question and answer </h1>
      <div className=" row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Props vs state</h4>
              <p className="card-text">
                In React props are a way to pass data from a parent component to
                a child component. When we create a component in React, we can
                pass it any number of props as key-value pairs. The child
                component can then access these props using the props object.{" "}
                <br />
                On the other hand, state is a way to manage and store data
                within a component. State is typically used for data that can
                change over time like user input, fetch data from API. <br />
                So, the main difference between state and props is that props
                are passed down to a component from its parent component, while
                state is managed within the component itself.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">How does useState work?</h4>
              <p className="card-text">
                Basically In React useState is a hook that allows functional
                components to have stateful logic. When we call useState with an
                initial value it returns an array with two elements. The first
                element is the current state value, and the second element is a
                function that allows us to update that state value.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">How Does React work?</h4>
              <p className="card-text">
                React is a JavaScript library that allows us to build user
                interfaces by creating reusable components. When we build a
                React application, we write JavaScript code to define the
                components and their behavior. <br /> In ReactJS the Interface
                is separated into independent, reusable code snippets called
                components. Due to the fact that they take in arbitrary inputs
                known as properties or props, React components operate similarly
                to JavaScript functions.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">
                4. Purpose of useEffect other than fetching data
              </h4>
              <p className="card-text">
                Basically useEffect is a React hook that allows us to perform
                side effects in our functional components. It's not just limited
                to fetching data, we can use it to update the document title,
                set up event listeners, perform animations, and more. It's a
                powerful tool for handling all kinds of side effects in our
                react applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
