import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FAQ } from "@/constants/content";

export function Faq() {
  return (
    <section id="faq" className="wrapper py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <Badge className="mb-4">{FAQ.eyebrow}</Badge>
          <h2 className="text-5xl font-black tracking-[-0.04em] text-foreground md:text-6xl">
            {FAQ.titleLineOne}
            <span className="block text-purple-1">{FAQ.titleLineTwo}</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
            {FAQ.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm">
          <div className="w-full">
            <Accordion type="single" collapsible>
              {FAQ.items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {FAQ.footnote}{" "}
          <Link href={FAQ.footnoteLink.href} className="font-semibold text-purple-1 hover:underline">
            {FAQ.footnoteLink.label}
          </Link>
        </p>
      </div>
    </section>
  );
}
