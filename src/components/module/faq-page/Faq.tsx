import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionDemo = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-10 mx-auto max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        aria-label="FAQ Accordion"
      >
        {/* First Accordion Item */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base sm:text-lg font-medium text-gray-300 hover:text-gray-200 transition-colors">
            What is Next.js?
          </AccordionTrigger>
          <AccordionContent
            className="text-gray-300 mt-2 w-full p-4 rounded transition-all duration-300 ease-in-out shadow-md"
            style={{
              minHeight: "100px",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            Next.js is a React-based framework for building fast and scalable
            web applications. It provides features like server-side rendering,
            static site generation, and API routes.
          </AccordionContent>
        </AccordionItem>

        {/* Second Accordion Item */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base sm:text-lg font-medium text-gray-300 hover:text-gray-200 transition-colors">
            How does Next.js improve SEO?
          </AccordionTrigger>
          <AccordionContent
            className="text-gray-300 mt-2 w-full p-4 rounded transition-all duration-300 ease-in-out shadow-md"
            style={{
              minHeight: "100px",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            Next.js improves SEO by supporting server-side rendering (SSR) and
            static site generation (SSG), ensuring that search engines can crawl
            and index content effectively.
          </AccordionContent>
        </AccordionItem>

        {/* Third Accordion Item */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base sm:text-lg font-medium text-gray-300 hover:text-gray-200 transition-colors">
            Can I use CSS frameworks with Next.js?
          </AccordionTrigger>
          <AccordionContent
            className="text-gray-300 mt-2 w-full p-4 rounded transition-all duration-300 ease-in-out shadow-md"
            style={{
              minHeight: "100px",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            Yes, you can use CSS frameworks like Tailwind CSS, Bootstrap, or
            Material-UI with Next.js. It also supports global styles and CSS
            modules for scoped styling.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
