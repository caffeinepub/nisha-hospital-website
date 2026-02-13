import ContactForm from '../components/contact/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We're here to answer your questions and help you on your journey to Heritage College
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <CardTitle className="font-serif text-lg">Address</CardTitle>
                        <CardDescription className="mt-1">
                          Heritage College<br />
                          123 University Avenue<br />
                          Heritage City, HC 12345
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <CardTitle className="font-serif text-lg">Phone</CardTitle>
                        <CardDescription className="mt-1">
                          Main: (555) 123-4567<br />
                          Admissions: (555) 123-4568<br />
                          Financial Aid: (555) 123-4569
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <CardTitle className="font-serif text-lg">Email</CardTitle>
                        <CardDescription className="mt-1">
                          General: info@heritagecollege.edu<br />
                          Admissions: admissions@heritagecollege.edu<br />
                          Support: support@heritagecollege.edu
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <CardTitle className="font-serif text-lg">Office Hours</CardTitle>
                        <CardDescription className="mt-1">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Visit Campus</h3>
              <p className="text-muted-foreground mb-4">
                Experience Heritage College firsthand! Schedule a campus tour to explore our
                facilities, meet faculty and students, and get a feel for campus life.
              </p>
              <p className="text-sm text-muted-foreground">
                Tours are available Monday through Friday at 10:00 AM and 2:00 PM, and Saturdays
                at 10:00 AM. Please contact our admissions office to schedule your visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
