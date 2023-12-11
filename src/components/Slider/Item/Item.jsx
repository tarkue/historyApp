import s from "./Item.module.css"

function Item({img, name, tag, text}) {
    return (
        <div className={s.Item}>
            <img src={img} alt={name} className={s.Image}/>
            <div className={s.ItemWrapper}>
                <span style={{"--color": tag.color}} className={s.Tag}>
                    <p>{tag.name}</p>
                </span>
                <p className={s.Text}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Item