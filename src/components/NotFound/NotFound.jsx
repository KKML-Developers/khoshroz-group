import { TbGhost2Filled } from "react-icons/tb";

import './notfound.scss';
const Notfound = () => {
    return (
        <section className='notfound'>
            <h1>4<span><TbGhost2Filled /></span>4</h1>
            <h2>Error: 404 page not found</h2>
            <p className="mb-4">Sorry, the page {"you're"} looking for cannot be accessed</p>
            <a href="/">Go back to homepage</a>
        </section>
    )
}

export default Notfound;