import React, { useState } from "react";
import CreateFormProps from "../models/Create-form-props";

export default function CreateForm(props: CreateFormProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return (
    <form
      className="mt-3"
      onSubmit={(e): void => {
        e.preventDefault();
        props.onSubmit(value);
        setValue("");
      }}
      onReset={(): void => {
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
        maxLength={280}
      />
      <div>
        <input className="btn btn-success" type="submit" value="Ок" />
        <input className="btn btn-secondary m-1" type="reset" value="Отмена" />
      </div>
    </form>
  );
}
