import './jobCard.scss';
import useModal from "../../hooks/useModal";

const JobCard = ({ job }) => {

    const { isModalOpen, isClosing, handleOpenModal, handleCloseModal } = useModal();

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="card text-center">
                <div className="card-body p-2 py-5">
                    <h5 className="card-title my-2">{job.title}</h5>
                    <p className="card-text my-2 job-type-color">{job.type}</p>
                    {/* Button to open the modal */}
                    <button onClick={handleOpenModal} className="primary__btn my-2">View Details</button>
                    <div className="mt-3"><small className="text-danger"><b>Apply with in</b></small> <br />24 April 2024</div>

                    {/* Modal */}
                    {isModalOpen && (
                        <>
                            <div className="modal__overlay" onClick={handleCloseModal}></div>
                            {/* Modal content */}
                            <div className={`modal__content ${isClosing ? 'closing' : ''}`}>
                                <div className="modal__header border-bottom d-flex align-items-center justify-content-between pb-3">
                                    <h3 className="fw-bold">{job.title}</h3>
                                    <button className="btn close" onClick={handleCloseModal}>&times;</button>
                                </div>
                                <div className="modal__body">
                                    <p><strong className="fw-semibold">Type:</strong> {job.type}</p>
                                    <p><strong className="fw-semibold">Role:</strong> {job.role}</p>

                                </div>
                                <div className="my-3">
                                    <h4 className="fw-bold my-2">About the Job</h4>
                                    <p><strong className="fw-semibold">About Company:</strong> {job.description.general}</p>
                                    <p><strong className="fw-semibold">Job Description:</strong> {job.description.about}</p>
                                    <p><strong className="fw-semibold">Job Responsibility:</strong> {job.description.responsibility}</p>
                                </div>
                                <a href="https://forms.gle/TfiahASTwBa4DxMfA" target="_blank" className="primary__btn my-2" rel="noreferrer" >Apply</a>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
};

export default JobCard;
