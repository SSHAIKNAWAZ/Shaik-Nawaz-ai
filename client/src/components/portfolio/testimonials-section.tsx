import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Shaik demonstrated excellent end-to-end execution of an imbalanced fraud detection project. He built multiple models, used advanced evaluation techniques, and achieved an AUC score of over 96%. His code was clean, well-commented, and reflected a strong understanding of real-world data challenges.",
      author: "Project Evaluator, IIIT Bangalore"
    },
    {
      text: "In our NLP assignment on custom Named Entity Recognition, Shaik's implementation stood out. From sentence construction to CRF feature engineering and evaluation, his work was thorough and accurate. His ability to extract disease-treatment pairs using logic and NLP tools was impressive.",
      author: "Mentor, NLP Track, IIIT Bangalore"
    },
    {
      text: "Shaik delivered a top-notch regression project with clear EDA, proper data imputation, and robust model building using Lasso and Ridge. His answers to subjective questions were to-the-point, and his clean coding style showed great attention to detail.",
      author: "Faculty Grader, ML Capstone, IIIT Bangalore"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            📢 Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            What mentors and evaluators say about my work
          </p>
        </div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-sm text-gray-500 dark:text-gray-400 font-medium block text-right">
                  — {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}