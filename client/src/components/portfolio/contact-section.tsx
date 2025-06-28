export default function ContactSection() {
  const contacts = [
    {
      title: "Email",
      value: "shaiknawaz1947@gmail.com",
      href: "mailto:shaiknawaz1947@gmail.com",
      icon: "fas fa-envelope"
    },
    {
      title: "GitHub",
      value: "github.com/SSHAIKNAWAZ",
      href: "https://github.com/SSHAIKNAWAZ",
      icon: "fab fa-github"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/shaiknawaz",
      href: "https://linkedin.com/in/shaiknawaz",
      icon: "fab fa-linkedin"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's discuss how we can work together on your next AI project
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${contact.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="font-semibold mb-2">{contact.title}</h3>
              <a 
                href={contact.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
