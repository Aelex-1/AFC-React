import type { ReactNode } from "react";

export const slidesImages = [
  {
    imageWide: './assets/images/home/slider-desktop-sisig.webp',
    imageMobile: './assets/images/home/slider-mobile-sisig.webp',
    alt: 'Sisig Ad Poster',
  },
  {
    imageWide: './assets/images/home/slider-desktop-bbq.webp',
    imageMobile: './assets/images/home/slider-mobile-bbq.webp',
    alt: 'BBQ Ad Poster',
  },
  {
    imageWide: './assets/images/home/slider-desktop-franchise.webp',
    imageMobile: './assets/images/home/slider-mobile-franchise.webp',
    alt: 'Franchise Ad Poster',
  },
]



// about page - history (image size : 1200 x 686)
export interface HistoryTypes {
  historyYear: number;
  historyTitle: string,
  historyDescription: string;
  historyImage: string;
}

export const historyData: HistoryTypes[] = [
  {
    historyYear: 2011,
    historyTitle: 'Humble Beginnings',
    historyDescription: 'AFC began its journey as a small food stall in Libungan, Cotabato. With a simple vision and a passion for serving delicious and affordable fried chicken, the team focused on developing and perfecting the recipe that would eventually become the foundation of the AFC brand.',
    historyImage: './assets/images/about/history-2011.webp'
  },
  {
    historyYear: 2013,
    historyTitle: 'The first AFC Home',
    historyDescription: "AFC reached an important milestone with the opening of its Quezon Avenue branch in Midsayap, North Cotabato. This became the first AFC Home and quickly grew into one of the brand's most popular branches, establishing a stronger presence in the community and laying the groundwork for future expansion.",
    historyImage: './assets/images/about/history-2013.webp'
  },
  {
    historyYear: 2016,
    historyTitle: 'Expanding Our Roots',
    historyDescription: "With the growing popularity of AFC, plans for expansion began to take shape. New branches were established in Midsayap, including AFC Market, allowing more customers to experience the brand while strengthening AFC's presence in its home community.",
    historyImage: './assets/images/about/history-2016.webp'
  },
  {
    historyYear: 2020,
    historyTitle: 'The Start of Franchising',
    historyDescription: "AFC entered a new chapter by expanding through franchising, opening its first franchised branch in Cotabato City. This milestone marked the beginning of AFC's journey toward becoming a franchise-driven brand and opened opportunities for business partners to grow alongside AFC.",
    historyImage: './assets/images/about/history-2020.webp'
  },
  {
    historyYear: 2026,
    historyTitle: 'Growing Beyond Boundaries',
    historyDescription: "AFC continues to expand its franchise network across selected areas in Mindanao, reaching more communities and customers. Alongside its growing number of branches, AFC remains committed to team development, product innovation, leadership, and process improvement—building a stronger and more modern franchise system for the years ahead.",
    historyImage: './assets/images/about/history-2026.webp'
  },
]


export const menuCategory = ['fried chicken', 'grilled chicken', 'chicken sisig', 'takeout sets']

export const menuData = [
  {
    itemCategory: menuCategory[0],
    itemTag: 'FC1',
    itemName: '1pc Fried Chicken',
    itemDescription: 'Crispy golden skin, juicy inside, seasoned to perfection.',
    itemImage: './assets/images/menu/FC1.webp'
  },
  {
    itemCategory: menuCategory[0],
    itemTag: 'FC2',
    itemName: '2pc Fried Chicken',
    itemDescription: 'More of what you love. Two pieces of our Sulit Sarap Fried Chicken.',
    itemImage: './assets/images/menu/FC2.webp'
  },
  {
    itemCategory: menuCategory[0],
    itemTag: 'FC3',
    itemName: 'Tidbits',
    itemDescription: 'Bite-sized, bold, and bursting with flavor.',
    itemImage: './assets/images/menu/FC3.webp'
  },
  {
    itemCategory: menuCategory[0],
    itemTag: '',
    itemName: 'Quarter Crunch Leg',
    itemDescription: 'Leg quarter cut. More chicken, more sulit, more sarap!',
    itemImage: './assets/images/menu/QC-leg.webp'
  },
  {
    itemCategory: menuCategory[0],
    itemTag: '',
    itemName: 'Quarter Crunch Breast',
    itemDescription: 'Forequarter cut. More chicken, more sulit, more sarap!',
    itemImage: './assets/images/menu/QC-breast.webp'
  },
  {
    itemCategory: menuCategory[1],
    itemTag: 'GC1',
    itemName: 'Grilled Chicken Paa',
    itemDescription: 'Smoky, tender chicken Leg quarter cut grilled just right.',
    itemImage: './assets/images/menu/GC1.webp'
  },
  {
    itemCategory: menuCategory[1],
    itemTag: 'GC2',
    itemName: 'Grilled Chicken Pecho',
    itemDescription: 'Fire-grilled chicken breast-and-wing cut, tender and flavorful with every bite.',
    itemImage: './assets/images/menu/GC2.webp'
  },
  {
    itemCategory: menuCategory[1],
    itemTag: 'GC3',
    itemName: 'Paa w/ 1pc Fried Chicken',
    itemDescription: 'Smoky grilled and golden crispy in one order.',
    itemImage: './assets/images/menu/GC3.webp'
  },
  {
    itemCategory: menuCategory[1],
    itemTag: 'GC4',
    itemName: 'Pecho w/ 1pc Fried Chicken',
    itemDescription: 'The best of both worlds for chicken lovers who just cannot choose one.',
    itemImage: './assets/images/menu/GC4.webp'
  },
  {
    itemCategory: menuCategory[2],
    itemTag: 'CS1',
    itemName: 'Chicken Sisig',
    itemDescription: 'Sizzling and packed with bold Filipino flavor',
    itemImage: './assets/images/menu/CS1.webp'
  },
  {
    itemCategory: menuCategory[2],
    itemTag: 'CS2',
    itemName: 'Chicken Sisig w/ 1pc Fried Chicken',
    itemDescription: 'Sizzling Chicken Sisig meets our crispy Fried Chicken for a satisfying combo meal.',
    itemImage: './assets/images/menu/CS2.webp'
  },
  {
    itemCategory: menuCategory[2],
    itemTag: 'CS3',
    itemName: 'Chicken Sisig w/ 1 Grilled Paa',
    itemDescription: 'Sizzling Chicken Sisig paired with a smoky Grilled Paa.',
    itemImage: './assets/images/menu/CS3.webp'
  },
  {
    itemCategory: menuCategory[3],
    itemTag: 'FS1',
    itemName: '4pcs Fried Chicken',
    itemDescription: 'Perfect for a small group ready to share a great meal.',
    itemImage: './assets/images/menu/FS-fried.webp'
  },
  {
    itemCategory: menuCategory[3],
    itemTag: 'FS2',
    itemName: '8pcs Fried Chicken',
    itemDescription: 'More to go around for the whole family at the table.',
    itemImage: './assets/images/menu/FS-fried.webp'
  },
  {
    itemCategory: menuCategory[3],
    itemTag: 'FS3',
    itemName: '10pcs Fried Chicken',
    itemDescription: 'The big box for big gatherings and bigger appetites.',
    itemImage: './assets/images/menu/FS-fried.webp'
  },
  {
    itemCategory: menuCategory[3],
    itemTag: 'FS4',
    itemName: '3pcs Grilled Paa',
    itemDescription: 'A lighter sharing option packed with real Filipino grilled flavor.',
    itemImage: './assets/images/menu/FS-grilled.webp'
  },
  {
    itemCategory: menuCategory[3],
    itemTag: 'FS5',
    itemName: '2pcs Paa + 2pcs Pecho',
    itemDescription: 'Great variety for the whole family with every classic cut covered.',
    itemImage: './assets/images/menu/FS-grilled.webp'
  },
]

//storeStreet is STREET OR BARANGAY
// storeCity is CITY OR MUNICIPALITY
export const locationsData = [
  {
    storeName: 'AFC Home',
    storeBuilding: '',
    storeStreet: 'Quezon Avenue',
    storeCity: 'Midsayap',
    storeProvince: 'Cotabato',
    storeRegion: 'Region 12',
    storeOpenHour: '7:00',
    storeCloseHour: '10:00',
    storeMapLink: 'https://maps.app.goo.gl/6uATqqwddGTyx7zH9'
  },
  {
    storeName: 'AFC Hillpark',
    storeBuilding: '',
    storeStreet: 'Quezon Avenue',
    storeCity: 'Midsayap',
    storeProvince: 'Cotabato',
    storeRegion: 'Region 12',
    storeOpenHour: '7:00',
    storeCloseHour: '10:00',
    storeMapLink: 'https://maps.app.goo.gl/TnoowjeXZvYEf9Tp8'
  },
  {
    storeName: 'AFC Poblacion 3',
    storeBuilding: '',
    storeStreet: 'Poblacion 3',
    storeCity: 'Midsayap',
    storeProvince: 'Cotabato',
    storeRegion: 'Region 12',
    storeOpenHour: '7:00',
    storeCloseHour: '10:00',
    storeMapLink: 'https://maps.app.goo.gl/t4v2oT3UdkWG6RiA8'
  },
  {
    storeName: 'AFC Market',
    storeBuilding: '',
    storeStreet: 'Jaycee Avenue',
    storeCity: 'Midsayap',
    storeProvince: 'Cotabato',
    storeRegion: 'Region 12',
    storeOpenHour: '7:00',
    storeCloseHour: '8:00',
    storeMapLink: 'https://maps.app.goo.gl/MPLoNhZEva9tHtC68'
  },
  {
    storeName: 'AFC Pigcawayan',
    storeBuilding: '',
    storeStreet: 'Datu Piang Street',
    storeCity: 'Pigcawayan',
    storeProvince: 'Cotabato',
    storeRegion: 'Region 12',
    storeOpenHour: '6:00',
    storeCloseHour: '9:00',
    storeMapLink: 'https://maps.app.goo.gl/Z1TEiv5nL6jmTSgH8'
  },
  {
    storeName: 'AFC Awang',
    storeBuilding: '',
    storeStreet: 'Awang',
    storeCity: 'Datu Odin Sinsuat',
    storeProvince: 'Maguindanao del Norte',
    storeRegion: 'BARMM',
    storeOpenHour: '8:00',
    storeCloseHour: '8:30',
    storeMapLink: 'https://maps.app.goo.gl/2JU8K4ckKW3aK3s38'
  },
  {
    storeName: 'AFC ORC',
    storeBuilding: '',
    storeStreet: 'Gov. Gutierrez Avenue',
    storeCity: 'Cotabato City',
    storeProvince: 'Maguindanao del Norte',
    storeRegion: 'BARMM',
    storeOpenHour: '8:00',
    storeCloseHour: '8:30',
    storeMapLink: 'https://maps.app.goo.gl/BDBeouEk2Tf99K1J7'
  },
  {
    storeName: 'AFC Town',
    storeBuilding: '',
    storeStreet: 'Sinsuat Avenue',
    storeCity: 'Cotabato City',
    storeProvince: 'Maguindanao del Norte',
    storeRegion: 'BARMM',
    storeOpenHour: '8:00',
    storeCloseHour: '8:30',
    storeMapLink: 'https://maps.app.goo.gl/rvixe8eb4ZTCevZu6'
  },
  {
    storeName: 'AFC Davao',
    storeBuilding: '',
    storeStreet: 'Rose Street',
    storeCity: 'Davao City',
    storeProvince: 'Davao del Sur',
    storeRegion: 'Region 11',
    storeOpenHour: '8:00',
    storeCloseHour: '8:30',
    storeMapLink: 'https://maps.app.goo.gl/qQ5aEcrQd1G7Ewhc7'
  },
]


export const jobOpeningsData = [
  {
    id: '1',
    title: "Accounting Supervisor",
    branch: "AFC Home",
    jobBadges: ["full-time", "Php 30,000 a month", "HMO", "Pay-raise", "Car Insurance", "30 days paid leave"],
    fullDescription: "The Accounting/Finance Supervisor will oversee financial operations, including closing processes, reconciliations, financial reporting, cash flow, tax compliance, and daily finance activities. The role will also support management in financial decision-making, improve financial systems and controls, and maintain accurate and confidential financial records. Candidates should have a bachelor’s degree in accounting, finance, or a related field, with at least 2–3 years of relevant experience. Strong analytical, organizational, communication, and problem-solving skills, along with proficiency in Microsoft Office and accounting software, are required.",
    responsibilities: [
      "Performs the month-end and year-end closing processes. Oversee the timely and proper closing of financial books at the end of each reporting period.",
      "Review bank reconciliations, adjusting journal entries, and supporting documentation to verify validity and accuracy of data.",
      "Manage and maintain accurate company financial records and accounting documents.",
      "Handle accounts payable, accounts receivable, audits payroll, and other financial transactions.",
      "Prepare financial statements, reports, budgets, and cash flow monitoring.",
      "Monitor the company's income, expenses, and overall financial performance."
    ],
    qualifications: [
      "Bachelor’s Degree in Accountancy, Accounting Technology, Financial Management, Business Administration, or any related course.",
      "At least 2–3 years of experience in accounting, finance, bookkeeping, or related work.",
      "Experience in taxation, bookkeeping, reconciliation, and other accounting works.",
      "Experience in handling accounts payable, accounts receivable, payroll, and financial reporting is preferred.",
      "Knowledge of accounting principles, financial reporting, and taxation.",
      "Proficient in Microsoft Office applications, particularly Excel."
    ]
  },
  {
    id: '2',
    title: "Team Leader",
    branch: "AFC Market",
    jobBadges: ["full-time", "Php 30,000 a month"],
    fullDescription: "hehehe",
    responsibilities: [],
    qualifications: []
  },
  {
    id: '3',
    title: "Operations Specialist",
    branch: "AFC Davao",
    jobBadges: ["part-time"],
    fullDescription: "",
    responsibilities: [],
    qualifications: []
  },
  {
    id: '4',
    title: "Team Leader",
    branch: "AFC Market",
    jobBadges: ["full-time", "Php 30,000 a month"],
    fullDescription: "",
    responsibilities: [],
    qualifications: []
  },
  {
    id: '5',
    title: "Operations Specialist",
    branch: "AFC Davao",
    jobBadges: ["part-time"],
    fullDescription: "",
    responsibilities: [],
    qualifications: []
  },
  {
    id: '6',
    title: "Team Leader",
    branch: "AFC Market",
    jobBadges: ["full-time", "Php 30,000 a month"],
    fullDescription: "",
    responsibilities: [],
    qualifications: []
  },
  
]


export type BlogsType = {
  id: number;
  category: string;
  featured?: boolean;
  title: string;
  date: string;
  image: string;
  alt: string;
  link: string;
  content: ReactNode[];
  summary?: string[];
}

export const blogsData: BlogsType[] = [
  {
    id: 0,
    category: 'News',
    featured: true,
    title: 'AFC Opens Newest Branch in Pigcawayan, Cotabato',
    date: 'July 22, 2026',
    image: '/assets/images/blogs/blog-pigcawayan-opening.webp',
    alt: 'Pigcawayan Opening',
    link: '/blogs',
    content: [
      "A new chapter in the AFC journey began with the opening of AFC Pigcawayan, bringing the brand’s signature Sulit Sarap experience to the community of Pigcawayan, North Cotabato. Located along Datu Piang Street in Poblacion 3, right beside the Municipal Plaza, the newest AFC branch welcomed customers eager to enjoy their favorite fried chicken and other well-loved menu items.",
      "The opening was made even more special with exciting treats and giveaways for the community. As part of the opening celebration, the first 500 customers received free macaroni salad, adding an extra treat to their Sulit Sarap experience. The warm response from the community was evident as customers filled the store, creating an energetic and memorable opening day for the AFC team and everyone who came to celebrate with us.",
      "More than just the opening of another restaurant, AFC Pigcawayan represents another step in AFC’s continued growth across Mindanao. Every new branch gives us the opportunity to serve more communities, create new experiences for customers, and strengthen our presence as a growing homegrown food brand. The support shown by the people of Pigcawayan is a reminder of why AFC continues to move forward.",
      "For aspiring entrepreneurs, the growth of AFC also presents an opportunity to become part of the journey. With a growing brand, established products, and a franchise system designed to support partners, AFC welcomes individuals who are ready to explore the possibility of opening their own AFC store in selected areas across Mindanao.",
      "As AFC Pigcawayan begins its journey, we look forward to more communities discovering the taste and value of Sulit Sarap. Whether you're a longtime AFC customer or an entrepreneur looking for your next business opportunity, there is always room to be part of the AFC story—and perhaps, the next AFC branch could be yours."
    ],
    summary: ["A new chapter in the AFC journey began with the opening of AFC Pigcawayan, bringing the brand’s signature Sulit Sarap experience to the community of Pigcawayan, North Cotabato. Located along Datu Piang Street in Poblacion 3, right beside the Municipal Plaza, the newest AFC branch welcomed customers eager to enjoy their favorite fried chicken and other well-loved menu items.",
      "The opening was made even more special with exciting treats and giveaways for the community. As part of the opening celebration, the first 500 customers received free macaroni salad, adding an extra treat to their Sulit Sarap experience. The warm response..."
    ]
  },
  {
    id: 1,
    category: 'News',
    title: 'AFC Year 2025 Highlights',
    date: 'December 14, 2025',
    image: '/assets/images/blogs/blog-2025-highlights.webp',
    alt: 'Year 2025 Highlights',
    link: '/blogs',
    content: [
      "The year 2025 marked another meaningful chapter in the journey of Arthur’s Fried Chicken. More than just milestones and dates, it was a year defined by people, growth, and a shared commitment to delivering Sulit Sarap experiences across every AFC branch. From celebrating long-serving team members to expanding our footprint and investing in leadership development, each moment reflected AFC’s dedication to building a stronger organization from the inside out.",
      "The year began on a high note in January with the Annual Employee Service Award Ceremony. This event honored the loyalty, dedication, and hard work of AFC employees who have consistently contributed to the company’s success. Recognizing service milestones reinforced AFC’s belief that its people are its greatest asset. The ceremony served as a reminder that sustainable growth starts with valuing those who make daily operations possible.",
      "May was a month of celebration and renewal. AFC Poblacion 3 marked its first anniversary, celebrating a year of serving the community with quality meals and consistent service. The milestone highlighted the branch’s steady growth and the strong support it has received from loyal customers. In the same month, AFC City Plaza officially reopened its doors, signaling a fresh start and renewed commitment to delivering the AFC experience. The reopening reflected resilience, adaptability, and AFC’s ability to move forward stronger after challenges.",
      "September brought another major milestone with the grand opening of AFC Poblacion 8 Home. Designed to serve as both a community hub and a symbol of AFC’s expanding presence, the new branch welcomed customers with excitement, giveaways, and the familiar taste that AFC is known for. The opening underscored the brand’s continued growth while staying rooted in its hometown of Midsayap, North Cotabato.",
      "The year concluded with a strong focus on people development through the Leadership Development Training held in November. This initiative brought together key personnel to strengthen leadership skills, align values, and prepare teams for the future. By investing in leadership and continuous learning, AFC reinforced its long-term vision of building future-ready stores led by empowered and capable individuals.",
      "Looking back, 2025 was a year that balanced expansion with reflection, celebration with responsibility, and growth with purpose. Every achievement—whether big or small—was made possible by the collective effort of AFC’s employees, partners, franchisees, and customers. As AFC moves forward, the lessons and successes of 2025 serve as a solid foundation for even greater milestones ahead.",
      "Arthur’s Fried Chicken remains committed to its mission of delivering quality food, meaningful experiences, and opportunities for growth—one branch, one team, and one community at a time."
    ]
  },
  {
    id: 2,
    category: 'Development',
    title: "Building Stronger Leaders, Stronger Stores: AFC’s Ongoing Development Journey",
    date: 'December 9, 2025',
    image: '/assets/images/blogs/blog-building-stronger.webp',
    alt: 'Building Leaders',
    link: '/blogs',
    content: [
      "Arthur’s Fried Chicken (AFC) continues to rise not only through the growing number of branches across the country, but through the ongoing transformation of the people who make each store come alive. Our recent Development Journeys, conducted for key personnel in AFC Cotabato, AFC Midsayap, and other branches, reflect a deeper commitment within the brand: to cultivate leadership, encourage continuous learning, and strengthen the systems that support long-term business success.",
      "These development sessions go beyond simple training. They are designed to empower our managers, supervisors, and store leaders to understand their roles on a deeper level, take ownership of their growth, and lead their teams with purpose. As representatives of the AFC brand, our leaders carry the responsibility of delivering consistent quality, strong service, and the familiar “Sulit Sarap” experience that customers expect. The Development Journey reinforces this by helping them refine their communication, decision-making, and professionalism. When leaders grow, the performance and culture of the entire store grow with them.",
      "AFC has always believed that learning never stops, and the Development Journey strengthens this culture of continuous improvement. Through guided discussions, evaluations, and hands-on coaching, participants are encouraged to look at their daily operations with fresh eyes and identify how they can further elevate teamwork, efficiency, and customer experience. This mindset of constant growth doesn’t just improve today’s performance—it safeguards the stability and quality of AFC branches in the future.",
      "As the brand expands, maintaining excellence across all locations becomes even more essential. The Development Journeys aim to prepare personnel not only for current expectations but also for the challenges ahead. Leaders learn to adapt to changing customer needs, manage increasing demands, and stay consistent in upholding store standards. In doing so, they help future-proof their branches and strengthen AFC’s reputation as a reliable and fast-growing fast-food business.",
      "More than anything, these development efforts highlight the heart of AFC: a family of people striving together to improve, serve, and grow. Seeing motivated teams embrace learning and leadership reminds us that AFC’s success is rooted in its people. By investing in their growth today, we are securing a stronger, more capable, and more united AFC for tomorrow."
    ]
  },
  {
    id: 3,
    category: 'Franchising',
    title: "How to become a successful franchise owner in 7-steps",
    date: 'January 7, 2026',
    image: '/assets/images/blogs/blog-successful-franchise.webp',
    alt: 'Owning a Franchise in 7 steps',
    link: '/blogs',
    content: ['Becoming a successful franchise owner isn’t just about signing a contract — it’s about choosing the right brand, learning the system, and growing into a capable leader who can run a thriving business. In the case of Arthur’s Fried Chicken (AFC), franchise success comes from combining proven systems with local insight, strong people management, and consistent quality that keeps customers coming back. The steps below outline what aspiring franchisees need to understand and master in order to build a future-proof, profitable AFC branch in their community.',
      "1. Choose the right franchise fit",
      "Pick a franchisor and concept that match your goals, values, and local market. For AFC: make sure the neighborhood’s foot traffic, eating habits, and price sensitivity match AFC’s value-meal positioning. Choosing the right fit early saves time and money later.",
      "2. Do deep due diligence",
      "Carefully review franchise documents (contracts, fees, obligations), interview current franchisees, and verify the franchisor’s support structure and reputation. Ask for performance data and references.",
      "3. Secure proper financing & understand costs",
      "Know all upfront and ongoing costs (franchise fee, buildout, equipment, working capital, royalties) and arrange financing before committing. Build conservative financial projections that include slow-start months.",
      "4. Commit to training and follow the system",
      "Successful franchisees follow the brand’s operating system consistently. Use franchisor training, checklists, and SOPs to keep consistency (food quality, service, and cleanliness). ",
      "5. Build a strong local team & lead well",
      "Your people make or break day-to-day operations. Hire dependable staff, invest in leadership development (managers/supervisors), and keep morale and performance high. Good leadership directly improves customer experience and retention.",
      "6. Master local marketing & community ties",
      "Drive customers through opening promotions, localized social media, community events, and partnerships (schools, offices, markets). Word-of-mouth in smaller cities/towns is huge — be visible and generous with samples/promos at launch.",
      "7. Measure, adapt, and lean on franchisor support",
      "Track sales, costs, and customer feedback. If something’s off, adapt quickly (menu tweaks, staffing changes, local promos). Maintain close communication with AFC HQ for supply, ops, and marketing help — don’t go it alone."
    ]
  },

]
