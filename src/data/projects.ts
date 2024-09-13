import { Project } from '../types/Project';

export const projects: Project[] = [
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