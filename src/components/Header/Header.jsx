import { useCallback } from 'react'
import logotip from '../../assets/logotip.svg'
import s from './Header.module.css'
function Header(){
    const handleClick = useCallback((el) => {
      const element = document.getElementById(el);
      element.scrollIntoView({behavior: "smooth"});
    }, [])
    return (
    <header className={s.header}>
      <img src={logotip} alt="logotip" />
      <ul>
        <li><a href="#" onClick={() => handleClick("main")}>главная</a></li>
        <li><a href="#" onClick={() => handleClick("chronology")}>хронология</a></li>
        <li><a href="#" onClick={() => handleClick("persons")}>личности</a></li>
        <li><a href="#" onClick={() => handleClick("end")}>заключение</a></li>
      </ul>
    </header>
    )
}
export default Header