/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Jonathan Cheung",
  title: "Hey, I'm Jon",
  subTitle: emoji(
    "I am a Neuroscientist 🧠 turned Data Scientist 👨‍💻 with 10+ years experience using machine learning to make data-driven discoveries and deliver business solutions."
  ),
  resumeLink:
    "https://www.dropbox.com/scl/fi/25golu6i4oh7gcal0iqz8/JC_Resume_PRODUCT.pdf?rlkey=3lxugz9xevbz6lo8w1k9oehzd&dl=0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jacheung",
  linkedin: "https://www.linkedin.com/in/jacheung415/",
  gmail: "jacheung415@gmail.com",
  twitter: "https://twitter.com/JonCheung6",
  medium: "https://medium.com/@jacheung415",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full stack data scientist with expertise in client-facing interactions and MLOps tooling.",
  skills: [
    emoji("⚡ Process-driven data scientist."),
    emoji("⚡ Well-versed in client-facing interactions."),
    emoji("⚡ Experienced at building scalable production-level deployments.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/uscLogo.png"),
      subHeader: "Doctor of Philosophy; Neuroscience",
      duration: "Sep 2014 - Apr 2020",
      desc: "Completed dissertation on \"The cortical representation of touch\"; published three peer-reviewed articles:",
      descBullets: [
        "Behavioral and neural bases of tactile shape discrimination learning in head-fixed mice. (Neuron 2020)",
        "Active touch remaps barrel cortex output from a representation of self-motion to object location. (PLoS Biology 2020)",
        "The behavioral basis of whisker-guided anteroposterior object localization in head-fixed mice. (Current Biology 2019)"
      ]
    },
    {
      schoolName: "University of California, San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Bachelor of Science; Human Biology",
      duration: "Sep 2009 - Apr 2013",
      desc: "Foray into neuroscience research and student body representative",
      descBullets: [
        "College council president (2011-2012)",
        "Biological sciences senator (2012-2013)",
        "Leutgeb lab studying learning and memory (2011-2013)"  
        ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Specialist Solutions Architect",
      company: "Databricks",
      companylogo: require("./assets/images/databricksLogo.png"),
      date: "July 2024 – Present",
      desc: "Machine learning + GenAI major and data engineering minor. Notable projects include:",
      descBullets: [
        "Scaling forecasting training and inference workloads for optimal performance on 100,000+ models",
        "Distributed training and inference of large-scale forecasting across multi-node clusters"
      ]
    },
    {
      role: "Senior Data Scientist",
      company: "Beyond Limits",
      companylogo: require("./assets/images/beyondLimitsLogo.png"),
      date: "Nov 2021 – July 2024",
      desc: "Data science lead for scoping POCs and bringing MVPs to life. Projects include:",
      descBullets: [
        "Battery life-cycle prediction to reduce testing time",
        "Sand management advisor for British Petroleum",
        "Lead instructor for problem discovery and solution building for Aramco x Caltech AI Academy"
      ]
    },
    {
      role: "Data Scientist",
      company: "SoCalGas",
      companylogo: require("./assets/images/socalgasLogo.png"),
      date: "Aug 2020 – Oct 2021",
      desc: "Modernized antiquated workflows and founding member of SoCalGas' Model Review Board. Projects include:",
      descBullets: [
        "Daily gas load forecaster application for internal gas acquisition",
        "Route optimizer for gas meter inspection",
      ]
    },
    {
      role: "Doctoral Researcher",
      company: "University of Southern California",
      companylogo: require("./assets/images/uscLogoBackground.png"),
      date: "Sep 2014 – Apr 2020",
      desc: "Completed dissertation on \"The cortical representation of touch\". Experience include:",
      descBullets: [
        "Open-sourced transfer-learning application for touch-frame detection",
        "Data pipelines to clean and synchronize 30 million timepoints of sensor motion and neural recordings",
        "Feature engineering pipeline using time-series filtering and physics models"
      ]

    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open.",
  number: "+14155192029",
  email_address: "jacheung415@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "JonCheung6", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
