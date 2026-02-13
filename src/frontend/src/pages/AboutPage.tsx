import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue the highest standards in teaching, research, and service.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We embrace new ideas and approaches to solve complex challenges.',
  },
  {
    icon: Eye,
    title: 'Integrity',
    description: 'We uphold honesty, transparency, and ethical conduct in all we do.',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'We foster an inclusive environment where everyone belongs and thrives.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Heritage College
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              For over 130 years, Heritage College has been a beacon of academic excellence,
              innovation, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="container section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Our History</h2>
            <p className="text-muted-foreground">
              Founded in 1892, Heritage College began as a small liberal arts institution with a
              vision to provide accessible, high-quality education to students from all backgrounds.
            </p>
            <p className="text-muted-foreground">
              Over the decades, we have grown into a comprehensive university offering over 150
              undergraduate and graduate programs across diverse fields of study. Our commitment to
              academic rigor, research excellence, and student success has remained unwavering.
            </p>
            <p className="text-muted-foreground">
              Today, Heritage College stands as a testament to the power of education to transform
              lives and communities. Our alumni have gone on to become leaders in business, science,
              arts, public service, and countless other fields.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              Heritage College is dedicated to fostering intellectual curiosity, critical thinking,
              and ethical leadership. We prepare students to thrive in a rapidly changing world
              through innovative teaching, groundbreaking research, and meaningful community engagement.
            </p>
            <h3 className="font-serif text-2xl font-bold mt-8">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a globally recognized institution that empowers students to become compassionate
              leaders, creative problem-solvers, and engaged citizens who make positive contributions
              to society.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30">
        <div className="container section-spacing">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold">Leadership</h2>
          <p className="mt-4 text-muted-foreground">
            Our dedicated leadership team brings decades of experience in higher education,
            research, and administration. Together, they guide Heritage College toward a future
            of continued excellence and innovation.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Dr. Margaret Chen</CardTitle>
                <CardDescription>President</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leading Heritage College with vision and dedication since 2018
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Dr. James Rodriguez</CardTitle>
                <CardDescription>Provost & Vice President for Academic Affairs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Overseeing academic excellence and faculty development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container section-spacing-sm">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl font-bold">Accreditation</h2>
            <p className="mt-4 text-muted-foreground">
              Heritage College is accredited by the Higher Learning Commission and maintains
              specialized accreditations for programs in business, engineering, education, and
              health sciences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
