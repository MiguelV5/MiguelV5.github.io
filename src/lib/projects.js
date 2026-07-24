const BASE_PREVIEW_IMG_URL = 'posts/';

const BASE_GH_URL = 'https://github.com/MiguelV5/';
const BASE_GL_URL = 'https://gitlab.com/MiguelV5/';
const BASE_PAGES_URL = 'https://miguelv5.github.io/';

export const PROJECTS_LIST = [
    {
        title: "RPL 3.0 | Senior Engineering Thesis",
        description:
            "Maintained and overhauled an open-source platform serving 5k+ active users and ~400k code-execution submissions per quarter. Built a sandboxed runner for asynchronous multi-language execution (C, Python, Rust, Go). Led zero-downtime data migration through multiple MySQL major updates alongside database-per-service schema separation, all whilst preserving legacy records. The system leverages automated GCP (GKE) infrastructure with Terraform and Kubernetes via CI/CD pipelines, including autoscaling and secure inter-service auth (mTLS), as well as a full-stack entrypoint.",
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'rpl.png',
        repoUrl: "https://github.com/reinvent-fiuba/RPL-3.0",
        hasWebPage: true,
        pageUrl: "https://myrpl.ar/"
    },
    {
        title: 'Ferris Torrent',
        description:
        'A BitTorrent client supporting multiple concurrent peers, and a custom tracker server with a simple static web interface for basic stats of its peers. Both implemented in Rust while keeping external crate usage to a strict minimum (TLS, GTK, logging, json) in order to properly handle real-world network conditions and adhere to documented protocol specifications without relying on third-party implementations.',
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'ferris_torrent.png',
        repoUrl: BASE_GH_URL + 'Ferris-Torrent_taller1-fiuba',
        hasWebPage: false
    },
    {
        title: "Amazon reviews' data analysis via distributed computing",
        description:
            "A distributed system for processing and analyzing large datasets of Amazon books reviews in parallel, built with a fleet of dockerized Python controllers and RabbitMQ as a message broker. It implements an architecture akin to MapReduce, as main nodes distribute the workload among multiple workers and replicas categorized by responsibilities. The system is designed to be scalable and fault-tolerant, with the ability to manage highly unstable networks/environments by properly handling catastrophic failures without losing neither data integrity nor throughput consistency.",
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'distri.png',
        repoUrl: BASE_GH_URL + 'Sistemas_Distribuidos',
        hasWebPage: false
    },
    {
        title: 'FileTransfer + RDT',
        description:
            'A CLI File Transfer app implementing a custom RDT protocol on top of UDP, able to handle packet loss. Written in Python and used to analyze custom protocol behavior within a simulated network via Mininet. A custom Wireshark dissector made in Lua is also provided.',
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'file_transfer.png',
        repoUrl: BASE_GH_URL + '7543_IntroSistDistribuidos/tree/main/tp1',
        hasWebPage: false
    },
    {
        title: 'Low level OS Utilities',
        description:
            'Implementation of multiple low-level system utilities in C developed at the University of Buenos Aires. Includes a custom shell, a memory allocation library, a process scheduler for the JOS kernel, and a FUSE filesystem.',
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'shell.png',
        repoUrl: BASE_GL_URL + 'sisop',
        hasWebPage: false
    },
    {
        title: "Properties' pricing analysis",
        description:
            "A data science project consisting of analysis and model training from a dataset of properties for sale in Buenos Aires, Argentina. It includes full data preprocessing, clustering, classification and regression models, presenting the results and insights obtained from the record exploration and model evaluation with visualizations and metrics.",
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'ds.png',
        repoUrl: BASE_GH_URL + '7506-Organizacion_de_datos',
        hasWebPage: false
    },
    {
        title: 'Polyrythmic Circles',
        description:
            'A minimalist, interactive audio-visual web experiment exploring the polyrhythmic effect. Built with vanilla JavaScript, HTML, and CSS to focus on smooth mathematical canvas rendering, for a simple yet relaxing experience.',
        previewImgUrl: BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
        repoUrl: BASE_GH_URL + 'polyrythmic_circles',
        hasWebPage: true,
        pageUrl: BASE_PAGES_URL + 'polyrythmic_circles'
    },
];
