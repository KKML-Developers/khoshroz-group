
import Banner from "../Banner/Banner"
import Title from "../Title/Title"
import './career.scss'
import JobCard from '../JobCard/JobCard';
import Benefit from "../Benefit/Benefit";


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
    const join = [
        {
            title: 'Competitive Salary',
            description: 'We believe in rewarding great people and great work with the very best compensation packages. If you join yotech and shine, you will be paid exactly what you are worth and not a penny less.'
        },
        {
            title: 'Benefits Galore',
            description: 'We are working on a suite of unmatched benefits including healthcare, food, transportation, financial and social activities and all yotech employees play an active role in the development of company benefits.'
        },
        {
            title: 'Khoshroz TIP',
            description: 'Some of our most talented people (including the guy who designed this website) joined us via the Talent Investment Programme. Experience matters but who you are matters more. Join us via the TIP and your future is bright.'
        },
        {
            title: 'Your Development',
            description: 'We are building best in class development tools to help you grow personally and professionally.'
        },
        {
            title: 'Community',
            description: 'We come together or tune-in remotely to share our projects we\'ve completed or something we built.You\'ll usually find nestle coffee eating or lunch together. But, end of the month We called a group meeting to know more about yourself.'
        },
        {
            title: 'Work-Life Balance',
            description: 'At yotech, we demand really hard work. We also demand a good work-life balance. Our people are great because of the balance we insist on and we will continue to dedicate resources to helping yotech people achieve that.'
        },
    ]
    const benefits = [
        'Weekly 2 holidays', 'Salary Review: Yearly', 'Festival Bonus: 2 (Yearly)', '20 Workings Days paid Holiday', 'Work with an awesome, dynamic team and amazing products', 'Learning opportunity', 'Free Tea & Coffee every day', 'Free Lunch every day', 'Opportunity to Join our overseas office after 3 years of service'
    ]

    return (
        <section className="contact">
            <div className="container py-5 ">
                <div className="row align-items-stretch  gy-4">
                    <div className="col-lg-12">
                        <div className="mb-4">
                            <Banner />
                        </div>
                        <Title titleOuter={'Why'} titleInner={'Work with us?'} />
                        <p>There’s life at work and life outside of work. We want everyone to be healthy, travel often, get time to give back, and have the financial resources and support they need.</p>
                    </div>
                    {join.map((item, index) => (
                        <Benefit key={index} item={item} />
                    ))}
                    <div className="col-lg-12 mt-4">
                        <Title titleOuter={'Career @'} titleInner={'Khoshroz'} customClass={'mb-0'} />

                    </div>
                    {jobList.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                    <div className="col-lg-12 mt-4">
                        <div className="contact__compension">
                            <Title titleOuter={'Compension &'} titleInner={'Other Benefits'} />
                            <ul>
                                {benefits.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Career;