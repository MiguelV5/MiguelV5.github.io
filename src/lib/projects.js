const BASE_PREVIEW_IMG_URL = 'posts/';

const BASE_GH_URL = 'https://github.com/MiguelV5/';
const BASE_GL_URL = 'https://gitlab.com/MiguelV5/';
const BASE_PAGES_URL = 'https://miguelv5.github.io/';

const PROJECTS_LIST = [
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
    }
];