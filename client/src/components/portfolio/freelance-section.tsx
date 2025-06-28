import { Button } from "@/components/ui/button";

export default function FreelanceSection() {
  const services = [
    {
      icon: "🤖",
      title: "AI Chatbot Development",
      description: "Custom PDF, FAQ, and Website-integrated chatbots using LangChain + OpenAI + FAISS"
    },
    {
      icon: "🧠",
      title: "NLP Applications",
      description: "Sentiment analysis, summarization, classification, keyword extraction, NER"
    },
    {
      icon: "🗃️",
      title: "PDF QA Bots",
      description: "Ask questions from PDF documents using LLMs"
    },
    {
      icon: "📊",
      title: "Data Analysis & Visualization",
      description: "Using Pandas, Matplotlib, Seaborn for EDA and storytelling"
    },
    {
      icon: "📈",
      title: "ML Model Training",
      description: "Classification, regression, and recommendation models (Scikit-learn, XGBoost)"
    },
    {
      icon: "📦",
      title: "Streamlit App Deployment",
      description: "Build & deploy interactive ML dashboards"
    },
    {
      icon: "🎯",
      title: "Generative AI Projects",
      description: "Text generation, summarization, GPT-3.5 & Transformers integration"
    },
    {
      icon: "🔬",
      title: "Computer Vision",
      description: "Real-time gesture detection, image classification (OpenCV, TensorFlow)"
    },
    {
      icon: "🧾",
      title: "Resume Parser & Job Matching AI",
      description: "NLP-based recruitment tools"
    },
    {
      icon: "🧪",
      title: "Healthcare & Finance AI",
      description: "Fraud detection, medical AI, churn analysis"
    },
    {
      icon: "🌐",
      title: "API Integration",
      description: "Connect AI models with external tools via API"
    },
    {
      icon: "📚",
      title: "AI Mentoring / Project Guidance",
      description: "Help students and startups build AI tools"
    }
  ];

  return (
    <section id="freelance" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Freelance AI/ML Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            As an AI Freelancer, I offer a wide range of services to startups, businesses, and individuals. 
            I help clients solve real-world problems using LLMs, NLP, ML, and cutting-edge AI tools to deliver 
            innovative solutions that drive business growth and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-3xl mr-4 mt-1">
                {service.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Platform Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold"
            asChild
          >
            <a href="https://www.fiverr.com/users/shaiknawaz2431/seller_dashboard" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt mr-2"></i>
              Hire Me on Fiverr
            </a>
          </Button>
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 font-semibold"
            asChild
          >
            <a href="https://www.upwork.com/freelancers/~01024d753dd5cfd91b?mp_source=share" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt mr-2"></i>
              Hire Me on Upwork
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
