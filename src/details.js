import { SiReact,SiRedux,SiGithub,SiAndroidstudio,SiPostman,SiPython,SiCplusplus,SiVisualstudiocode,
    SiGit,SiCss3,SiMongodb,SiJavascript,SiExpress,SiNodedotjs,SiHtml5,SiJava,SiMysql,
    SiC,SiJsonwebtokens,SiMongoose,SiJetpackcompose,SiAndroid} from "react-icons/si";
import {FaJava} from "react-icons/fa6"
import {PiStackBold} from "react-icons/pi";
import {TbBrandReactNative,TbApi,TbBrandKotlin} from "react-icons/tb";

const Jyoti = {
    name: "Jyoti",
    profession: ["Full Stack Developer", "Native Android Developer", "React Native Developer"],
    skills: [
        {
            category: "MERN Stack",
            technology: [
                {
                    id: "ms-1",
                    name: "React",
                    logo: SiReact
                },
                {
                    id: "ms-2",
                    name: "HTML",
                    logo: SiHtml5
                },
                {
                    id: "ms-3",
                    name: "CSS",
                    logo: SiCss3
                },
                {
                    id: "ms-4",
                    name: "Redux",
                    logo: SiRedux
                },
                {
                    id: "ms-5",
                    name: "NodeJS",
                    logo: SiNodedotjs
                },
                {
                    id: "ms-6",
                    name: "ExpressJS",
                    logo: SiExpress
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
                    name: "Mongoose",
                    logo: SiMongoose
                }
            ]
        },
        {
            category: "Android",
            technology: [
                {
                    id: "a-1",
                    name: "JetPack Compose",
                    logo: SiJetpackcompose
                },
                {
                    id: "a-2",
                    name: "JetPack Libraries",
                    logo: SiAndroid
                },
                {
                    id: "a-3",
                    name: "Dagger-Hilt",
                    logo: SiAndroid
                },
                {
                    id: "a-4",
                    name: "Retrofit",
                    logo: TbApi
                },
                {
                    id: "a-5",
                    name: "Coil",
                    logo: PiStackBold
                },
                {
                    id: "a-6",
                    name: "React Native",
                    logo: TbBrandReactNative
                }
            ]
        },
        {
            category: "Programming Languages",
            technology: [
                {
                    id: "pl-1",
                    name: "C++",
                    logo: SiCplusplus
                },
                {
                    id: "pl-2",
                    name: "Java",
                    logo: FaJava
                },
                {
                    id: "pl-3",
                    name: "JavaScript",
                    logo: SiJavascript
                },
                {
                    id: "pl-4",
                    name: "Python",
                    logo: SiPython
                },
                {
                    id: "pl-5",
                    name: "Kotlin",
                    logo: TbBrandKotlin
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
                    name: "Android Studio",
                    logo: SiAndroidstudio
                },
                {
                    id: "dv-5",
                    name: "Postman",
                    logo: SiPostman
                },
                {
                    id: "dv-6",
                    name: "MongoDB",
                    logo: SiMongodb
                },
                {
                    id: "dv-7",
                    name: "MySQL",
                    logo: SiMysql
                }
            ]
        }
    ],
    Education: [
        {
            School: "Guru Jambeshwar University of Science and Technology",
            Degree: "BTech CSE",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Guru_Jambheshwar_University_of_Science_and_Technology_logo.png/220px-Guru_Jambheshwar_University_of_Science_and_Technology_logo.png",
            CGPA: "CGPA - 7.52",
            Duration: "August 2019 - June 2023"
        },
        {
            School: "Army Public School, Hisar",
            Degree: "12th",
            logo: "https://apshisar.com/downloads/nimages/LOGO%20JPEG.jpg",
            CGPA: "Percentage - 93.2",
            Duration: "April 2018 - March 2019"
        },
        {
            School: "Army Public School, Hisar",
            Degree: "10th",
            logo: "https://apshisar.com/downloads/nimages/LOGO%20JPEG.jpg",
            CGPA: "CGPA - 10",
            Duration: "April 2016 - March 2017"
        }
    ],
    Projects: [
        {
            id: 1,
            name: "Techtrova",
            source_code: "https://github.com/pjyotianwar/TechTrova",
            demo: "https://tech-trova-6uui.vercel.app",
            img: "img/techtrova.jpg",
            description: "Techtrova is a platform dedicated to offering a diverse range of electronic appliances. It integrates with the Stripe payment gateway."
        },
        {
            id: 2,
            name: "Chat Nova",
            source_code: "https://github.com/pjyotianwar/ChatNova",
            demo: "https://chat-nova-zeta.vercel.app",
            img: "img/chatnova.jpg",
            description: "Chat Nova is a versatile and user-friendly messaging application designed to bring people closer through seamless communication."
        },
        {
            id: 3,
            name: "Car Rental",
            source_code: "https://github.com/pjyotianwar/Car-Rental",
            demo: "https://car-rental-p1wz.vercel.app/login",
            img: "img/carrental.jpg",
            description: "Developed a web application for small rental companies, enabling end-to-end functionality including user authentication, booking management, and admin features"
        },
        // {
        //    id:4,
        //     name: "Time-Wise",
        //     link: "",
        //     img: "",
        //     description: "Inspiring users, it cultivates fluid goal tracking, and progress diagrams, culminating in a notable time effectiveness."
        // },
        // {
        //     id:5,
        //     name: "Book Digest",
        //     link: "",
        //     img: "",
        //     description: "Keep track of books read, share ratings and reviews with community."
        // },
        // {
        //     id:6,
        //     name: "Sky Cast",
        //     link: "",
        //     img: "",
        //     description: "Precise Android app displays daily weather using API data with 90% reliability in data representation."
        // }
    ]

}

export default Jyoti;
