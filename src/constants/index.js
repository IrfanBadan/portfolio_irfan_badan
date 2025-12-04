import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated MERN Stack developer with a strong passion for building dynamic, responsive, and user-centric web applications. With hands-on experience in MongoDB, Express.js, React.js, and Node.js, I specialize in crafting seamless full-stack solutions that are both efficient and scalable. I enjoy transforming ideas into functional products, optimizing performance, and delivering clean, maintainable code. My goal is to continuously grow as a developer and build impactful applications that provide real value to users and businesses.`;

export const ABOUT_TEXT = `I’m a passionate and versatile Full Stack Developer with a strong interest in building responsive and user-friendly web applications. I’ve gained hands-on experience working with technologies like React,s Express, and MongoDB, and I’m constantly expanding my skills through real-world projects and continuous learning.

My journey in web development started with a curiosity to understand how modern websites and applications work, which has now grown into a focused career path. I enjoy turning ideas into functional and visually appealing solutions, and I thrive in collaborative environments where I can learn and contribute.

Outside of coding, I enjoy exploring new technologies, learning modern frameworks, and building side projects that challenge my creativity and problem-solving skills.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Toast Project",
    image: project1,
    description:
      " Designed a scalable toast notification system leveraging React Context API, enabling dynamic variants, real-time updates, and smooth dismiss interactions.",
    technologies: ["HTML", "Bootstrap", "React"],
    link : "https://react-toast-dusky.vercel.app/"
  },
  {
    title: "CRM panel",
    image: project2,
    description:
      "Developed a fully responsive and scalable CRM panel using React and Supabase, featuring real-time data management, role-based authentication, and intuitive UI components that streamline customer and employee operations for improved business efficiency.",
    technologies: ["React","supabase","tailwindcss"],
    link:"https://looque-crm-full-stack-project.vercel.app/"
  },
  {
    title: "JWT project",
    image: project3,
    description:
      "A secure role-based authentication system built with Express, MongoDB, and JWT, featuring access/refresh token management, admin control, and rate-limiting protection.",
    technologies: ["HTML", "CSS", "React", "MongoDB","Express.js"],
    link : "https://jwt-auth-app-nine.vercel.app/"
  },
  
];

export const CONTACT = {
  address: "📍India,TamilNadu,coimbatore ",
  phoneNo: "📞 +91 934 460 5885 ",
  email: "📧 irfanbadan23@gmail.com",
};