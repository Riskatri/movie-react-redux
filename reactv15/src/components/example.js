import React from "react";

function formatName() {
  const user = {
    firstname: "riska ",
    lastname: "tri handayani ",
  };
  return user.firstname + "" + user.lastname;
}

// const user = {
//   firstname: "riska",
//   lastname: "tri handayani ",
// };

export default formatName;
