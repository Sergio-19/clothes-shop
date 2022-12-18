
const InfoSection = ({title, text}) => {

    return(
        <div className = 'section__wrap'>
            <div className = 'section__title'>
                <span>{title || ''}</span>
            </div>
            <div className = 'section__text'>
                <p>{text || ''}</p>
            </div>

        </div>
    )
}

export default InfoSection