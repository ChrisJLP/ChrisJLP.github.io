import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'runetiles',
    title: 'RuneTiles',
    description: 'A goal tracker for Old School RuneScape players, with over 150 users on launch day. Create customizable boards to plan accounts, design bingo boards, track progress, build templates, and share them with others.',
    introduction: 'RuneTiles is a specialized tool designed to help Old School RuneScape players track their in-game goals. It features customizable boards, shareable templates, and progress tracking for various game activities.',
    screenshots: [
      {src: '/assets/RuneTiles Board.png', alt: 'RuneTiles Board Example'},
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    features: [
      'Customizable goal tracking boards',
      'Share and use board templates',
      'Track Ironman, skilling, and PvM progress',
      'OSRS username integration',
      'Responsive design for desktop and mobile'
    ],
    challenges: 'Creating an intuitive interface that allows players to easily track their various in-game goals while maintaining flexibility for different playstyles.',
    outcome: 'A useful tool for the OSRS community that helps players visualize and accomplish their in-game goals more effectively.',
    githubLink: 'https://github.com/ChrisJLP/runetiles',
    liveLink: 'https://runetiles.com',
    imageUrl: '/assets/RuneTiles Board.png'
  },
  {
    id: 'simpliquote',
    title: 'SimpliQuote',
    description: 'A tool designed to simplify project quotations for contractors.',
    introduction: 'SimpliQuote makes creating project quotes simple and efficient for contractors, allowing quick client interaction.',
    screenshots: [
      {src: '/assets/SimpliQuote - Homepage - Desktop.png', alt: 'Screenshot of SimpliQuote project'},
      {src: '/assets/SimpliQuote - Edit Project - Desktop.png', alt: 'SimpliQuote Edit Project - Desktop'},
      {src: '/assets/SimpliQuote - Edit Details - Desktop.png', alt: 'SimpliQuote Edit Details - Desktop'},
      {src: '/assets/SimpliQuote - PDF .png', alt: 'SimpliQuote PDF'},
      {src: '/assets/SimpliQuote - Homepage - Mobile.jpeg', alt: 'SimpliQuote Homepage - Mobile'},
      {src: '/assets/SimpliQuote - Edit Project - Mobile.jpeg', alt: 'SimpliQuote Edit Project - Mobile'},
      {src: '/assets/SimpliQuote - Edit Details - Mobile.jpeg', alt: 'SimpliQuote Edit Details - Mobile'},
    ],
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
    features: ['Create quotes quickly', 'Simple UI', 'Customizable project settings', 'Add detailed client info'],
    challenges: 'Designing a streamlined quote generation flow while keeping flexibility for different project needs.',
    outcome: 'A functional MVP that reduces time spent on project quotes, enhancing contractor productivity.',
    githubLink: 'https://github.com/ChrisJLP/SimpliQuote',
    liveLink: 'https://chrisjlp.github.io/SimpliQuote/',
    imageUrl: '/assets/SimpliQuote - Homepage - Desktop.png'
  },
  {
    id: 'simplistock',
    title: 'SimpliStock',
    description: 'A purchasing web app designed to showcase how a purchasing system could be made as easy to use as possible. Features real-time stock updates, order processing, and supplier management.',
    introduction: 'SimpliStock is a responsive web app I developed for efficient inventory and order management. The idea behind SimpliStock was to create a purchasing system that\'s as simple to use as possible, as in my experience, purchasing software can be needlessly complicated and difficult to use. My aim was to create a demo of an app that would be as easy to use for someone in purchasing, as placing an order is on Amazon.',
    screenshots: [
      { src: '/assets/SimpliStockDashboard.jpeg', alt: 'SimpliStock Dashboard' },
      { src: '/assets/SimpliStockOrders.jpeg', alt: 'Order Management' },
      { src: '/assets/SimpliStockInventory.jpeg', alt: 'Inventory Overview' },
      { src: '/assets/SimpliStockSuppliers.jpeg', alt: 'Supplier Management' },
    ],
    technologies: [
      'React',
      'JavaScript',
      'JSX',
      'CSS Modules',
      'Context API for state management',
      'Vite for build tooling',
    ],
    features: [
      'Quick order',
      'Real-time stock updates',
      'Order processing',
      'Supplier management',
      'Dashboard with quick links and overview',
      'Easy stock editing and minimum stock value adjustment',
      'New item and supplier creation',
      'Supplier search functionality',
    ],
    challenges: 'My biggest challenge during this project was expanding it beyond the initial idea while dealing with feature creep. I had to balance adding new functionalities with maintaining simplicity and ease of use.',
    outcome: 'The result is a streamlined, user-friendly purchasing system that showcases efficient inventory management. It demonstrates my ability to create practical, responsive web applications that would solve real world problems I\'ve encountered in the past.',
    githubLink: 'https://github.com/ChrisJLP/Purchasing-app',
    liveLink: 'https://simplistock.netlify.app',
    imageUrl: '/assets/SimpliStockDashboard.jpeg',
  },
  // Add more projects here as needed
];