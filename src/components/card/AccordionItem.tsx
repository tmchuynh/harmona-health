import {
  AccordionItem as RadixAccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionItem({
  value,
  label,
  content,
}: {
  value: string;
  label: string;
  content: React.ReactNode;
}) {
  return (
    <RadixAccordionItem value={value}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </RadixAccordionItem>
  );
}
