import { Link } from 'react-router-dom'
import Icon from '../Icon'

interface IProps {
  url: string,
  text: string,
  icon: string
}
const IconItem: React.FC<IProps> = ({ url, text, icon }): JSX.Element => {
  return (
    <li>
      <Link to={`/${url}`} className="flex flex-row justify-end items-center">
        <h3 className="mr-[11px] text-xl">{text}</h3>
        <Icon icon={icon}></Icon>
      </Link>
    </li>
  )
}

export default IconItem