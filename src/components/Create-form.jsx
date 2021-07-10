import { useState } from "react";

export default function CreateForm(props) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      className="mt-3"
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(value);
        setValue("");
      }}
      onReset={() => {
        props.onReset();
        setValue("");
      }}
    >
      <label className="form-label">{props.header}</label>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={handleChange}
      />
      <div>
        <input className="btn btn-success" type="submit" value="Ок" />
        <input className="btn btn-secondary m-1" type="reset" value="Отмена" />
      </div>
    </form>
  );
}
