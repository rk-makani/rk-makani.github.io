import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Internet of Things (IoT) based irrigation monitoring and control system for rural areas',
        projectDesc: 'Development of reliable and realistic irrigation monitoring and control system due to power shortage in rural areas and frequent power blackouts in India. Realised using low powered NodeMCU and Arduino alongwith soil moisture sensors placed strategically in the field and forming a network. Further controlling the motor pump using IoT in conjuncture with smart decision making using weather analysis.',
        tags: ['C/C++', 'IoT', 'Embedded Systems', 'Arduino', 'Sensors', 'Automation'],
        code: '', // Upload GitHub repo and link with PPT and architecture
        demo: 'https://youtu.be/i4SxJ4ppv1w?si=qAJN9uf3RJyLUUrg',
        image: one
    },
    {
        id: 2,
        projectName: 'Design and Development of Household Floor Cleaning Robot',
        projectDesc: 'Design of chassis for the floor cleaning robot and the implementation of coordinate mapping using motor encoders of the cleaned area. Realized an optimized manner of cleaning the floor using Bellman–Ford algorithm. Enabled Internet of Things (IoT) and displayed the cleaned region on a map with the use of ThingSpeak IoT platform.',
        tags: ['C/C++', 'Robotics', 'IoT', 'Path Planning', 'Thingspeak'],
        code: '', // Upload GitHub repo and link with PPT and architecture
        demo: '', // Upload video
        image: two
    },
    {
        id: 3,
        projectName: 'Internet of Things based airways emergency services for medical assistance',
        projectDesc: 'Project won 4th place in CISCO IoT Hackathon 2018 held in Bangalore. Development of drone equipped defibrillator to reach the emergency location which was routed using the real time location on Google maps which is tracked on a mobile application app.',
        tags: ['C/C++', 'IoT', 'Robotics', 'Hackathon', 'Project Management', 'Public Speaking'],
        code: '', //  TODO: upload GitHub repo and link with PPT and architecture
        demo: '', // TODO: add picture
        image: three
    },
    {
        id: 4,
        projectName: 'LabVIEW based simulation of brain waves actuated real time processes',
        projectDesc: 'Built an EEG signal processing system in LabVIEW to classify Alpha, Beta, Theta, and Delta brainwaves, integrating microcontroller based real-time control for home automation tasks like switching lights.',
        tags: ['Control Systems', 'Embedded Systems', 'LabVIEW', 'Signal Processing'],
        code: '', //  TODO: upload GitHub repo and link with PPT and architecture
        demo: 'https://youtu.be/R4t39mliZ3U?si=57OL2gAHFvyN_14a',
        image: four
    },
    {
        id: 5,
        projectName: 'Bachelor\'s Thesis \: Development of PID control based Self Balancing Robot',
        projectDesc: 'Developed a feedback control system for balancing a two wheeled robot vertically using NI LabVIEW and NI myRIO board. Designed a complementary filter for fusion of gyroscope and accelerometer data in order to achieve high accuracy tilt-angle measurement to be used as negative feedback. PID control algorithm tuned using Ziegler–Nichols method was used for controlling the duty cycle of PWM signal being given to the wheel motors to produce a balancing action. Implemented a sensor fusion model using a complementary filter combining gyroscope and accelerometer data. Awarded the highest achievable grade of 10.0 (Indian grading system).',
        tags: ['LabVIEW', 'Control Systems', 'Robotics', 'Sensor Fusion', 'Embedded Systems'],
        code: 'http://rvjsteam.rvce.edu.in/pdf/02/05.pdf',
        demo: '', // TODO: add video and repo with PPT and architecture
        image: five
    },
    {
        id: 6,
        projectName: 'Master\'s Project \: Race Against The Machine',
        projectDesc: 'Developed a racing scenario between a teleoperated vehicle and an autonomous vehicle. Established robust Teleoperated Driving over a 5G network. Implemented SLAM using Google Cartographer with Pure Pursuit control for autonomous navigation. Designed and Developed V2V and V2I communication using Cooperative Awareness Messages (CAM). Built a Digital Twin UI to show live vehicle positions on a map.',
        tags: ['C/C++', 'ROS', '5G Communication', 'V2X Communication', 'Robotics', 'SLAM', 'Teleoperation'],
        code: '', // TODO: add poster picture
        demo: '', // TODO: add video
        image: six
    },
    {
        id: 7,
        projectName: 'Master’s Thesis \: Design and Development of a Novel Trust Framework for Humanoid Trust Behaviour in Multi-Robot Systems',
        projectDesc: 'Developed a mathematical model to quantify the trustworthiness of each robot in a Multi-Robot System (MRS) based on its inherent features, such as capabilities. Designed and developed a trust model that updates the robot’s capabilities based on the outcomes of allocated tasks to the robots and evaluated the proposed novel trust framework against metrics such as trust convergence. Achieved 100% task allocation using the trust framework in a Python (using numpy, libraries) based simulation for a given mathematical distribution of incoming tasks to the MRS. Awarded Best Thesis with the highest possible grade of 1.0 (German grading system).',
        tags: ['Python', 'Robotics', 'Research', 'Multi-Robot Systems', 'Trust Framework', 'Simulation'],
        code: '', // TODO: add repo with PPT and architecture
        demo: '', // TODO: add results and Graduation picture
        image: seven
    },
    // {
    //     id: 8,
    //     projectName: '',
    //     projectDesc: '',
    //     tags: ['', ''],
    //     code: '',
    //     demo: '',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/