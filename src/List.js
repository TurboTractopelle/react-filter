import React, { Component } from "react";
import LoadingHOC from "./LoadingHOC";

const List = props => {
  const { usernames } = props;

  if (usernames) {
    return <ul>{usernames.map((user, i) => <li key={i}>{user.name}</li>)}</ul>;
  } else {
    return <div>loading</div>;
  }
};

//export default LoadingHOC(List);
export default List;
