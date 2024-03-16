import './title.scss'
const Title = ({ titleOuter, titleInner, customClass }) => {
    return (
        <h2 className={"section__title" + " " + customClass}>
            {titleOuter} <span>{titleInner}</span>
        </h2>
    )
}

export default Title