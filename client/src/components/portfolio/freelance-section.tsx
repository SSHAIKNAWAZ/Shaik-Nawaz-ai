import { Button } from "@/components/ui/button";

export default function FreelanceSection() {
  const aiMlServices = [
    {
      icon: "🤖",
      title: "AI Chatbot Development",
      description: "Custom PDF, FAQ, and Website-integrated chatbots using LangChain, OpenAI, FAISS"
    },
    {
      icon: "🧠",
      title: "NLP Applications",
      description: "Sentiment analysis, summarization, classification, keyword extraction, and NER"
    },
    {
      icon: "🗃️",
      title: "PDF QA Bots",
      description: "Ask questions from PDF documents using LLMs"
    },
    {
      icon: "📊",
      title: "Data Analysis & Visualization",
      description: "EDA using Pandas, Matplotlib, Seaborn"
    },
    {
      icon: "📈",
      title: "ML Model Training",
      description: "Regression, classification, recommendation (Scikit-learn, XGBoost)"
    },
    {
      icon: "📦",
      title: "Streamlit App Deployment",
      description: "Build & deploy interactive dashboards"
    },
    {
      icon: "🎯",
      title: "Generative AI Projects",
      description: "GPT-3.5/4.0, Transformers-based apps"
    },
    {
      icon: "🔬",
      title: "Computer Vision Projects",
      description: "Gesture detection, image classification using TensorFlow, OpenCV"
    },
    {
      icon: "🧾",
      title: "Resume Parser & Job Matching AI",
      description: "NLP-powered HR tools"
    },
    {
      icon: "🧪",
      title: "Healthcare & Finance AI",
      description: "Fraud detection, churn prediction"
    },
    {
      icon: "🌐",
      title: "API Integration",
      description: "Connect AI models with third-party services"
    }
  ];

  const beyondAiServices = [
    {
      icon: "🖥️",
      title: "AI Portfolio Website Development",
      description: "Build responsive and modern AI-focused personal websites"
    },
    {
      icon: "📘",
      title: "1:1 AI Tutoring & Mentoring",
      description: "Teach AI/ML, NLP, LLMs, and guide academic projects"
    },
    {
      icon: "🛠️",
      title: "Freelancing Setup Support",
      description: "Help beginners set up Fiverr, Upwork profiles and gigs"
    },
    {
      icon: "🧭",
      title: "Project Planning for Students",
      description: "Guide college or online learners to build impactful AI projects"
    }
  ];

  return (
    <section id="freelance" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Freelance AI/ML & Beyond Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            As a professional freelancer, I offer comprehensive AI/ML solutions along with additional services 
            like tutoring, mentoring, and AI-based website building. I help clients, students, and businesses 
            leverage cutting-edge technology to solve real-world problems and achieve their goals.
          </p>
        </div>
        
        {/* AI/ML Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-3">🔹</span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI/ML Services</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiMlServices.map((service, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-2xl mr-4 mt-1">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beyond AI Services */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-3">🔹</span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Beyond AI Services</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {beyondAiServices.map((service, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-2xl mr-4 mt-1">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
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
