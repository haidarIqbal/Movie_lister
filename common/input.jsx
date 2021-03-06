import React from "react";
const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...rest} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
