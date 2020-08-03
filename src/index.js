import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  return (
    <div style={{ fontSize: "30px" }}>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
