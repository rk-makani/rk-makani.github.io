import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'IoT based irrigation monitoring and control system',
        projectDesc: 'Low-power NodeMCU and Arduino network with soil sensors for smart irrigation control, integrating IoT and weather-based automation.',
        tags: ['C/C++', 'IoT', 'Embedded Systems', 'Arduino', 'Sensors', 'Automation'],
        code: '', // Upload GitHub repo and link with PPT and architecture
        demo: 'https://youtu.be/i4SxJ4ppv1w?si=qAJN9uf3RJyLUUrg',
        image: one
    },
    {
        id: 2,
        projectName: 'IoT based Household Floor Cleaning Robot',
        projectDesc: 'Autonomous cleaning robot with Bellman–Ford path optimization, IoT integration, and real-time cleaned area mapping via ThingSpeak.',
        tags: ['C/C++', 'Robotics', 'IoT', 'Path Planning', 'Thingspeak'],
        code: '', // Upload GitHub repo and link with PPT and architecture
        demo: '', // Upload video
        image: two
    },
    {
        id: 3,
        projectName: 'IoT based airways emergency services for medical assistance',
        projectDesc: 'Drone-based defibrillator delivery system with real-time location routing, ranked 4th in CISCO IoT Hackathon 2018.',
        tags: ['C/C++', 'IoT', 'Robotics', 'Hackathon', 'Project Management', 'Public Speaking'],
        code: '', //  TODO: upload GitHub repo and link with PPT and architecture
        demo: '', // TODO: add picture
        image: three
    },
    {
        id: 4,
        projectName: 'Brain waves actuated real time processes',
        projectDesc: 'EEG-based brainwave classification in LabVIEW to control real-time home automation tasks.',
        tags: ['Control Systems', 'Embedded Systems', 'LabVIEW', 'Signal Processing'],
        code: '', //  TODO: upload GitHub repo and link with PPT and architecture
        demo: 'https://youtu.be/R4t39mliZ3U?si=57OL2gAHFvyN_14a',
        image: four
    },
    {
        id: 5,
        projectName: 'Development of PID control based Self Balancing Robot',
        projectDesc: 'Two-wheeled self-balancing robot using PID control, sensor fusion, and LabVIEW for real-time stabilization.',
        tags: ['LabVIEW', 'Control Systems', 'Robotics', 'Sensor Fusion', 'Embedded Systems'],
        code: 'http://rvjsteam.rvce.edu.in/pdf/02/05.pdf',
        demo: '', // TODO: add video and repo with PPT and architecture
        image: five
    },
    {
        id: 6,
        projectName: 'Race Against The Machine',
        projectDesc: 'Teleoperated vs autonomous vehicle race with 5G control, SLAM navigation, and V2X communication.',
        tags: ['C/C++', 'ROS', '5G Communication', 'V2X Communication', 'Robotics', 'SLAM', 'Teleoperation'],
        code: '', // TODO: add poster picture
        demo: '', // TODO: add video
        image: six
    },
    {
        id: 7,
        projectName: 'Novel Trust Framework for Humanoid Trust Behaviour in Multi-Robot Systems',
        projectDesc: 'Mathematical trust model for optimal task allocation in multi-robot systems, achieving 100% efficiency in simulation.',
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
// Leave it blank instead