
export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  details: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Principal Data Engineer - Full-Stack Solutions',
    company: 'University of North Carolina at Charlotte',
    period: 'Feb 2024 – Dec 2024',
    location: 'Charlotte, NC',
    description: [
      'Led comprehensive data engineering and full-stack development initiatives for university systems',
      'Architected enterprise-grade data pipelines processing terabytes of information with 99.9% reliability',
      'Delivered end-to-end solutions from data ingestion to interactive dashboards',
      'Improved operational efficiency and decision-making capabilities across multiple departments'
    ],
    details: [
      'Built scalable full-stack applications serving 10K+ users with responsive dashboards',
      'Developed robust ETL pipelines processing multi-terabyte datasets with 99.9% reliability',
      'Created comprehensive analytics solutions generating actionable business insights',
      'Delivered 15+ data engineering projects improving operational efficiency by 75%',
    ],
  },
  {
    title: 'Data Engineer Intern - Solutions Development',
    company: 'FireEye',
    period: 'Sep 2024 – Dec 2024',
    location: 'Charlotte, NC',
    description: [
      'Developed cutting-edge data solutions for cybersecurity analytics',
      'Built modern ETL frameworks reducing development time significantly',
      'Created full-stack applications transforming complex security data into actionable insights',
      'Focused on high-performance data processing and intuitive user interfaces'
    ],
    details: [
      'Developed scalable data solutions using Python, Java, and JavaScript',
      'Implemented ETL frameworks reducing development time by 70%',
      'Built full-stack applications providing intuitive interfaces for complex data analysis',
      'Created dashboards and reports for security operations teams',
    ],
  },
  {
    title: 'Data Engineer Intern - Enterprise Solutions',
    company: 'Bank of America',
    period: 'May 2024 – Jul 2024',
    location: 'Charlotte, NC',
    description: [
      'Designed and implemented enterprise-grade ETL pipelines for critical financial data processing',
      'Achieved exceptional performance improvements in financial systems',
      'Developed sophisticated dashboard applications enabling real-time financial analytics',
      'Established comprehensive engineering best practices for data integrity and testing'
    ],
    details: [
      'Built ETL pipelines achieving 85% improvement in query performance',
      'Developed dashboard applications enabling real-time financial analytics',
      'Optimized SQL queries improving system efficiency by 90%',
      'Established engineering best practices for data integrity and testing',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Tata Consultancy Services',
    period: 'Jul 2021 – Jul 2023',
    location: 'Chennai, India',
    description: [
      'Architected and deployed large-scale cloud-native data platforms',
      'Supported enterprise operations for 200+ stakeholders across multiple business units',
      'Developed sophisticated ETL frameworks orchestrating hundreds of daily data pipelines',
      'Led cross-functional teams and mentored junior engineers'
    ],
    details: [
      'Built scalable data platforms with unified access to enterprise data',
      'Developed ETL frameworks orchestrating 300+ daily pipelines with 99.9% reliability',
      'Created interactive dashboards improving analyst productivity by 40%',
      'Led delivery of 20+ projects and mentored team of 6 engineers',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'CricClubs (Startup)',
    period: 'Feb 2021 – Jul 2021',
    location: 'Hyderabad, India',
    description: [
      'Built comprehensive analytics platform from ground up for rapidly growing sports technology startup',
      'Served 500K+ active users with high-performance web applications',
      'Handled massive concurrent user loads while maintaining optimal performance',
      'Implemented automated data processing systems connecting diverse external data sources'
    ],
    details: [
      'Developed analytics platform enabling real-time data processing',
      'Built responsive web applications serving 200K+ concurrent users',
      'Implemented automated ETL pipelines connecting 20+ external data sources',
      'Created custom dashboards translating complex analytics into business insights',
    ],
  },
  {
    title: 'Research Assistant - Data Engineering Lab',
    company: 'Jawaharlal Nehru Technological University',
    period: 'Jul 2020 – Feb 2021',
    location: 'Hyderabad, India',
    description: [
      'Conducted innovative research in data processing optimization',
      'Developed novel frameworks for academic research dataset integration',
      'Implemented advanced optimization strategies improving query performance',
      'Contributed to establishing industry best practices for academic research'
    ],
    details: [
      'Created configurable frameworks for research dataset integration',
      'Implemented optimization strategies improving query performance by 45%',
      'Researched novel approaches to data pipeline design',
      'Established best practices adopted in academic coursework',
    ],
  },
];
