import React, { useState, useEffect } from "react";
import Icon from "../../Icon";
import { AXIOS } from "../../../../config/axios.config";
import API_URL from "../../../../constants/api.url";
import axios from "axios";

interface IProps {
  text: string;
  color: string;
  hasProject?: boolean;
}

const projects = [
  { id: 1, text: "پروژه اول" },
  { id: 2, text: "پروژه دوم" },
  { id: 3, text: "پروژه سوم" },
  { id: 4, text: "پروژه چهارم" },
];

const ListItem: React.FC<IProps> = ({
  text,
  color,
  hasProject = true,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    getProjects();
  };

  async function getProjects() {
    try {
      const response = await axios.get(`${API_URL.WorkSpaces}${1}/`);
      if (response.status === 200) console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li>
      <div className="flex justify-between items-center flex-row-reverse p-[4px] h-[36px] mt-S">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <div> {text}</div>
          <span
            className={`w-[20px] h-[20px] rounded-md ml-XS inline-block`}
            style={{ backgroundColor: color }}
          ></span>
        </div>
        {hasProject && (
          <Icon icon="dots" size={20} className="cursor-pointer" />
        )}
      </div>
      {hasProject && (
        <ul className={`${isOpen ? "block" : "hidden"}`}>
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex justify-between items-center flex-row-reverse p-[4px] h-[36px] pr-[30px] my-S"
            >
              <div className="flex justify-between items-center cursor-pointer">
                {project.text}
              </div>
              {hasProject && (
                <Icon icon="dots" size={20} className="cursor-pointer" />
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default ListItem;
