type Tag = {
  id: number;
  name: string;
};

type Feature = {
  id: number;
  name: string;
};

export type Project = {
  id: number;
  title: string;
  description_1: string;
  description_2?: string;
  description_3?: string;
  tags: Tag[];
  features?: Feature[];
  image_1: string;
  image_2?: string;
  image_3?: string;
  live_link_frontend: string;
  live_link_backend: string;
  github_link_frontend: string;
  github_link_backend: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title:
      " Streamlined Project Management and Team Collaboration for Getonent in Norway",
    description_1:
      "This client portal app offers seamless project management, allowing users to create teams, track milestones, and upload assets. Designed for Norwegian company GetOnNet, the frontend delivers an intuitive user experience.",
    description_2:
      "The app enables clients and admins to handle project offers, negotiations, and overviews effortlessly. Featuring customizable settings and detailed profile management, it simplifies collaboration for Norway’s business environment.",
    description_3:
      "Built with a focus on frontend efficiency, this app streamlines essential project processes. Teams can manage tasks, assets, and milestones while facilitating effective communication between clients and administrators at GetOnNet.",
    tags: [
      { id: 1, name: "Next Js" },
      { id: 2, name: "Chakra" },
    ],
    features: [
      { id: 1, name: "Role-based access with secure login and permissions." },
      {
        id: 2,
        name: "Create, assign, and track projects with progress and deadlines.",
      },
      {
        id: 3,
        name: "Edit personal information, contact details, and professional experience",
      },
      {
        id: 4,
        name: "Define, assign, and monitor key project milestones and objectives.",
      },
      {
        id: 5,
        name: " Upload and organize project-related files, documents, and resources efficiently.",
      },
      {
        id: 6,
        name: "Add, manage, and configure teams for project-specific roles and tasks.",
      },
      {
        id: 7,
        name: "Send project offers, review responses, and initiate client negotiations.",
      },
      {
        id: 8,
        name: "Discuss terms, modify deliverables, and finalize project agreements.",
      },
      {
        id: 9,
        name: "View project summary, tasks, deadlines, and team performance at a glance.",
      },
      {
        id: 10,
        name: "Customize account settings, notifications, and user interface preferences effortlessly.",
      },
    ],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728190759/client-portal-2_enizuh.png",
    image_2:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728190753/client-portal-1_cszyis.png",
    image_3:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728190788/client-portal-3_vsgya0.png",
    live_link_frontend: "https://portfolio.com",
    live_link_backend: "",
    github_link_frontend: "https://kundeportal.getonnet.no/auth/login",
    github_link_backend: "",
  },
  {
    id: 2,
    title: "Bank Management System User Authentication and Role-Based Features",
    description_1:
      "This bank management project includes role-based authentication for managers and customers. Customers can manage deposits, withdrawals, balance transfers, and loan requests, while managers oversee transactions and approve loan applications using Django REST and Next.js.",
    description_2:
      "Built with Next.js, TypeScript, and Django REST, this bank management system allows customers to handle financial operations, and managers to review transactions and approve loan requests. Tailwind CSS enhances the frontend for a seamless user experience.",
    description_3:
      "Showcasing role-based functionality, this system enables customers to perform banking operations and submit loan requests. Managers can track all transactions and handle loan approvals through a clean, intuitive interface powered by modern web technologies.",
    tags: [
      { id: 3, name: "Next Js" },
      { id: 4, name: "Typescript" },
      { id: 5, name: "Tailwind" },
      { id: 6, name: "Django Rest Framework" },
    ],
    features: [
      {
        id: 11,
        name: " Secure login for both managers and customers with role-based access.",
      },
      {
        id: 12,
        name: " Customers can create and manage their own bank accounts effortlessly.",
      },
      {
        id: 13,
        name: " Customers can deposit and withdraw funds from their accounts securely.",
      },
      {
        id: 14,
        name: "Easily transfer balances between accounts with seamless integration and tracking.",
      },
      {
        id: 15,
        name: "Customers can request loans and track approval status in real-time.",
      },
      {
        id: 16,
        name: "Managers can view all customer transactions and account activities in detail.",
      },
      {
        id: 17,
        name: "Managers have the authority to review and approve loan requests.",
      },
      {
        id: 18,
        name: "View a comprehensive history of all customer transactions and actions.",
      },
      {
        id: 19,
        name: "Frontend built with Next.js and Tailwind for an optimized user experience.",
      },
      {
        id: 20,
        name: "Backend built with Django REST for handling robust banking operations efficiently.",
      },
    ],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728485669/Screenshot_2024-10-09_205418_pl0dgt.png",
    image_2:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728485581/Screenshot_2024-10-09_205239_vxmn0p.png",
    image_3:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728485753/Screenshot_2024-10-09_205531_tsavhc.png",
    live_link_frontend: "https://bank-management-frontend-three.vercel.app/",
    live_link_backend: "https://bank-management-backend.onrender.com/",
    github_link_frontend:
      "https://github.com/sajib925/bank-management-frontend",
    github_link_backend: "https://github.com/sajib925/bank-management-backend",
  },
  {
    id: 3,
    title: "Vaccination Management System with Role-Based User Features",
    description_1:
      "This vaccination management website offers authentication and profile updates. Doctors can create campaigns and add vaccines, while patients can book vaccinations and leave reviews. Built with Next.js, TypeScript, Tailwind, and Django REST.",
    description_2:
      "Role-based user system for doctors and patients. Doctors manage vaccine campaigns, while patients book appointments and leave reviews. The platform combines Next.js frontend with Django REST backend for seamless performance and user experience.",
    description_3:
      "Featuring a role-based vaccination system, patients can book appointments and leave reviews, while doctors manage vaccination campaigns. Built with modern web technologies, it ensures a smooth user journey from booking to vaccination.",
    tags: [
      { id: 7, name: "Next Js" },
      { id: 8, name: "Typescript" },
      { id: 9, name: "Tailwind" },
      { id: 10, name: "Django Rest Framework" },
    ],
    features: [
      {
        id: 21,
        name: "Secure login and profile management for doctors and patients.",
      },
      {
        id: 22,
        name: "Doctors can add new vaccine campaigns and manage their schedules.",
      },
      {
        id: 23,
        name: "Patients can book vaccination appointments through an intuitive interface.",
      },
      {
        id: 24,
        name: " Doctors create, update, and manage vaccination campaigns with ease.",
      },
      {
        id: 25,
        name: " Doctors can add available vaccines to ongoing campaigns.",
      },
      {
        id: 26,
        name: "Patients can select and book appointments for their chosen vaccine.",
      },
      {
        id: 27,
        name: "Patients can leave reviews for vaccination campaigns after booking.",
      },
      {
        id: 28,
        name: "Users can update their personal details and view appointment history.",
      },
      {
        id: 29,
        name: "A responsive, user-friendly interface powered by Next.js and Tailwind.",
      },
      {
        id: 30,
        name: "A robust backend with Django REST Framework for smooth data handling.",
      },
    ],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728485379/Screenshot_2024-10-09_204913_kbrdcs.png",
    image_2:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728485442/Screenshot_2024-10-09_205024_p7piww.png",
    image_3: "image9_url",
    live_link_frontend: "https://vaccine-management-frontend.vercel.app/",
    live_link_backend: "https://vaccine-management-backend-j2ii.onrender.com/",
    github_link_frontend:
      "https://github.com/sajib925/vaccine-management-frontend",
    github_link_backend:
      "https://github.com/sajib925/vaccine-management-backend",
  },
  {
    id: 4,
    title: "Landing Website",
    description_1:
      "This is an landing portfolio website that is solely for showcasing. It displays a collection of products and services related to my work and expertise.",
    tags: [{ id: 11, name: "Webflow" }],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728486431/Screenshot_2024-10-09_210652_xfv5gn.png",
    live_link_frontend: "https://evemat-d81d99.webflow.io/",
    live_link_backend: "",
    github_link_frontend: "",
    github_link_backend: "",
  },
  {
    id: 5,
    title: "Landing Website",
    description_1:
      "This is an landing portfolio website that is solely for showcasing. It displays a collection of products and services related to my work and expertise.",
    tags: [{ id: 12, name: "Webflow" }],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728486325/Screenshot_2024-10-09_210458_kjfj7r.png",
    live_link_frontend: "https://landing-page-0c97b6.webflow.io/",
    live_link_backend: "",
    github_link_frontend: "https://github.com/fitnesstracking-frontend",
    github_link_backend: "",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description_1:
      "This is an landing portfolio website that is solely for showcasing. It displays a collection of products and services related to my work and expertise.",
    tags: [
      { id: 14, name: "Webflow" },
      { id: 16, name: "Jquery" },
      { id: 17, name: "Lenis" },
    ],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728486591/Screenshot_2024-10-09_210934_exrrlm.png",
    live_link_frontend: "https://webflows-trendy-site-73d680.webflow.io/",
    live_link_backend: "",
    github_link_frontend: "https://webflows-trendy-site-73d680.webflow.io/",
    github_link_backend: "",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description_1:
      "This is an landing portfolio website that is solely for showcasing. It displays a collection of products and services related to my work and expertise.",
    tags: [
      { id: 18, name: "React Js" },
      { id: 19, name: "Tailwind" },
    ],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728485053/personal-portfolio_bft8lw.png",
    live_link_frontend: "https://sajib-ahmed-frontend.vercel.app/",
    live_link_backend: "",
    github_link_frontend: "https://github.com/sajib925/react-portfolio",
    github_link_backend: "",
  },
  {
    id: 8,
    title: "Minimog Website",
    description_1:
      "This is an e-commerce portfolio website that is solely for showcasing. It displays a collection of products and services related to my work and expertise.",
    tags: [
      { id: 20, name: "Next Js" },
      { id: 21, name: "Tailwind." },
      { id: 22, name: "Redux." },
    ],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728486098/Screenshot_2024-10-09_210119_lxwntn.png",
    live_link_frontend: "https://baby-store-minimog-c649.vercel.app/",
    live_link_backend: "",
    github_link_frontend: "https://github.com/sajib925/baby-store-minimog",
    github_link_backend: "",
  },
  {
    id: 9,
    title: "Kacha Bazar",
    description_1:
      "This is an e-commerce portfolio website that is solely for showcasing. It displays a collection of products and services related to my work and expertise.",
    tags: [
      { id: 23, name: "Next Js" },
      { id: 24, name: "Tailwind." },
    ],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728486190/Screenshot_2024-10-09_210255_izflvg.png",
    live_link_frontend: "https://fitnesstracking.com",
    live_link_backend: "",
    github_link_frontend: "https://kacha-bazar-three.vercel.app/",
    github_link_backend: "",
  },
  {
    id: 10,
    title: "Admin Dashboard",
    description_1:
      "This is a dashboard portfolio website that is solely for showcasing. It displays a collection of products and services related to my work and expertise.",
    tags: [
      { id: 25, name: "Next Js" },
      { id: 26, name: "Tailwind" },
    ],
    image_1:
      "https://res.cloudinary.com/dioutvghc/image/upload/v1728485997/Screenshot_2024-10-09_205936_d06kak.png",
    live_link_frontend:
      "https://admin-dashboard-syncfusion-tailwind-2p68.vercel.app/",
    live_link_backend: "",
    github_link_frontend: "https://github.com/sajib925/admin-dashboard",
    github_link_backend: "",
  },
];
