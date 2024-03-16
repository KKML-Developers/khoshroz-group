import { useState } from "react";
import './jobCard.scss';

const JobCard = ({ job }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log(isModalOpen)
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card text-center mb-3">
                <div className="card-body p-2 py-5">
                    <h5 className="card-title my-2">{job.title}</h5>
                    <p className="card-text my-2 job-type-color">{job.type}</p>
                    {/* Button to open the modal */}
                    <button onClick={handleOpenModal} className="primary__btn my-2">View Details</button>
                    <div className="mt-3"><small className="text-danger"><b>Apply with in</b></small> <br />24 April 2024</div>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="modal">
                            {/* Modal content */}
                            <div className="modal-content">
                                <span className="close" onClick={handleCloseModal}>&times;</span>
                                <h3 className="fw-bold">{job.title}</h3>
                                <hr />
                                <p><strong className="fw-semibold">Type:</strong> {job.type}</p>
                                <p><strong className="fw-semibold">Role:</strong> {job.role}</p>
                                <div className="my-3">
                                    <h4 className="fw-bold my-2">About the Job</h4>
                                    <p><strong className="fw-semibold">About Company:</strong> {job.description.general}</p>
                                    <p><strong className="fw-semibold">Job Description:</strong> {job.description.about}</p>
                                    <p><strong className="fw-semibold">Job Responsibility:</strong> {job.description.responsibility}</p>
                                </div>
                                <a href="https://forms.gle/TfiahASTwBa4DxMfA" target="/_blank" className="primary__btn my-2" >Apply</a>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobCard