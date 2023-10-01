import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
interface IProps{
url:string,
text:string,
icon:string
}
const IconItem: React.FC<IProps> = ({url,text,icon}):JSX.Element => {
  return (
    <li>
            <Link to={`/${url}`}className="h-[43px] mb-L flex flex-row justify-end items-center">
                <h3 className="mr-[11px] text-xl">{text} </h3>
                 <Icon icon={icon}></Icon>
                 </Link>
    </li>
  )
}

export default IconItem