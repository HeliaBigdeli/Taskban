import React, { useState } from "react";
import ListItem from "../ListItem";
interface IData {
  text: string;
  id: number;
  color: string;
  hasProject: boolean;
}
interface IProps {
  data: IData[];
}

const List: React.FC<IProps> = ({ data }): JSX.Element => {
  return (
    <ul>
      {
         data.map((item) => (
            <ListItem text={item.text} color={item.color} hasProject={item.hasProject}></ListItem>
      ))}
    </ul>
  );
};

export default List;
