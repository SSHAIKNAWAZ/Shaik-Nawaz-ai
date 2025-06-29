export default function AboutSection() {
  const skills = [
    "Python", "TensorFlow", "Hugging Face", "LangChain", "LLMs", "NLP",
    "SQL", "Streamlit", "OpenAI", "Computer Vision", "Scikit-learn", "FAISS"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AI Engineer and Data Scientist with expertise in machine learning, natural language processing, and generative AI. 
            Based in Bangalore, India, I specialize in developing intelligent solutions that solve complex real-world problems 
            using cutting-edge AI technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location */}
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-map-marker-alt text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">Bangalore, India</p>
          </div>
          
          {/* Education */}
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-graduation-cap text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              PG in ML & AI - IIIT Bangalore<br/>
              B.Sc. (MPCS) - Osmania University
            </p>
          </div>
          
          {/* Experience */}
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-briefcase text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Focus Areas</h3>
            <p className="text-gray-600 dark:text-gray-300">AI Engineering & Freelance Services</p>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span key={skill} className="tech-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
