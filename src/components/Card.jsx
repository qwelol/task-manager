import List from "./List";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        <List
          tasks={props.tasks}
          selectItem={props.selectItem}
          createForm={props.createForm}
        />
      </div>
      <div className="card-body controls">{props.children}</div>
    </div>
  );
}
