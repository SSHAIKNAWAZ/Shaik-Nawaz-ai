import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shaik Nawaz
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-200">
            AI Engineer | Data Scientist | Generative AI Enthusiast
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Passionate about leveraging AI & ML to drive real-world impact through innovative solutions and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("#freelance")}
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
