import s from './Chronology.module.css'
import Tag from "../Tag/Tag"

function Chronology({children, tag_name, tag_color, img}) {
    return (
        <div className={s.Chronology}>
            <Tag tag_color={tag_color} tag_name={tag_name}/>
            <div className={s.content}>
                { children }
            </div>
            <img src={img} alt="photo" className={s.notmainkraft}/>
        </div>
    )
}
export default Chronology