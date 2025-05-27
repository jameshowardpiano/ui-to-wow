
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How often should I get my piano tuned?",
      answer: "Most pianos should be tuned at least twice a year. New pianos may need more frequent tuning during the first year."
    },
    {
      question: "How long does a piano tuning take?",
      answer: "A standard piano tuning typically takes 1-2 hours, depending on the condition of your piano."
    },
    {
      question: "What is piano regulation and when do I need it?",
      answer: "Piano regulation involves adjusting the mechanical parts of the piano action. It's typically needed every 5-10 years depending on usage."
    },
    {
      question: "Do you provide services for all piano brands?",
      answer: "Yes, our certified technicians work on all piano brands and models, from uprights to grand pianos."
    },
    {
      question: "Can you move my piano safely?",
      answer: "Yes, we offer professional piano moving services with specialized equipment and trained movers."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
