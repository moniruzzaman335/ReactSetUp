// this is normal way to create element
// const element = React.createElement("div", null, "Start Learning React");

const element = (
  <div>
        <h1>
            Welcome to learn react JS
        </h1>
  </div>  
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
