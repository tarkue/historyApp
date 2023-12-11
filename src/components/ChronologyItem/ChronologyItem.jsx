import s from './ChronologyItem.module.css'

function ChronologyItem({text,photo,podpis,mini}){
    return (
        <div className={s.divchik}>
            <p className={mini? s.pechikmini:s.pechik}>
                {
                    text
                }
            </p>
            {photo?<img src={photo} alt='photo' className={s.photochka}/>:<></>}
            <span className={s.spanchik}>
                {
                    podpis
                }
            </span>
        </div>
    )
}
export default ChronologyItem