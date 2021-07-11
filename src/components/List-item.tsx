import ListItemProps from "../models/list-item-props";

export default function ListItem(props: ListItemProps) {
  return (
    <li className="list-group-item">
      <label className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={props.onChange}
          checked={props.checked}
        />
        <span>{props.value}</span>
      </label>
    </li>
  );
}
