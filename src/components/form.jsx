import React from "react";

function Form(props) {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        className={`border-black border-${props.border} bg-${props.bg} w-${props.w} h-${props.h}  rounded-${props.rounded} text-${props.color}`}
      />
    </div>
  );
}

export default Form;
