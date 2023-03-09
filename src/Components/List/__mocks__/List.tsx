import React from "react";
import { listData } from "../../DataTypes/listData";

const List = ({ data }: { data: listData }) => {
  return <div>List - {data.name}</div>;
};

export default List;
