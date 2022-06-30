import React from "react";

function Form(props) {
  return (
    <div>
      <div className="form">
        <input
          placeholder="Напиши новый тег.."
          type="text"
          value={props.newTag}
          onChange={props.handleTag}
          onBlur={props.handleBlur}
          className={` ${props.blur && props.textError ? "is-error" : ""} `}
        />

        <button className="form_btn" disabled={props.newTag ? false : true} onClick={props.addTag}>
          Отправить
        </button>
      </div>
      {props.blur && props.textError && (
        <div className="text_error">{props.textError}</div>
      )}
    </div>
  );
}

export default Form;
