import ListItem from "./List-item";

export default function List(props) {
  const items = props.tasks.map((task, index) => (
    <ListItem
      value={task.value}
      key={index}
      onChange={() => {
        props.selectItem(task.id);
      }}
      checked={task.selected}
    />
  ));

  return (
    <ul className="list-group">
      {items}
      {props.createForm && (
        <li className="list-group-item drop-in">{props.createForm}</li>
      )}
    </ul>
  );
}
