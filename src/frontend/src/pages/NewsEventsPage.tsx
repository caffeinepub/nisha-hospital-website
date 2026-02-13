import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin } from 'lucide-react';
import { newsItems, upcomingEvents } from '../data/newsEventsSeed';

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              News & Events
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Stay connected with the latest happenings at Heritage College
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container section-spacing">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* News Section */}
          <div id="news">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold">Latest News</h2>
              <p className="mt-2 text-muted-foreground">
                Recent updates and announcements from our campus community
              </p>
            </div>
            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="transition-shadow hover:shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                    <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.summary}</CardDescription>
                  </CardHeader>
                  {item.category && (
                    <CardContent>
                      <Badge variant="secondary">{item.category}</Badge>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div id="events">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold">Upcoming Events</h2>
              <p className="mt-2 text-muted-foreground">
                Mark your calendar for these exciting campus events
              </p>
            </div>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="transition-shadow hover:shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {event.date} • {event.time}
                    </div>
                    <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-base">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                    {event.category && (
                      <Badge variant="secondary" className="mt-3">
                        {event.category}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container section-spacing-sm text-center">
          <h2 className="font-serif text-2xl font-bold">Stay Informed</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, event announcements, and
            updates from Heritage College directly in your inbox.
          </p>
        </div>
      </section>
    </div>
  );
}
