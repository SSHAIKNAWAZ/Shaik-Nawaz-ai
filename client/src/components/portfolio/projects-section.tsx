import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart FAQ Chatbot",
      description: "Intelligent FAQ chatbot powered by LangChain and OpenAI, with vector search capabilities using FAISS for accurate responses.",
      technologies: ["LangChain", "OpenAI", "FAISS"],
      githubUrl: "https://github.com/SSHAIKNAWAZ"
    },
    {
      title: "PDF Chatbot",
      description: "Interactive chatbot that can read and answer questions from PDF documents using LangChain and GPT-3.5, deployed with Streamlit.",
      technologies: ["LangChain", "GPT-3.5", "Streamlit"],
      githubUrl: "https://github.com/SSHAIKNAWAZ"
    },
    {
      title: "Healthcare Fraud Detection",
      description: "Machine learning model to detect healthcare fraud using imbalanced dataset handling with SMOTE and advanced ML algorithms.",
      technologies: ["ML", "Scikit-learn", "SMOTE"],
      githubUrl: "https://github.com/SSHAIKNAWAZ"
    },
    {
      title: "Movie Recommendation System",
      description: "Content-based movie recommendation system using TF-IDF vectorization and cosine similarity for personalized suggestions.",
      technologies: ["TF-IDF", "Cosine Similarity", "Python"],
      githubUrl: "https://github.com/SSHAIKNAWAZ"
    },
    {
      title: "News Summarizer + Hindi TTS",
      description: "Automated news summarization with Hindi text-to-speech functionality using NLP and generative AI technologies.",
      technologies: ["NLP", "Generative AI", "TTS"],
      githubUrl: "https://github.com/SSHAIKNAWAZ"
    },
    {
      title: "Gesture Recognition",
      description: "Real-time hand gesture recognition system using computer vision and deep learning with TensorFlow for interactive applications.",
      technologies: ["Computer Vision", "TensorFlow", "Deep Learning"],
      githubUrl: "https://github.com/SSHAIKNAWAZ"
    },
    {
      title: "Spam Ham Classifier",
      description: "Email spam detection system using natural language processing and machine learning with high accuracy classification.",
      technologies: ["NLP", "Scikit-learn", "Classification"],
      githubUrl: "https://github.com/SSHAIKNAWAZ"
    },
    {
      title: "CNN for Melanoma Detection",
      description: "Convolutional neural network for early melanoma detection in medical imaging, contributing to healthcare AI applications.",
      technologies: ["TensorFlow", "Medical AI", "CNN"],
      githubUrl: "https://github.com/SSHAIKNAWAZ"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my recent AI and machine learning projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <i className="fab fa-github mr-2"></i>
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
