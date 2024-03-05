import './title.scss'
const Title = ({ titleOuter, titleInner }) => {
    return (
        <h2 className="section__title">
            {titleOuter} <span>{titleInner}</span>
        </h2>
    )
}

export default Title