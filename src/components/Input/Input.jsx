/* eslint-disable react/prop-types */
import './input.scss';

const Input = ({ label, type, name, placeholder, pattern }) => {
    return (
        <div className="form-group mb-3">
            <label>{label}</label>
            <input className="form-control" pattern={pattern} type={type} name={name} placeholder={placeholder} required />
        </div>
    )
}

export default Input