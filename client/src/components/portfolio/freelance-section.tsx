import { Button } from "@/components/ui/button";

export default function FreelanceSection() {
  const aiMlServices = [
    {
      icon: "🤖",
      title: "AI Chatbot Development",
      description: "Custom PDF, FAQ, and website-integrated chatbots using LangChain, OpenAI, and FAISS"
    },
    {
      icon: "🧠",
      title: "NLP Applications",
      description: "Sentiment analysis, summarization, classification, NER, and keyword extraction"
    },
    {
      icon: "🗃️",
      title: "PDF Q&A Bots",
      description: "Ask questions from PDF files using GPT-3.5/4 and LangChain"
    },
    {
      icon: "📊",
      title: "Data Analysis & Visualization",
      description: "Create insights and visualizations using Pandas, Matplotlib, and Seaborn"
    },
    {
      icon: "🧹",
      title: "Data Cleaning & Organization",
      description: "Clean, format, and preprocess messy Excel/CSV files using Pandas"
    },
    {
      icon: "📈",
      title: "ML Model Training",
      description: "Build and evaluate regression, classification, and recommendation systems (Scikit-learn, XGBoost)"
    },
    {
      icon: "📦",
      title: "Streamlit App Deployment",
      description: "Create & deploy interactive ML dashboards and tools"
    },
    {
      icon: "🎯",
      title: "Generative AI Projects",
      description: "Text generation, summarization, prompt-based tools using GPT and Transformers"
    },
    {
      icon: "🔬",
      title: "Computer Vision Projects",
      description: "Real-time gesture recognition and image classification using OpenCV and TensorFlow"
    },
    {
      icon: "🧾",
      title: "Resume Parser & Job Matching AI",
      description: "NLP-based tools for recruitment automation"
    },
    {
      icon: "🧪",
      title: "Healthcare & Finance AI",
      description: "Fraud detection, churn prediction, and industry-specific ML solutions"
    },
    {
      icon: "🌐",
      title: "API Integration for AI Tools",
      description: "Connect ML models or chatbots to third-party tools via API"
    },
    {
      icon: "📏",
      title: "Model Evaluation & Explanation",
      description: "R², accuracy, confusion matrix, SHAP/LIME-based explainability"
    }
  ];

  const beginnerServices = [
    {
      icon: "📤",
      title: "Convert Raw Data into Clean Format",
      description: "Fix missing values, unify formats, and prepare for analysis"
    },
    {
      icon: "📘",
      title: "Academic Project Assistance",
      description: "Full help for college students building ML, NLP, or CV projects"
    },
    {
      icon: "🧮",
      title: "Prompt Engineering Help",
      description: "Build reusable prompts for resume writing, SEO, email drafts, etc."
    },
    {
      icon: "📝",
      title: "AI Content Generation Tools",
      description: "Blog writers, news summarizers, YouTube script generators"
    },
    {
      icon: "🧪",
      title: "Dataset Sourcing & Creation",
      description: "Scrape or compile datasets from public sources for custom use cases"
    },
    {
      icon: "🎛️",
      title: "Basic AI Tool Integration",
      description: "Build AI flows that connect GPT to Google Sheets, Forms, Notion, etc."
    }
  ];

  const mentoringServices = [
    {
      icon: "🖥️",
      title: "AI Portfolio Website Development",
      description: "Build responsive AI-focused websites using HTML/CSS/JS or Streamlit"
    },
    {
      icon: "📘",
      title: "1:1 AI Tutoring & Mentoring",
      description: "Teach AI/ML, LLMs, LangChain, NLP to beginners and job seekers"
    },
    {
      icon: "🛠️",
      title: "Freelancing Setup Support",
      description: "Help others get started on Fiverr and Upwork (gig writing, profile review)"
    },
    {
      icon: "🧭",
      title: "Project Planning & Guidance",
      description: "Help students and professionals plan, scope, and deliver AI/ML projects"
    }
  ];

  return (
    <section id="freelance" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Freelance AI/ML & Technical Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            I offer comprehensive AI/ML solutions, beginner-friendly services, and mentoring to help clients, 
            students, and businesses leverage cutting-edge technology. From advanced machine learning models 
            to hands-on guidance, I provide end-to-end support for your AI journey.
          </p>
        </div>
        
        {/* AI/ML Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-3">🧠</span>
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

        {/* Beginner-Friendly Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-3">🧩</span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Beginner-Friendly Services</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beginnerServices.map((service, index) => (
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

        {/* Beyond AI - Mentoring & Guidance */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-3">🌟</span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Beyond AI - Mentoring & Guidance</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mentoringServices.map((service, index) => (
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
