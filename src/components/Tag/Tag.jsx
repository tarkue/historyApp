import s from './Tag.module.css'


function Tag({tag_name, tag_color}) {
    return (
        <span style={{"--color": tag_color}} className={s.tag}>{tag_name}</span>    
    )
}
export default Tag