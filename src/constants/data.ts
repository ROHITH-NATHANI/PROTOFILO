import { Github, ExternalLink, Code2, Database, Cloud, Brain } from 'lucide-react';

export const PERSONAL_INFO = {
    name: "Nathani Rohith",
    role: "CS & AI Undergraduate",
    location: "Amaravati, Andhra Pradesh, India",
    email: "rohithnathani2@gmail.com",
    phone: "+91 8985604026",
    linkedin: "https://linkedin.com/in/nathani-rohith",
    summary: "Computer Science and Artificial Intelligence undergraduate with a strong foundation in programming, artificial intelligence, and software development. Passionate about designing intelligent, scalable solutions and continuously exploring emerging technologies. Demonstrates strong problem-solving and analytical skills, with the ability to transform theoretical concepts into practical applications.",
};

export const SKILLS = [
    {
        category: "AI & Machine Learning",
        icon: Brain,
        items: ["Python", "Scikit-learn", "PyTorch", "Predictive Modeling", "NLP", "Generative AI", "Computer Vision"],
    },
    {
        category: "Data Analytics",
        icon: Database,
        items: ["SQL", "Pandas", "NumPy", "Statistical Analysis", "Pattern Recognition"],
    },
    {
        category: "Cloud Infrastructure",
        icon: Cloud,
        items: ["AWS Certified Cloud Practitioner", "IBM Cloud", "Oracle Cloud Infrastructure"],
    },
    {
        category: "Development",
        icon: Code2,
        items: ["Git", "GitHub", "VS Code", "CI/CD Pipelines", "React", "Node.js"],
    },
];

export const PROJECTS = [
    {
        title: "RFXGB Classifier for Lung Cancer Prediction",
        description: "Co-authored research presented at the 2025 IEEE GIEST Conference. Developed a robust ensemble model (RFXGB) utilizing SMOTE for class balancing, achieving high accuracy. Demonstrated predictive analytics capabilities relevant to fault detection and diagnostics.",
        tags: ["Research", "Machine Learning", "Ensemble Models", "Python"],
        links: [
            { label: "View on Colab", url: "#", icon: ExternalLink } // Todo: Update URL if provided
        ]
    },
    {
        title: "ResuMaster Pro – AI Analytics Engine",
        description: "Engineered a scalable full-stack application using Google Gemini Pro to process and analyze large datasets. Designed a 'Quantum' UI with React and Node.js, ensuring a seamless user experience. Deployed on cloud infrastructure for reliability.",
        tags: ["Full Stack", "React", "Node.js", "Google Gemini Pro", "Cloud"],
        links: [
            { label: "View on GitHub", url: "#", icon: Github } // Todo: Update URL if provided
        ]
    }
];

export const EDUCATION = [
    {
        degree: "B.Tech in Computer Science & Engineering (AI)",
        institution: "Amrita Vishwa Vidyapeetham",
        year: "Present",
        details: "Relevant Coursework: Data Structures, Cloud Computing, Machine Learning, DBMS."
    },
    {
        degree: "Intermediate (MPC)",
        institution: "Narayana Junior College, Vijayawada, AP",
        year: "Completed",
        details: ""
    },
    {
        degree: "Secondary Education (SSC)",
        institution: "Narayana EM High School, Vijayawada, AP",
        year: "Completed",
        details: ""
    }
];

export const CERTIFICATIONS = [
    "AWS Certified Cloud Practitioner",
    "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    "IBM Full Stack Software Developer Professional Certificate"
];

export const EXPERIENCES = [
    {
        role: "AI & Cloud Intern",
        company: "Edunet Foundation (IBM)",
        type: "Remote",
        description: "Gained exposure to enterprise-scale cloud operations and AI deployment using IBM Watsonx. Developed workflows to optimize knowledge retrieval and collaborated in an Agile environment."
    }
];
