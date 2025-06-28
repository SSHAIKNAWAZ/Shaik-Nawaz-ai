import { Button } from "@/components/ui/button";

export default function FreelanceSection() {
  const services = [
    {
      title: "AI Chatbot Development",
      description: "PDF/FAQ chatbots with LangChain and OpenAI",
      icon: "fas fa-robot"
    },
    {
      title: "NLP Applications",
      description: "Text analysis, summarization, and processing",
      icon: "fas fa-language"
    },
    {
      title: "Streamlit App Deployment",
      description: "Interactive web applications and dashboards",
      icon: "fas fa-rocket"
    },
    {
      title: "ML Model Training",
      description: "Custom machine learning solutions",
      icon: "fas fa-brain"
    }
  ];

  return (
    <section id="freelance" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Freelance Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer professional AI/ML services on Fiverr and Upwork, helping clients build intelligent solutions 
            for their business needs with cutting-edge technology and proven expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${service.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Platform Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold"
            asChild
          >
            <a href="https://www.fiverr.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt mr-2"></i>
              Hire Me on Fiverr
            </a>
          </Button>
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 font-semibold"
            asChild
          >
            <a href="https://www.upwork.com/freelancers/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt mr-2"></i>
              Hire Me on Upwork
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
