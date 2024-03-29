// All of the environment variables are defined here. If you're willing to customize this project to your own, you can do it here.
// trigger deployment

export const environment = {
  graphQLUrl:
    'https://api-ap-northeast-1.hygraph.com/v2/cl88o5h971e5t01ta58fgcfyw/master',
  cmsSchema: `
    query MyQuery {
      resume(where: { id: "cl88qy98q8r2z0b18vbci313h" }) {
        introduction {
          html
        }
        profilePic {
          url
        }
        resumeLink
      }
      skills {
        title
        percentage
        color {
          hex
        }
      }
      timelines(orderBy: fromDate_DESC, first: 100) {
        title
        fromDate
        toDate
        singleDate
        timelineLabel {
          label
        }
      }
      portos(orderBy: publishedAt_DESC) {
        id
        title
        description
        link
        picture {
          url
        }
      }
    }
  `,
  contactsInfo: {
    instagram: 'chavyv.akvar',
    linkedinURL: 'https://www.linkedin.com/in/habibullah-akbar-631880179/',
    github: 'akbar2habibullah',
    gitlab: 'akbar2habibullah',
    youtube: '@ChavyvAkvar',
    tiktok: '@chavyv.akvar',
  },
  siteMetaData: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'description',
      content:
        'This is my personal website for portofolio showcase built by Angular, Tailwind, NgRx, and Scully',
    },
    {
      name: 'keywords',
      content:
        'chavyv, akvar, chavyv akvar, habibullah akbar, habib akbar, software engineer, web developer, frontend developer, javascript developer, indonesia',
    },
    {
      name: 'author',
      content: 'Habibullah Akbar',
    },
    {
      name: 'theme-color',
      content: '#444', // Set a custom theme color for the address bar
    },
  ],
};
