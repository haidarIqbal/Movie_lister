const DropDown = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select name={name} {...rest} className="form-control">
        <option value="">Select</option>
        {options.map((option) => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default DropDown;
