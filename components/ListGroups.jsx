import React from "react";
const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelected,
    selectedItem,
  } = props;
  return (
    <div className="list-group">
      {items.map((item) => {
        return (
          <button
            key={item[valueProperty]}
            onClick={() => onItemSelected(item)}
            type="button"
            className={
              item === selectedItem
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action "
            }
          >
            {item[textProperty]}
          </button>
        );
      })}
    </div>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
