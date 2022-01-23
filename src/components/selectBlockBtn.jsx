import React from "react";

const SelectBlockBtn = ({onDecreaceEncrease}) => {
  return ( 
    <div className="btn-group ms-4" role="group" aria-label="Basic outlined example">
      <button type="button" className="btn btn-outline-secondary btn-sm shadow-none rounded-0" onClick = {() => onDecreaceEncrease("dcs")}><i className="bi bi-arrow-left-short"></i></button>
      <button type="button" className="btn btn-outline-secondary btn-sm shadow-none rounded-0" onClick = {() => onDecreaceEncrease("enc")}><i className="bi bi-arrow-right-short"></i></button>
    </div>
  );
}
export default SelectBlockBtn;