// src/components/insights/InsightAxiom.tsx

interface InsightAxiomProps {
  axiom: string;
}

// Helper function to convert markdown italics to HTML
function renderMarkdownItalics(text: string) {
  return text.replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export default function InsightAxiom({ axiom }: InsightAxiomProps) {
  const axiomHtml = renderMarkdownItalics(axiom);

  return (
    <div className="mb-12">
      <h1 
        className="text-3xl md:text-4xl text-gray-900 font-insight leading-[1.3] tracking-tight"
        dangerouslySetInnerHTML={{ __html: axiomHtml }}
      />
    </div>
  );
}