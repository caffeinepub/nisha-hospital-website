import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Microscope, Briefcase, Palette, Heart, Code } from 'lucide-react';

const programs = [
  {
    icon: Code,
    category: 'STEM',
    title: 'Computer Science',
    description: 'Software engineering, AI, cybersecurity, and data science.',
    degrees: ['BS', 'MS', 'PhD'],
  },
  {
    icon: Microscope,
    category: 'STEM',
    title: 'Biology',
    description: 'Molecular biology, ecology, genetics, and pre-medical studies.',
    degrees: ['BS', 'MS'],
  },
  {
    icon: Briefcase,
    category: 'Business',
    title: 'Business Administration',
    description: 'Management, marketing, finance, and entrepreneurship.',
    degrees: ['BBA', 'MBA'],
  },
  {
    icon: Briefcase,
    category: 'Business',
    title: 'Economics',
    description: 'Microeconomics, macroeconomics, and econometrics.',
    degrees: ['BA', 'MS'],
  },
  {
    icon: Palette,
    category: 'Arts',
    title: 'Fine Arts',
    description: 'Painting, sculpture, digital media, and art history.',
    degrees: ['BFA', 'MFA'],
  },
  {
    icon: BookOpen,
    category: 'Arts',
    title: 'English Literature',
    description: 'Creative writing, literary analysis, and rhetoric.',
    degrees: ['BA', 'MA'],
  },
  {
    icon: Heart,
    category: 'Health',
    title: 'Nursing',
    description: 'Clinical practice, healthcare management, and research.',
    degrees: ['BSN', 'MSN'],
  },
  {
    icon: Microscope,
    category: 'Health',
    title: 'Public Health',
    description: 'Epidemiology, health policy, and community health.',
    degrees: ['BS', 'MPH'],
  },
  {
    icon: BookOpen,
    category: 'Social Sciences',
    title: 'Psychology',
    description: 'Clinical, cognitive, developmental, and social psychology.',
    degrees: ['BA', 'MS', 'PhD'],
  },
  {
    icon: BookOpen,
    category: 'Social Sciences',
    title: 'Political Science',
    description: 'American politics, international relations, and public policy.',
    degrees: ['BA', 'MA'],
  },
  {
    icon: Code,
    category: 'STEM',
    title: 'Engineering',
    description: 'Mechanical, electrical, civil, and chemical engineering.',
    degrees: ['BS', 'MS'],
  },
  {
    icon: Palette,
    category: 'Arts',
    title: 'Music',
    description: 'Performance, composition, music education, and theory.',
    degrees: ['BM', 'MM'],
  },
];

const categories = ['All', 'STEM', 'Business', 'Arts', 'Health', 'Social Sciences'];

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Academic Programs
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover over 150 undergraduate and graduate programs designed to prepare you for
              success in your chosen field.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="container section-spacing">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold">Explore Our Programs</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find the perfect program to match your interests and career goals
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.title} className="transition-shadow hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{program.category}</Badge>
                </div>
                <CardTitle className="font-serif">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {program.degrees.map((degree) => (
                    <Badge key={degree} variant="outline">
                      {degree}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="bg-muted/30">
        <div className="container section-spacing">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Academic Excellence</h2>
              <p className="text-muted-foreground mb-4">
                At Heritage College, we believe in providing a transformative educational experience
                that combines rigorous academics with hands-on learning opportunities.
              </p>
              <p className="text-muted-foreground mb-4">
                Our distinguished faculty are leaders in their fields, bringing cutting-edge research
                and real-world experience into the classroom. With a student-to-faculty ratio of 15:1,
                you'll receive personalized attention and mentorship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Small class sizes for personalized learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Research opportunities for undergraduate students</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Internship and co-op programs with leading organizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Study abroad programs in over 30 countries</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Honors Program</CardTitle>
                  <CardDescription>
                    Challenge yourself with advanced coursework and exclusive research opportunities
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Interdisciplinary Studies</CardTitle>
                  <CardDescription>
                    Design your own major by combining courses from multiple departments
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Professional Development</CardTitle>
                  <CardDescription>
                    Career counseling, resume workshops, and networking events
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold">Academic Departments</h2>
          <p className="mt-4 text-muted-foreground mb-12">
            Our programs are organized into six colleges, each offering a range of majors and
            concentrations.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">College of Arts & Sciences</CardTitle>
                <CardDescription>Humanities, social sciences, and natural sciences</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">School of Business</CardTitle>
                <CardDescription>Business administration, economics, and finance</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">College of Engineering</CardTitle>
                <CardDescription>All major engineering disciplines and computer science</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">School of Health Sciences</CardTitle>
                <CardDescription>Nursing, public health, and allied health programs</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">College of Fine Arts</CardTitle>
                <CardDescription>Visual arts, music, theater, and dance</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">School of Education</CardTitle>
                <CardDescription>Teacher preparation and educational leadership</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
