import './benefit.scss'
const Benefit = ({ index, item, bgColor }) => {
    return (

        <div className="col-md-4 benefit" key={index}>
            <div className="benefit__card p-4 rounded">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default Benefit