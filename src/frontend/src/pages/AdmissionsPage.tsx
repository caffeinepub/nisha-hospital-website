import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, FileText, Calendar, DollarSign, ArrowRight } from 'lucide-react';

const admissionSteps = [
  {
    icon: FileText,
    title: 'Submit Application',
    description: 'Complete our online application form with your personal and academic information.',
  },
  {
    icon: FileText,
    title: 'Transcripts & Test Scores',
    description: 'Send official high school transcripts and standardized test scores (SAT/ACT).',
  },
  {
    icon: FileText,
    title: 'Letters of Recommendation',
    description: 'Provide two letters of recommendation from teachers or counselors.',
  },
  {
    icon: CheckCircle2,
    title: 'Review & Decision',
    description: 'Our admissions team reviews your application and notifies you of the decision.',
  },
];

const requirements = [
  'High school diploma or equivalent',
  'Minimum 3.0 GPA (on a 4.0 scale)',
  'SAT score of 1200+ or ACT score of 24+',
  'Personal essay (500-750 words)',
  'Two letters of recommendation',
  'Official transcripts from all schools attended',
];

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Admissions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Begin your journey to academic excellence. We're here to guide you through every
              step of the application process.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="container section-spacing">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold">Application Deadlines</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Important dates for the 2026-2027 academic year
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-serif">Early Decision</CardTitle>
              <CardDescription>November 1, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Binding commitment for students who have Heritage College as their first choice.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-serif">Regular Decision</CardTitle>
              <CardDescription>January 15, 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Standard application deadline for fall semester admission.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-serif">Transfer Students</CardTitle>
              <CardDescription>Rolling Admissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Applications accepted year-round for transfer students.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-muted/30">
        <div className="container section-spacing">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold">Application Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Four simple steps to join Heritage College
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step, index) => (
              <Card key={step.title}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="container section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">Admission Requirements</h2>
            <p className="text-muted-foreground mb-8">
              We seek students who demonstrate academic excellence, intellectual curiosity, and
              a commitment to personal growth. Here's what we look for:
            </p>
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">Financial Aid</h2>
            <Card className="mb-6">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-serif">Scholarships & Aid</CardTitle>
                <CardDescription>
                  Over 85% of our students receive some form of financial assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Merit-based scholarships</li>
                  <li>• Need-based grants</li>
                  <li>• Federal student loans</li>
                  <li>• Work-study programs</li>
                </ul>
              </CardContent>
            </Card>
            <p className="text-muted-foreground mb-4">
              Complete the FAFSA (Free Application for Federal Student Aid) to be considered for
              all types of financial aid. Our financial aid office is here to help you navigate
              the process.
            </p>
            <Button variant="outline">Learn More About Financial Aid</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-primary text-primary-foreground">
        <div className="container section-spacing-sm text-center">
          <h2 className="font-serif text-3xl font-bold">Questions About Admissions?</h2>
          <p className="mt-4 text-lg opacity-90">
            Our admissions team is ready to help you with any questions about the application process.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link to="/contact">Contact Admissions</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
