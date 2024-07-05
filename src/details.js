import {
    SiReact, SiRedux, SiGithub, SiPostman, SiPython, SiCplusplus, SiVisualstudiocode,
    SiGit, SiCss3, SiMongodb, SiJavascript, SiExpress, SiNodedotjs, SiHtml5, SiNpm, SiMysql,
    SiC, SiJsonwebtokens, SiMongoose, SiJupyter
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
                    name: "JavaScript",
                    logo: SiJavascript
                },
                {
                    id: "pl-4",
                    name: "HTML",
                    logo: SiHtml5
                },
                {
                    id: "pl-5",
                    name: "Java",
                    logo: FaJava
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
            name: "BookRaze",
            source_code: "https://github.com/Sarita-021/e-Book-Store",
            demo: "https://e-book-store-bsk3.vercel.app/",
            img: "img/BookRaze.png",
            description: "BookRaze is a platform dedicated to offering a diverse range of books. It provides various features to users like : Search, filter, forgot password, cart."
        },
        {
            id: 2,
            name: "GreenGenie",
            source_code: "https://github.com/Sarita-021/GreenGenie",
            demo: "",
            img: "img/GreenGenie.png",
            description: "GreenGenie is a versatile and user-friendly application that is designed to facilitates Fashion industry waste reduction."
        },
        {
            id: 3,
            name: "Music Player",
            source_code: "https://github.com/Sarita-021/music_player",
            demo: "",
            img: "img/Musicplayer.png",
            description: "Developed a online music player that allows user to play music. Used React to build the website providing basic functionalities a music player should have."
        },
        {
            id: 4,
            name: "Daily DSA practice",
            link: "https://github.com/Sarita-021/Striver-A2Z-DSA-Sheet",
            img: "img/Dsa.png",
            description: "Repo containing my daily DSA practice in Python. I upload my daily DSA practice problemes I have solved with solutions I have proposed."
        },
        {
            id: 5,
            name: "Weather Web",
            link: "https://github.com/Sarita-021/WeatherWeb",
            img: "img/Weather.png",
            description: "Online Weather check platform where we can check city based weather update with interactive UI. Used Weather API to get real time weather updates."
        },
        {
            id: 6,
            name: "Certificate Sender via Mail",
            link: "https://github.com/Sarita-021/MLSA-Cert-Sender-via-mail",
            img: "img/Mailsender.png",
            description: "This repo send certificate to participants of MLSA event on their Email Id's. Further, this repo can be futher modified according to your needs."
        },
        {
            id: 7,
            name: "MLSA Certificate Generator",
            link: "https://github.com/Sarita-021/MLSA-Certificate-Generator",
            img: "img/CertificateGen.png",
            description: "This repo generate certificate of the participants of MLSA event. Further, this repo can be futher modified according to the needs of the user."
        },
        {
            id: 8,
            name: "Blog Website",
            link: "https://github.com/Sarita-021/blogProject",
            img: "img/Blog.png",
            description: "This project is a dynamic web application for creating and managing a personal blog. It provides an intuitive interface for users to write, edit, and publish their blog posts."
        }
    ]

}

export default Sarita;
