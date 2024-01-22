const BASE_PREVIEW_IMG_URL = 'posts/';

const BASE_GH_URL = 'https://github.com/MiguelV5/';
const BASE_GL_URL = 'https://gitlab.com/MiguelV5/';
const BASE_PAGES_URL = 'https://miguelv5.github.io/';

export const PROJECTS_LIST = [
    {
        title: 'Polyrythmic Circles',
        description:
            'A relaxing static page featuring the polyrythmic effect, done simply with vanilla JS, HTML and CSS.',
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
        repoUrl: BASE_GH_URL + 'polyrythmic_circles',
        hasWebPage: true,
        pageUrl: BASE_PAGES_URL + 'polyrythmic_circles'
    },
    {
        title: 'Ferris Torrent',
        description:
            'A BitTorrent client supporting multiple concurrent peers, and a custom tracker server with a simple static web interface for basic stats of its peers. Both done in Rust while keeping external crate usage to a minimum (TLS, GTK, logging, json) for my Programming Workshop college subject.',
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'ferris_torrent.png',
        repoUrl: BASE_GH_URL + 'Ferris-Torrent_taller1-fiuba',
        hasWebPage: false
    },
    {
        title: 'FileTransfer + RDT',
        description:
            'A CLI File Transfer app using a custom RDT protocol on top of UDP, handling packet loss within a simulated network via mininet. Written in python for my Computer Networking college subject. A custom wireshark dissector made in Lua is also provided.',
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'file_transfer.png',
        repoUrl: BASE_GH_URL + '7543_IntroSistDistribuidos/tree/main/tp1',
        hasWebPage: false
    },
    {
        title: 'Low level OS Utilities',
        description:
            'Implementation of multiple low level system utilities in C for my Operating Systems college subject. Includes a shell, a memory allocation library, a process scheduler for the JOS kernel, and a FUSE filesystem.',
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'shell.png',
        repoUrl: BASE_GL_URL + 'sisop',
        hasWebPage: false
    },
    {
        title: "Properties' pricing analysis",
        description:
            "A data science project done with jupyter for my Data Science college subject. It consists of the data analysis and model training from a dataset with 2021's properties for sale in Buenos Aires, Argentina. It includes full data preprocessing, clustering, classification and regression; training multiple ML models.",
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'ds.png',
        repoUrl: BASE_GH_URL + '7506-Organizacion_de_datos',
        hasWebPage: false
    },
    {
        title: "Human Resources' Backend API",
        description:
            "A basic REST API implementation of a microservice supporting CRUD operations on a Human Resources' local SQLite database, done with Python and FastAPI for my Software Engineering I college subject. It has been deployed on Render cloud platform, and has a simple frontend made with React to interact with all the microservices.",
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'hr.png',
        repoUrl: BASE_GH_URL + "7509-ModuloRecursos-squad_6",
        hasWebPage: true,
        pageUrl: "https://rrhh-squad6-1c2023.onrender.com/docs"
    },
    {
        title: "Sport Events' Backend API",
        description:
            "A REST API for a sport events' management app, done with Java and Spring Boot for my Software Engineering II college subject. It uses JPA/Hibernate as ORM for a PostgreSQL database, and has JWT auth and role-based access control to be used by two frontends: a backoffice for administrators, and a web app for event attendees. It also had a CI/CD pipeline on GitLab, and was deployed on a server given by our college professors.",
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'sport_events.png',
        repoUrl: BASE_GH_URL + '7510_TDDSportsApp_API',
        hasWebPage: false
    }
];
