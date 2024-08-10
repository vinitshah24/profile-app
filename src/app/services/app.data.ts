export const configuration = {
    header: {
        logo: "assets/images/logo.png",
    },
    home: {
        shapes: {
            shape1: "assets/images/banner/shape/shape-1.png",
            shape2: "assets/images/banner/shape/shape-2.png",
            shape3: "assets/images/banner/shape/shape-3.png",
            shape4: "assets/images/banner/shape/shape-4.png",
            shape5: "assets/images/banner/shape/shape-5.png",
            shape6: "assets/images/banner/shape/shape-6.png",
        },
        username: "Vinit Shah",
        description: "A Freelance Full Stack Developer",
        image: "assets/images/banner/profile.jpg",
        socialLinks: {
            facebook: "https://www.facebook.com/vinit.shah02/",
            twitter: "https://x.com/vinnitshah",
            linkedin: "https://linkedin.com/in/vinitshah24"
        }
    },
    about: {
        heading: "About Me",
        description: "",
        title: "Hi There! I'm Vinit Shah",
        info: `
            More than 5+ years of strong experience working on Apache Hadoop ecosystem. Good understanding of Hadoop
            architecture and various Big Data technologies such as Hadoop, MapReduce, HDFS, Yarn, Hive, Spark, Sqoop,
            Kafka, Oozie, etc.
            Hands-on experience with Cloudera Hadoop Distribution (CDH), and Cloudera Data Platform (CDP).
            Worked closely with data platform teams to solve business and platform challenges utilizing structured,
            semi-structured, and unstructured data in a distributed processing environment.
            Expertise in testing, supporting and managing different flavors of Cloudera Hadoop distributions.
            Highly motivated team player with excellent communication and problem-solving skills. Proficient at
            mastering new technologies with a keen interest in researching and learning new industry developments and
            cloud technologies.`,
        email: "shahvinit2244@gmail.com",
        phone: "+1-980-837-2220",
        skills: [
            {
                name: "Python",
                percentage: 95
            },
            {
                name: "Hadoop",
                percentage: 90
            },
            {
                name: "Spark",
                percentage: 80
            },
            {
                name: "Java",
                percentage: 80
            },
            {
                name: "Javascript",
                percentage: 75
            },
            {
                name: "Angular",
                percentage: 60
            },
        ]
    },
    services: {
        title: "My Services",
        description: "",
        components: [
            {
                title: "Frontend Development",
                icon: "lni-code-alt",
                link: "",
                details: `Transform your vision into stunning single-page applications with
                intuitive user interfaces and seamless interactions. My frontend development services ensure a
                visually appealing and fully functional experience across all devices.`
            },
            {
                title: "Backend Development",
                icon: "lni-website",
                link: "",
                details: `Build robust and scalable backend solutions tailored to your needs. From designing
                comprehensive APIs to integrating with databases, I provide end-to-end backend development
                that powers your applications with reliability and efficiency.`
            },
            {
                title: "Consultancy and Support",
                icon: "lni-support",
                link: "",
                details: `Leverage expert guidance for designing and optimizing large-scale data systems.
                I offer specialized consultancy and support for architectural designs and implementations for the projects,
                ensuring strategic solutions that drive growth and innovation.`
            }
        ]
    },
    portfolio: {
        heading: "My Work Portfolio",
        description: `
            Below are some of the projects that I have developed for demonstrating my knowledge in the different areas.
        `,
        projectLink: "https://github.com/vinitshah24",
        projects: [
            {
                title: "Django REST API",
                image: "assets/images/work/w-1.png",
                link: "https://github.com/vinitshah24/eCommerce-API"
            },
            {
                title: "Home Credit Default Risk Assessment",
                image: "assets/images/work/w-2.png",
                link: "https://github.com/vinitshah24/Home-Credit-Default-Risk-Assessment"
            },
            {
                title: "Emotions Detection from Social Media Posts",
                image: "assets/images/work/w-3.png",
                link: "https://github.com/vinitshah24/Emotions-Detection-Text-RNN"
            }
        ]
    },
    contact: {
        heading: "Get In Touch",
        description: "Feel free to reach me out on my below email or phone for any queries or collaboration ideas",
        address: "Charlotte, NC",
        phone: "980-837-2220",
        email: "shahvinit2244@gmail.com",
        mapUrl: ""
    },
    footer: {
        logo: "assets/images/logo-2.png",
        description: "Feel free to connect with me on my below social media accounts",
        socialLinks: {
            facebook: "https://www.facebook.com/vinit.shah02/",
            twitter: "https://x.com/vinnitshah",
            linkedin: "https://linkedin.com/in/vinitshah24"
        }
    },
    error: {
        description: "Sorry we couldn't find that page!",
        image: "assets/images/error.jpg"
    }
}
