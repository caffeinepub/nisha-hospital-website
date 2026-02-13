import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Trophy, Home, Heart, Music, Dumbbell } from 'lucide-react';

const lifeAspects = [
  {
    icon: Users,
    title: 'Student Organizations',
    description: 'Over 200 clubs and organizations covering academic, cultural, recreational, and service interests.',
    highlights: [
      'Student Government Association',
      'Greek Life (fraternities & sororities)',
      'Academic honor societies',
      'Cultural and identity-based groups',
    ],
  },
  {
    icon: Trophy,
    title: 'Athletics',
    description: 'Compete at the NCAA Division II level or join intramural and club sports.',
    highlights: [
      '18 varsity sports teams',
      'State-of-the-art athletic facilities',
      'Intramural leagues for all skill levels',
      'Fitness and wellness programs',
    ],
  },
  {
    icon: Home,
    title: 'Housing & Dining',
    description: 'Modern residence halls and diverse dining options create a comfortable home away from home.',
    highlights: [
      'Traditional and suite-style residence halls',
      'Living-learning communities',
      'Multiple dining halls with varied cuisines',
      'Special dietary accommodations',
    ],
  },
  {
    icon: Heart,
    title: 'Student Support',
    description: 'Comprehensive services to support your academic success and personal well-being.',
    highlights: [
      'Academic advising and tutoring',
      'Counseling and mental health services',
      'Career development center',
      'Health and wellness center',
    ],
  },
  {
    icon: Music,
    title: 'Arts & Culture',
    description: 'Experience a vibrant arts scene with performances, exhibitions, and cultural events.',
    highlights: [
      'Concert series and theater productions',
      'Art galleries and exhibitions',
      'Film screenings and lectures',
      'Cultural festivals and celebrations',
    ],
  },
  {
    icon: Dumbbell,
    title: 'Recreation',
    description: 'Stay active and have fun with our extensive recreational facilities and programs.',
    highlights: [
      'Modern recreation center',
      'Swimming pool and fitness studios',
      'Outdoor adventure programs',
      'Wellness classes and workshops',
    ],
  },
];

export default function CampusLifePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Campus Life
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Life at Heritage College extends far beyond the classroom. Discover a vibrant
              community where you can explore your passions, make lifelong friends, and create
              unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Life Aspects */}
      <section className="container section-spacing">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {lifeAspects.map((aspect) => (
            <Card key={aspect.title} className="transition-shadow hover:shadow-elegant">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <aspect.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">{aspect.title}</CardTitle>
                <CardDescription>{aspect.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {aspect.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Engagement */}
      <section className="bg-muted/30">
        <div className="container section-spacing">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Community Engagement</h2>
              <p className="text-muted-foreground mb-4">
                At Heritage College, we believe in the power of service and civic engagement.
                Our students contribute thousands of hours each year to local and global communities.
              </p>
              <p className="text-muted-foreground mb-6">
                Through service-learning courses, volunteer programs, and community partnerships,
                you'll have opportunities to make a real difference while developing valuable skills
                and perspectives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Alternative break programs (spring and winter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Community service day (annual tradition)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Partnerships with local nonprofits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>International service opportunities</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Leadership Development</CardTitle>
                  <CardDescription>
                    Build leadership skills through workshops, retreats, and hands-on experiences
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Diversity & Inclusion</CardTitle>
                  <CardDescription>
                    Celebrate diversity through cultural events, dialogue programs, and inclusive spaces
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Sustainability Initiatives</CardTitle>
                  <CardDescription>
                    Join efforts to create a more sustainable campus and community
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Traditions */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Campus Traditions</h2>
          <p className="text-muted-foreground mb-12">
            Heritage College has a rich history of traditions that bring our community together
            and create lasting memories.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Convocation</CardTitle>
                <CardDescription>
                  Welcome ceremony marking the beginning of the academic year
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Homecoming Week</CardTitle>
                <CardDescription>
                  Alumni return for a week of celebrations, games, and reunions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Spring Fest</CardTitle>
                <CardDescription>
                  Outdoor festival with music, food, and activities to celebrate spring
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Commencement</CardTitle>
                <CardDescription>
                  Graduation ceremony celebrating the achievements of our graduates
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
