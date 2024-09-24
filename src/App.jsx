import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper-container">
        <h1 className="heading">To-Do List</h1>
        <form className="form formAdd">
          <input
            placeholder="Add your task"
            type="text"
            className="input-text"
            id="inputTask"
          />
          <button className="btnAction">ADD</button>
        </form>
        <ul className="listtask">
          <li>
            <div className="task">
              <label className="title">1. hoc bai</label>
            </div>
            <div className="action">
              <button className="btn btn-done">Done</button>
              <button className="btn btn-edit">Edit</button>
              <button className="btn btn-delete">Delete</button>
            </div>
          </li>

          <li>
            <div className="task">
              <label className="title">1. hoc bai</label>
            </div>
            <div className="action">
              <button className="btn btn-done">Done</button>
              <button className="btn btn-edit">Edit</button>
              <button className="btn btn-delete">Delete</button>
            </div>
          </li>

          <form className="form">
            <input
              placeholder="Add your task"
              type="text"
              className="input-text"
              id="inputTask"
            />
            <button className="btnAction">SAVE</button>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default App;
