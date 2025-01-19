import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequencyAsk = () => {
  return (
    <div className="flex flex-col my-2 items-center justify-center">
      {/* Accordion Section */}
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="w-[600px]" // Increased width to 600px
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Who are you?</AccordionTrigger>
          <AccordionContent>
            I am a Frontend Developer based in Cambodia, and I am also a college
            student.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can I contact you?</AccordionTrigger>
          <AccordionContent>
            You can contact me via email at{" "}
            <a
              href="mailto:rn.chungsiang@gmail.com"
              className="underline text-blue-500"
            >
              rn.chungsiang@gmail.com
            </a>
            .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you do freelance work?</AccordionTrigger>
          <AccordionContent>
            Yes, I am available for freelance work. Feel free to reach out!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What technologies do you work with?
          </AccordionTrigger>
          <AccordionContent>
            I work with technologies like React.js, Next.js, Tailwind CSS,
            TypeScript, and more. I also have experience with backend
            development using Node.js.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What is your educational background?
          </AccordionTrigger>
          <AccordionContent>
            I am currently pursuing a degree in Computer Science at the Royal
            University of Phnom Penh. I also hold a diploma in English from the
            Australian Centre for Education (ACE).
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FrequencyAsk;
