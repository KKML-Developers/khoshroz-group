
import Banner from "../Banner/Banner"
import Title from "../Title/Title"
import './career.scss'
import JobCard from '../JobCard/JobCard';
import HireandBenefits from "../HireandBenefits/HireandBenefits";


const Career = () => {

    const jobList = [
        {
            title: 'Software Engineer',
            type: 'Full-time',
            role: 'Backend Developer',
            description: {
                general: 'Develop and maintain server-side logic, definition, and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end.',
                about: 'Join our dynamic team of software engineers working on cutting-edge technologies. We value innovation and collaboration.',
                responsibility: 'Design, implement, and maintain scalable and reliable backend systems. Collaborate with cross-functional teams to define, design, and ship new features.',
            },
            applyButton: 'Apply Now',
        },
        {
            title: 'Graphic Designer',
            type: 'Part-time',
            role: 'Visual Designer',
            description: {
                general: 'Create visual concepts to communicate ideas that inspire, inform, and captivate consumers. Develop the overall layout and production design for various applications such as advertisements, brochures, magazines, and corporate reports.',
                about: 'Join our creative design team and contribute to visually appealing and effective design solutions. We encourage artistic expression and originality.',
                responsibility: 'Create and design graphics for various projects. Collaborate with clients and team members to understand project requirements and deliver high-quality designs.',
            },
            applyButton: 'Apply Now',
        },
        {
            title: 'Marketing Specialist',
            type: 'Contract',
            role: 'Digital Marketing',
            description: {
                general: 'Plan and execute marketing campaigns, analyze market trends and competitors, and collaborate with cross-functional teams to create engaging content for online platforms.',
                about: 'Join our marketing team and contribute to the growth and success of our brand. We value creativity and strategic thinking in digital marketing.',
                responsibility: 'Develop and execute digital marketing strategies. Create and optimize content for online platforms, analyze data to measure campaign success, and stay updated on industry trends.',
            },
            applyButton: 'Apply Now',
        },
        {
            title: 'Motion Graphic',
            type: 'Contract',
            role: 'Video Production',
            description: {
                general: 'Plan and execute marketing campaigns, analyze market trends and competitors, and collaborate with cross-functional teams to create engaging content for online platforms.',
                about: 'Join our marketing team and contribute to the growth and success of our brand. We value creativity and strategic thinking in digital marketing.',
                responsibility: 'Develop and execute digital marketing strategies. Create and optimize content for online platforms, analyze data to measure campaign success, and stay updated on industry trends.',
            },
            applyButton: 'Apply Now',
        },
        // Add more job objects as needed
    ];


    return (
        <section className="contact">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-4">
                            <Banner />
                        </div>
                        <div className="mb-4">
                            <HireandBenefits />
                        </div>
                        <div className="text-center">
                            <Title titleOuter={'Career at'} titleInner={'Khoshroz'} />
                        </div>
                    </div>
                    {jobList.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Career;