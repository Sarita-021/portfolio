import {
    SiReact, SiRedux, SiGithub, SiPostman, SiPython, SiCplusplus, SiVisualstudiocode,
    SiGit, SiCss3, SiMongodb, SiJavascript, SiExpress, SiNodedotjs, SiHtml5, SiNpm, SiMysql,
    SiC, SiJsonwebtokens, SiMongoose, SiJupyter, SiGooglecolab, SiTailwindcss
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

const Sarita = {
    name: "Sarita",
    profession: ["MERN Stack Developer", "Machine Learning Enthusiast"],
    skills: [
        {
            category: "MERN Stack",
            technology: [
                {
                    id: "ms-1",
                    name: "Mongoose",
                    logo: SiMongoose
                },
                {
                    id: "ms-2",
                    name: "ExpressJS",
                    logo: SiExpress
                },
                {
                    id: "ms-3",
                    name: "React",
                    logo: SiReact
                },
                {
                    id: "ms-4",
                    name: "NodeJS",
                    logo: SiNodedotjs
                },
                {
                    id: "ms-5",
                    name: "CSS",
                    logo: SiCss3
                },
                {
                    id: "ms-6",
                    name: "Redux",
                    logo: SiRedux
                },
                {
                    id: "ms-7",
                    name: "RestAPI",
                    logo: TbApi
                },
                {
                    id: "ms-8",
                    name: "JWT",
                    logo: SiJsonwebtokens
                },
                {
                    id: "ms-9",
                    name: "Tailwind CSS",
                    logo: SiTailwindcss
                },
            ]
        },
        {
            category: "Programming Languages",
            technology: [
                {
                    id: "pl-1",
                    name: "Python",
                    logo: SiPython
                },
                {
                    id: "pl-2",
                    name: "C++",
                    logo: SiCplusplus
                },
                {
                    id: "pl-3",
                    name: "Java",
                    logo: FaJava
                },
                {
                    id: "pl-4",
                    name: "JavaScript",
                    logo: SiJavascript
                },
                {
                    id: "pl-5",
                    name: "HTML",
                    logo: SiHtml5
                },
                {
                    id: "pl-6",
                    name: "C",
                    logo: SiC
                }
            ]
        },
        {
            category: "Dev Tools",
            technology: [
                {
                    id: "dv-1",
                    name: "VS Code",
                    logo: SiVisualstudiocode
                },
                {
                    id: "dv-2",
                    name: "Git",
                    logo: SiGit
                },
                {
                    id: "dv-3",
                    name: "GitHub",
                    logo: SiGithub
                },
                {
                    id: "dv-4",
                    name: "Postman",
                    logo: SiPostman
                },
                {
                    id: "dv-5",
                    name: "MongoDB",
                    logo: SiMongodb
                },
                {
                    id: "dv-6",
                    name: "MySQL",
                    logo: SiMysql
                },
                {
                    id: "dv-7",
                    name: "NPM",
                    logo: SiNpm
                },
                {
                    id: "dv-8",
                    name: "Jupyter",
                    logo: SiJupyter
                },
                {
                    id: "dv-9",
                    name: "Google Colab",
                    logo: SiGooglecolab
                }
            ]
        }
    ],
    Education: [
        {
            School: "Guru Jambeshwar University of Science and Technology",
            Degree: "BTech CSE AI & ML",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Guru_Jambheshwar_University_of_Science_and_Technology_logo.png/220px-Guru_Jambheshwar_University_of_Science_and_Technology_logo.png",
            CGPA: "CGPA - 8.03",
            Duration: "August 2022 - June 2026"
        },
        {
            School: "Kendriya Vidyalaya Hisar Cantt.",
            Degree: "12th",
            logo: "https://i.pinimg.com/736x/5a/4e/f9/5a4ef9b9d7806da10afb1e9b3efdb22d.jpg",
            CGPA: "Percentage - 93.6",
            Duration: "April 2021 - March 2022"
        },
        {
            School: "Kendriya Vidyalaya Hisar Cantt.",
            Degree: "10th",
            logo: "https://i.pinimg.com/736x/5a/4e/f9/5a4ef9b9d7806da10afb1e9b3efdb22d.jpg",
            CGPA: "Percentage - 93.6",
            Duration: "April 2019 - March 2020"
        }
    ],
    Projects: [
        {
            id: 1,
            title: "BookRaze",
            glink: "https://github.com/Sarita-021/e-Book-Store",
            demoLink: "https://e-book-store-bsk3.vercel.app/",
            img: "img/p1.png",
            description: "BookRaze is a platform dedicated to offering a diverse range of books. It provides various features to users like : Search, filter, forgot password, cart."
        },
        {
            id: 2,
            title: "GreenGenie",
            glink: "https://github.com/Sarita-021/GreenGenie",
            demoLink: "",
            img: "img/p2.png",
            description: "GreenGenie is a versatile and user-friendly application that is designed to facilitates Fashion industry waste reduction."
        },
        {
            id: 3,
            title: "Daily DSA practice",
            glink: "https://github.com/Sarita-021/Striver-A2Z-DSA-Sheet",
            demoLink: "",
            img: "img/p4.png",
            description: "Repo containing my daily DSA practice in Python. I upload my daily DSA practice problemes I have solved with solutions I have proposed."
        },
        {
            id: 4,
            title: "Weather Web",
            glink: "https://github.com/Sarita-021/WeatherWeb",
            demoLink: "",
            img: "img/p5.png",
            description: "Online Weather check platform where we can check city based weather update with interactive UI. Used Weather API to get real time weather updates."
        },
        {
            id: 5,
            title: "Certificate Sender via Mail",
            glink: "https://github.com/Sarita-021/MLSA-Cert-Sender-via-mail",
            demoLink: "",
            img: "img/p6.png",
            description: "This repo send certificate to participants of MLSA event on their Email Id's. Further, this repo can be futher modified according to your needs."
        },
        {
            id: 6,
            title: "Certificate Generator",
            glink: "https://github.com/Sarita-021/MLSA-Certificate-Generator",
            demoLink: "",
            img: "img/p7.png",
            description: "This repo generate certificate of the participants of MLSA event. Further, this repo can be futher modified according to the needs of the user."
        },
        {
            id: 7,
            title: "Blog Website",
            glink: "https://github.com/Sarita-021/blogProject",
            demoLink: "",
            img: "img/p8.png",
            description: "This project is a dynamic web application for creating and managing a personal blog. It provides an intuitive interface for users to write, edit, and publish their blog posts."
        }
    ],
    Experiences: [
        {
            organisation: "JGEC Winter of Code'23",
            logo: "img/jwoc.webp",
            positions: [
                {
                    title: "Mentor",
                    duration: "February 2025 - March 2025",
                    content: [
                        {
                            text: "Mentored over 500+ mentees at JGEC Winter of Code on open source contribution best practices. Reviewed 50+ pull requests, provided feedback, and ensured adherence to project guidelines.",
                        },
                    ],
                },
            ],
        },
        {
            organisation: "GirlScript Summer of Code'24",
            logo: "img/gssoc.png",
            positions: [
                {
                    title: "Open Source Contributor",
                    duration: "October 2023 - November 2023",
                    content: [
                        {
                            text: "Submitted 20+ pull requests, fixing bugs, adding features, and improving documentation.",
                        },
                    ],
                },
            ],
        },
        {
            organisation: "GirlScript Summer of Code'23",
            logo: "img/gssoc.png",
            positions: [
                {
                    title: "Mentee",
                    duration: "May 2023 - August 2023",
                    content: [
                        {
                            text: "Contributed to various open source projects, and secured rank among top 200 contributors.",
                        },
                    ],
                },
            ],
        },
        {
            organisation: "JGEC Winter of Code'23",
            logo: "img/jwoc.webp",
            positions: [
                {
                    title: "Mentee",
                    duration: "February 2023 - March 2023",
                    content: [
                        {
                            text: "Contributed to various open source projects, and secured rank among top 50 contributors.",
                        },
                    ],
                },
            ],
        }
    ]

}

export default Sarita;
