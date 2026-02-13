import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, BookOpen, Award, Calendar } from 'lucide-react';
import { newsItems, upcomingEvents } from '../data/newsEventsSeed';

const stats = [
  { label: 'Students Enrolled', value: '12,500+', icon: Users },
  { label: 'Academic Programs', value: '150+', icon: BookOpen },
  { label: 'Faculty Members', value: '800+', icon: Users },
  { label: 'Years of Excellence', value: '130+', icon: Award },
];

const featuredPrograms = [
  {
    title: 'Computer Science',
    description: 'Cutting-edge curriculum in AI, machine learning, and software engineering.',
    category: 'STEM',
  },
  {
    title: 'Business Administration',
    description: 'Comprehensive business education with real-world applications and internships.',
    category: 'Business',
  },
  {
    title: 'Liberal Arts',
    description: 'Interdisciplinary approach to humanities, social sciences, and creative arts.',
    category: 'Arts',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container section-spacing">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Applications Open for Fall 2026
              </Badge>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Shape Your Future at Heritage College
              </h1>
              <p className="text-lg text-muted-foreground">
                Join a community of scholars, innovators, and leaders. Experience academic excellence,
                vibrant campus life, and endless opportunities for growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/admissions">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-elegant">
              <img
                src="/assets/generated/campus-hero.dim_1600x600.png"
                alt="Heritage College Campus"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="container section-spacing">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our diverse range of academic programs designed for your success
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program) => (
            <Card key={program.title} className="transition-shadow hover:shadow-elegant">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {program.category}
                </Badge>
                <CardTitle className="font-serif">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/academics">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/academics">View All Programs</Link>
          </Button>
        </div>
      </section>

      {/* News & Events */}
      <section className="bg-muted/30">
        <div className="container section-spacing">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Latest News */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-serif text-3xl font-bold">Latest News</h2>
                <Button asChild variant="ghost">
                  <Link to="/news-events">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-6">
                {newsItems.slice(0, 3).map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                      <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
                      <CardDescription>{item.summary}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-serif text-3xl font-bold">Upcoming Events</h2>
                <Button asChild variant="ghost">
                  <Link to="/news-events">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-6">
                {upcomingEvents.slice(0, 3).map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {event.date} • {event.time}
                      </div>
                      <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                      <CardDescription>
                        {event.location}
                        <br />
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Teaser */}
      <section className="container section-spacing">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Experience Campus Life
            </h2>
            <p className="text-lg text-muted-foreground">
              From student organizations to athletics, cultural events to community service,
              Heritage College offers a vibrant campus experience that extends far beyond the classroom.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>Over 200 student clubs and organizations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>NCAA Division II athletics programs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>Modern residence halls and dining facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>Comprehensive student support services</span>
              </li>
            </ul>
            <Button asChild size="lg">
              <Link to="/campus-life">
                Explore Campus Life <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="font-serif">Student Organizations</CardTitle>
                <CardDescription>
                  Join clubs that match your interests and make lifelong connections
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Athletics</CardTitle>
                <CardDescription>Compete at the highest level</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Housing</CardTitle>
                <CardDescription>Modern, comfortable living spaces</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-primary text-primary-foreground">
        <div className="container section-spacing text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Take the first step toward an exceptional education and a bright future.
            Our admissions team is here to guide you through the process.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/admissions">Start Your Application</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
