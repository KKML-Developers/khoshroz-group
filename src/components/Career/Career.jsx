
import Banner from "../Banner/Banner"
import Title from "../Title/Title"
import './career.scss'
import JobCard from '../JobCard/JobCard';
import Benefit from "../Benefit/Benefit";


const Career = () => {



    const jobList = [
        // {
        //     title: 'Software Engineer',
        //     type: 'Full-time',
        //     location: 'Dhaka, Bangladesh',
        //     role: 'Backend Developer',
        //     position: 'As a Software Engineer (Back-End) at Khoshroz, you will play a pivotal role in designing, implementing, and maintaining robust and scalable server-side applications and APIs. Working closely with our cross-functional team of developers, designers, and product managers, you will contribute to the development of cutting-edge solutions that power our platforms and services. Your expertise in back-end technologies and software engineering principles will be essential in ensuring the reliability, security, and performance of our systems.',
        //     responsibility: ["Collaborate with team members to design, develop, and deploy server-side applications and APIs.",
        //         "Write clean, efficient, and maintainable code using programming languages such as Python, Java, or Node.js.",
        //         "Design and optimize database schemas, queries, and data models for maximum efficiency and scalability.",
        //         "Implement security best practices to protect against common vulnerabilities and ensure data integrity and confidentiality.",
        //         "Work closely with front-end developers to integrate back-end functionalities seamlessly into web and mobile applications.",
        //         "Conduct thorough testing and debugging to identify and resolve issues in a timely manner.",
        //         "Stay updated on emerging technologies and trends in back-end development and contribute to continuous improvement initiatives."],
        //     qualifications: [
        //         "Bachelor's degree in Computer Science, Engineering, or related field (or equivalent work experience).",
        //         "Proven experience as a Software Engineer or similar role, with a strong portfolio showcasing your back-end development projects.",
        //         "Proficiency in one or more programming languages commonly used for back-end development (e.g., Python, Java, Node.js).",
        //         "Solid understanding of data structures, algorithms, and object-oriented design principles.",
        //         "Experience with relational and/or non-relational databases (e.g., SQL, MongoDB, PostgreSQL).",
        //         "Familiarity with web development frameworks and technologies (e.g., Flask, Django, Spring Boot).",
        //         "Strong problem-solving skills and attention to detail.",
        //         "Excellent communication and collaboration skills, with the ability to work effectively in a team environment."
        //     ],
        //     qualifications2: [
        //         "Experience with cloud platforms and services (e.g., AWS, Azure, Google Cloud Platform).",
        //         "Knowledge of containerization and orchestration technologies (e.g., Docker, Kubernetes).",
        //         "Familiarity with RESTful API design principles and microservices architecture.",
        //         "Experience with version control systems such as Git and familiarity with Agile development methodologies.",
        //         "Understanding of DevOps practices and tools for continuous integration and deployment."
        //     ],
        //     applyButton: 'Apply Now',
        //     applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfq20a2sw7zatYE1WK_55xRj547xAlURvsD0qhmU5fa0V3KEw/viewform'
        // },
        // {
        //     title: 'Software Engineer (Front-end)',
        //     type: 'Full-time',
        //     location: 'Dhaka, Bangladesh',
        //     role: 'Front-end Developer',
        //     position: 'As a Software Engineer (Back-End) at Khoshroz, you will play a pivotal role in designing, implementing, and maintaining robust and scalable server-side applications and APIs. Working closely with our cross-functional team of developers, designers, and product managers, you will contribute to the development of cutting-edge solutions that power our platforms and services. Your expertise in back-end technologies and software engineering principles will be essential in ensuring the reliability, security, and performance of our systems.',
        //     responsibility: ["Collaborate with team members to design, develop, and deploy server-side applications and APIs.",
        //         "Write clean, efficient, and maintainable code using programming languages such as Python, Java, or Node.js.",
        //         "Design and optimize database schemas, queries, and data models for maximum efficiency and scalability.",
        //         "Implement security best practices to protect against common vulnerabilities and ensure data integrity and confidentiality.",
        //         "Work closely with front-end developers to integrate back-end functionalities seamlessly into web and mobile applications.",
        //         "Conduct thorough testing and debugging to identify and resolve issues in a timely manner.",
        //         "Stay updated on emerging technologies and trends in back-end development and contribute to continuous improvement initiatives."],
        //     qualifications: [
        //         "Bachelor's degree in Computer Science, Engineering, or related field (or equivalent work experience).",
        //         "Proven experience as a Software Engineer or similar role, with a strong portfolio showcasing your back-end development projects.",
        //         "Proficiency in one or more programming languages commonly used for back-end development (e.g., Python, Java, Node.js).",
        //         "Solid understanding of data structures, algorithms, and object-oriented design principles.",
        //         "Experience with relational and/or non-relational databases (e.g., SQL, MongoDB, PostgreSQL).",
        //         "Familiarity with web development frameworks and technologies (e.g., Flask, Django, Spring Boot).",
        //         "Strong problem-solving skills and attention to detail.",
        //         "Excellent communication and collaboration skills, with the ability to work effectively in a team environment."
        //     ],
        //     qualifications2: [
        //         "Experience with cloud platforms and services (e.g., AWS, Azure, Google Cloud Platform).",
        //         "Knowledge of containerization and orchestration technologies (e.g., Docker, Kubernetes).",
        //         "Familiarity with RESTful API design principles and microservices architecture.",
        //         "Experience with version control systems such as Git and familiarity with Agile development methodologies.",
        //         "Understanding of DevOps practices and tools for continuous integration and deployment."
        //     ],
        //     applyButton: 'Apply Now',
        //     applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfq20a2sw7zatYE1WK_55xRj547xAlURvsD0qhmU5fa0V3KEw/viewform'
        // },
        // {
        //     title: 'Digital Marketing Manager',
        //     type: 'Full-time',
        //     location: 'Dhaka, Bangladesh',
        //     role: 'Search Engine Optimization',
        //     position: 'As a Software Engineer (Back-End) at Khoshroz, you will play a pivotal role in designing, implementing, and maintaining robust and scalable server-side applications and APIs. Working closely with our cross-functional team of developers, designers, and product managers, you will contribute to the development of cutting-edge solutions that power our platforms and services. Your expertise in back-end technologies and software engineering principles will be essential in ensuring the reliability, security, and performance of our systems.',
        //     responsibility: ["Collaborate with team members to design, develop, and deploy server-side applications and APIs.",
        //         "Write clean, efficient, and maintainable code using programming languages such as Python, Java, or Node.js.",
        //         "Design and optimize database schemas, queries, and data models for maximum efficiency and scalability.",
        //         "Implement security best practices to protect against common vulnerabilities and ensure data integrity and confidentiality.",
        //         "Work closely with front-end developers to integrate back-end functionalities seamlessly into web and mobile applications.",
        //         "Conduct thorough testing and debugging to identify and resolve issues in a timely manner.",
        //         "Stay updated on emerging technologies and trends in back-end development and contribute to continuous improvement initiatives."],
        //     qualifications: [
        //         "Bachelor's degree in Computer Science, Engineering, or related field (or equivalent work experience).",
        //         "Proven experience as a Software Engineer or similar role, with a strong portfolio showcasing your back-end development projects.",
        //         "Proficiency in one or more programming languages commonly used for back-end development (e.g., Python, Java, Node.js).",
        //         "Solid understanding of data structures, algorithms, and object-oriented design principles.",
        //         "Experience with relational and/or non-relational databases (e.g., SQL, MongoDB, PostgreSQL).",
        //         "Familiarity with web development frameworks and technologies (e.g., Flask, Django, Spring Boot).",
        //         "Strong problem-solving skills and attention to detail.",
        //         "Excellent communication and collaboration skills, with the ability to work effectively in a team environment."
        //     ],
        //     qualifications2: [
        //         "Experience with cloud platforms and services (e.g., AWS, Azure, Google Cloud Platform).",
        //         "Knowledge of containerization and orchestration technologies (e.g., Docker, Kubernetes).",
        //         "Familiarity with RESTful API design principles and microservices architecture.",
        //         "Experience with version control systems such as Git and familiarity with Agile development methodologies.",
        //         "Understanding of DevOps practices and tools for continuous integration and deployment."
        //     ],
        //     applyButton: 'Apply Now',
        //     applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfq20a2sw7zatYE1WK_55xRj547xAlURvsD0qhmU5fa0V3KEw/viewform'
        // },
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
                <div className="row align-items-stretch gy-4">
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
                    {jobList[0] ? jobList.map((job, index) => (
                        <JobCard key={index} job={job} />
                    )) : <><h3 className="fw-bold text-danger">Unfortunately there is no opening available right now.😒</h3> <h4>BUT, You can still drop your resume to <a className="h4 text-success" href="mailto:career@khoshrozltd.com">career@khoshrozltd.com</a></h4></>}
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