export const contactInfo = [
  {
    name: 'Email',
    url: 'mailto:oobregon544@gmail.com',
    icon: 'icon-[mdi--email]',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/t4lentles5',
    icon: 'icon-[mdi--github]',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adolfo-omar-obregón-henostroza-b0a5b129b',
    icon: 'icon-[mdi--linkedin]',
  },
];

export const skills = {
  programmingLanguages: [
    {
      name: 'JavaScript',
      icon: 'icon-[logos--javascript]',
    },
    {
      name: 'TypeScript',
      icon: 'icon-[logos--typescript-icon]',
    },

    {
      name: 'Python',
      icon: 'icon-[logos--python]',
    },
  ],
  frontendDevelopment: [
    { name: 'HTML', icon: 'icon-[logos--html-5]' },
    { name: 'CSS', icon: 'icon-[logos--css-3]' },
    {
      name: 'React',
      icon: 'icon-[logos--react]',
    },
    {
      name: 'Next.js',
      icon: 'icon-[logos--nextjs-icon]',
    },
    {
      name: 'Astro',
      icon: 'icon-[logos--astro-icon]',
    },
    {
      name: 'Tailwind CSS',
      icon: 'icon-[logos--tailwindcss-icon]',
    },
  ],
  backendDevelopment: [
    { name: 'Node.js', icon: 'icon-[logos--nodejs-icon]' },
    { name: 'Express', icon: 'icon-[lineicons--expressjs]' },
    { name: 'Nest.js', icon: 'icon-[logos--nestjs]' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'icon-[logos--postgresql]' },
    { name: 'MongoDB', icon: 'icon-[logos--mongodb-icon]' },
  ],
};

export const projects = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product filtering, and a seamless checkout process.',
    longDescription:
      'This e-commerce platform is a comprehensive solution for online retail. It leverages the power of Next.js for server-side rendering and static site generation, ensuring fast load times and excellent SEO. The integration with Stripe provides a secure and reliable payment gateway. Key features include a dynamic product catalog with advanced filtering options, a user-friendly shopping cart, and a streamlined checkout flow. The application also includes a dashboard for admin users to manage products and orders.',
    technologies: [
      { name: 'Next.js', icon: 'icon-[logos--nextjs-icon]' },
      { name: 'React', icon: 'icon-[logos--react]' },
      { name: 'Tailwind CSS', icon: 'icon-[logos--tailwindcss-icon]' },
      { name: 'Stripe', icon: 'icon-[logos--stripe]' },
    ],
    githubUrl: 'https://github.com/t4lentles5',
    liveUrl: 'https://github.com/t4lentles5',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=E-Commerce',
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates. Users can create boards, assign tasks, and track progress efficiently.',
    longDescription:
      'Designed for teams, this task management application facilitates collaboration and productivity. It features real-time updates using Socket.io, allowing users to see changes instantly. Users can create multiple boards, organize tasks into lists, and assign them to team members. The intuitive drag-and-drop interface makes managing tasks effortless. The backend is built with Node.js and MongoDB, ensuring scalability and performance.',
    technologies: [
      { name: 'React', icon: 'icon-[logos--react]' },
      { name: 'Node.js', icon: 'icon-[logos--nodejs-icon]' },
      { name: 'MongoDB', icon: 'icon-[logos--mongodb-icon]' },
      { name: 'Socket.io', icon: 'icon-[logos--socket-io]' },
    ],
    githubUrl: 'https://github.com/t4lentles5',
    liveUrl: 'https://github.com/t4lentles5',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Task+App',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'A minimalist personal portfolio website built with Astro and Tailwind CSS. Showcases projects, skills, and contact information with a clean design.',
    longDescription:
      'This portfolio website serves as a digital resume and showcase of my work. Built with Astro, it delivers exceptional performance by shipping zero JavaScript to the client by default. Tailwind CSS is used for styling, allowing for a highly customizable and responsive design. The site features a clean, minimalist aesthetic that puts the focus on the content. It includes sections for my bio, skills, and a detailed gallery of my projects.',
    technologies: [
      { name: 'Astro', icon: 'icon-[logos--astro-icon]' },
      { name: 'Tailwind CSS', icon: 'icon-[logos--tailwindcss-icon]' },
      { name: 'TypeScript', icon: 'icon-[logos--typescript-icon]' },
    ],
    githubUrl: 'https://github.com/t4lentles5',
    liveUrl: 'https://github.com/t4lentles5',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Portfolio',
  },
];
