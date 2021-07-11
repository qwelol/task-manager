export default function ListItem(props) {
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
