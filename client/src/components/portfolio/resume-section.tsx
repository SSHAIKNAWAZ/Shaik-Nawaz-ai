import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Download my complete resume to learn more about my experience, skills, and achievements in AI and data science.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold"
            asChild
          >
            <a href="/resume.pdf" download>
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
