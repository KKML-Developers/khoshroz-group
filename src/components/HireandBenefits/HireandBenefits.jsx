import Title from "../Title/Title"
import flexMode from "../../assets/img/flex-mode.png"
import remoteMode from "../../assets/img/remote-mode.png"

const HireandBenefits = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center">
                    <Title titleOuter={'How & Where'} titleInner={'We Work:'} />
                </div>
                <div className="row align-items-center g-3">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center align-items-center flex-column p-3">
                            <div className="p-3 m-2">
                                <img src={flexMode} alt="Flex Mode work" className="img-fluid" />
                            </div>
                            <div className="text-center">
                                <h3>Flex Mode</h3>
                                <p>Our most flexible and default option, flex mode means you’ll have a dedicated desk at our brand new HQ. Enjoy the perks of being in office and work from home two days a week.</p>
                                <span><i><b>* Some roles will still need to be Dhaka-based, flex mode roles.</b></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center align-items-center flex-column p-3">
                            <div className="p-3 m-2">
                                <img src={remoteMode} alt="Flex Mode work" className="img-fluid" />
                            </div>
                            <div className="text-center">
                                <h3>Remote Mode</h3>
                                <p>Built In’s focus is to unite tech talent and the tech industry - nationally, locally, and remotely. Today, many of our jobs are now posted as fully remote and we invite you to join our diverse, national team.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default HireandBenefits