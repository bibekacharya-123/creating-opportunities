import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "What does Creating Opportunities International do?",
      answer:
        "Creating Opportunities International is a platform that connects talented individuals with life-changing opportunities. We work to identify, create, and facilitate access to opportunities in education, career development, skill enhancement, and more.",
    },
    {
      question: "How can I benefit from your services?",
      answer:
        "Individuals can benefit from our services by accessing opportunities for education, career development, skill enhancement, and networking. We provide guidance, resources, and connections to help you achieve your goals and aspirations.",
    },
    {
      question: "How can organizations partner with you?",
      answer:
        "Organizations can partner with us in various ways, including offering opportunities to our network, collaborating on projects and initiatives, providing resources and support, and participating in our events and programs. Contact us to discuss partnership possibilities.",
    },
    {
      question: "What types of opportunities do you offer?",
      answer:
        "We offer a wide range of opportunities, including educational scholarships, career development programs, skill enhancement workshops, networking events, mentorship programs, and more. The opportunities are tailored to meet diverse needs and aspirations.",
    },
    {
      question: "Do you operate only in Nepal?",
      answer:
        "While we are based in Nepal, our reach extends globally. We have partnerships and connections in over 50 countries, allowing us to facilitate international opportunities and experiences for our beneficiaries.",
    },
    {
      question: "How can I support your mission?",
      answer:
        "You can support our mission by becoming a partner, volunteering your time and expertise, contributing resources, spreading awareness about our work, and participating in our events and initiatives. Contact us to learn more about how you can get involved.",
    },
    {
      question: "Are your services free?",
      answer:
        "Many of our services are offered free of charge, especially to underserved populations. Some specialized programs and services may have associated costs, but we strive to keep them affordable and accessible. We also offer scholarships and financial assistance where possible.",
    },
    {
      question: "How do I stay updated on new opportunities?",
      answer:
        "You can stay updated on new opportunities by subscribing to our newsletter, following us on social media, regularly checking our website, and joining our network. We regularly share information about new opportunities and initiatives through these channels.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our organization, services, and impact.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-[#121d3e] hover:text-[#0e9aa7]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
