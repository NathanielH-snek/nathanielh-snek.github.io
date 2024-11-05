// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Profile from "./images/profile.jpg"
// import Logo from "./images/logo.svg"
import Python from "./images/catppuccin--python.svg"
import NLP from "./images/carbon--text-link-analysis.svg"
import SNA from "./images/eos-icons--neural-network.svg"
import QT from "./images/file-icons--qt.svg"


/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "NathanielH-snek";
export const profilePic = Profile
// Navbar Logo image
export const navLogo = Python;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

//Extra Images

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning new technologies and skills and continuing to improve my programming abilities";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="catppuccin:python-compiled" className="display-4"/>,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="carbon:sql" className="display-4" />,
    name: "SQL",
  },
  {
    id: 3,
    skill: <Icon icon="cib:rstudio" className="display-4" />,
    name: "R",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:fedora" className="display-4" />,
    name: "Linux",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:flask" className="display-4" />,
    name: "Flask",
  },
  {
    id: 6,
    skill: <Icon icon="eos-icons:cloud-computing" className="display-4" />,
    name: "Cloud Computing",
  },
  {
    id: 7,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 8,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 9,
    skill: <Icon icon="tabler:brand-react-native" className="display-4" />,
    name: "React Native",
    }
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/e/2PACX-1vQzHonMQoirGW-HjEtL1EUVHcaSOAD8aS4eArslXm1aPeP6pTwzfcNZkG2grdPKVregtErykrjZgXvW/pub";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["SteamReviewTextAnalysis", "RedditTopicSocialNetworkAnalysis", "Med2XLPy"];

// Replace the default GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "SteamReviewTextAnalysis",
    image: NLP,
  },
  {
    name: "RedditTopicSocialNetworkAnalysis",
    image: SNA,
  },
  {
    name: "Med2XLPy",
    image: QT,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xwpklgbo";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
