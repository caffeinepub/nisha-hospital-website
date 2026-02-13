export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category?: string;
}

export interface Event {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  category?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    date: 'February 8, 2026',
    title: 'Heritage College Receives $5M Grant for STEM Research',
    summary:
      'The National Science Foundation has awarded Heritage College a $5 million grant to expand research facilities and support undergraduate research opportunities in science, technology, engineering, and mathematics.',
    category: 'Research',
  },
  {
    id: 'news-2',
    date: 'February 5, 2026',
    title: 'New Sustainability Initiative Launches on Campus',
    summary:
      'Heritage College announces a comprehensive sustainability plan aimed at achieving carbon neutrality by 2030. The initiative includes solar panel installations, enhanced recycling programs, and sustainable dining options.',
    category: 'Campus Life',
  },
  {
    id: 'news-3',
    date: 'February 1, 2026',
    title: 'Alumni Spotlight: Dr. Sarah Johnson Named to Forbes 30 Under 30',
    summary:
      'Heritage College alumna Dr. Sarah Johnson (Class of 2020) has been recognized by Forbes magazine for her groundbreaking work in biomedical engineering. She credits her undergraduate research experience at Heritage for launching her career.',
    category: 'Alumni',
  },
  {
    id: 'news-4',
    date: 'January 28, 2026',
    title: 'Record Number of Applications for Fall 2026',
    summary:
      'Heritage College has received over 18,000 applications for the Fall 2026 semester, marking a 15% increase from last year. The admissions office attributes the growth to enhanced academic programs and campus facilities.',
    category: 'Admissions',
  },
  {
    id: 'news-5',
    date: 'January 25, 2026',
    title: 'New Partnership with Tech Industry Leaders',
    summary:
      'Heritage College announces partnerships with leading technology companies to provide internship opportunities, mentorship programs, and career pathways for computer science and engineering students.',
    category: 'Academics',
  },
];

export const upcomingEvents: Event[] = [
  {
    id: 'event-1',
    date: 'February 15, 2026',
    time: '7:00 PM',
    title: 'Spring Concert Series: Jazz Ensemble Performance',
    description:
      'Join us for an evening of exceptional jazz music performed by our talented student musicians and guest artists.',
    location: 'Heritage Auditorium',
    category: 'Arts',
  },
  {
    id: 'event-2',
    date: 'February 20, 2026',
    time: '6:00 PM',
    title: 'Career Fair 2026',
    description:
      'Meet with representatives from over 100 companies and organizations seeking to hire Heritage College students and alumni.',
    location: 'Student Union Ballroom',
    category: 'Career',
  },
  {
    id: 'event-3',
    date: 'February 25, 2026',
    time: '4:00 PM',
    title: 'Guest Lecture: The Future of Artificial Intelligence',
    description:
      'Renowned AI researcher Dr. Michael Chen will discuss the latest developments in artificial intelligence and their implications for society.',
    location: 'Science Building, Room 101',
    category: 'Academic',
  },
  {
    id: 'event-4',
    date: 'March 1, 2026',
    time: '10:00 AM',
    title: 'Prospective Student Open House',
    description:
      'Explore our campus, meet faculty and current students, and learn about academic programs and student life at Heritage College.',
    location: 'Campus-wide',
    category: 'Admissions',
  },
  {
    id: 'event-5',
    date: 'March 5, 2026',
    time: '7:30 PM',
    title: 'Theater Production: A Midsummer Night\'s Dream',
    description:
      'The Heritage College Theater Department presents Shakespeare\'s beloved comedy. Tickets available at the box office.',
    location: 'Performing Arts Center',
    category: 'Arts',
  },
  {
    id: 'event-6',
    date: 'March 10, 2026',
    time: '12:00 PM',
    title: 'International Food Festival',
    description:
      'Celebrate cultural diversity with food, music, and performances from around the world. Free admission for all students.',
    location: 'Campus Green',
    category: 'Cultural',
  },
];
