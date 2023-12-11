
import s from "./ContentRow.module.css"

function ContentRow({text1, text2, color, reverse}) {
    return <div className={s.ContentRow} style={{"--color": color}}>
        <div className={reverse ? s.one : s.two}>
            <p>{text1}</p>
            </div>
        <div className={reverse ? s.two : s.one}>
            <p>{text2}</p>
        </div>
    </div>
}

export default ContentRow