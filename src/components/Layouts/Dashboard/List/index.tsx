import React, { useState } from "react";
import Icon from "../../../Common/Icon";
interface IData {
  text: string;
  id: number;
  color: string;
  hasProject?: boolean;
}
interface IProps {
  data: IData[];
}

const List: React.FC<IProps> = ({ data }): JSX.Element => {
  const projects = [
    { id: 1, text: "پروژه اول" },
    { id: 2, text: "پروژه دوم" },
    { id: 3, text: "پروژه سوم" },
    { id: 4, text: "پروژه چهارم" },
  ];
  return (
    <ul id="accordion-collapse" data-accordion="collapse">
      {
         data.map((item) => (
             <li key={item.id} id="accordion-collapse-heading-1">
                <div className="flex justify-between flex-row-reverse p-[4px] h-[36px] my-[16px]" >
                  <div className="flex justify-between items-center">
                    <div  data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1"> {item.text}</div>
                     <span
                        className={`w-[20px] h-[20px] bg-${item.color} radius-[4px] ml-[8px] inline-block`}
                        data-accordion-target="#accordion-collapse-Projects"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-Projects">
                    </span>
                  </div>
               {item.hasProject&& <Icon icon="dots" />}
               </div>
             {item.hasProject && (
            <ul
              id="accordion-collapse-body-1"className="hidden" aria-labelledby="accordion-collapse-heading-1"
            >
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="flex justify-between flex-row-reverse p-[4px] h-[36px] pr-[28px]"
                >
                  <div className="flex justify-between items-center">
                    {project.text}
                  </div>
                  <Icon icon="dots" />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
