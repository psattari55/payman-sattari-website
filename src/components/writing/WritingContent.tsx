// src/components/writing/WritingContent.tsx

interface WritingContentProps {
  children: React.ReactNode;
}

export function WritingContent({ children }: WritingContentProps) {
  return (
    <div className="
        max-w-[65ch]    
    
        prose 
        prose-p:text-[1.0625rem] /* prose-lg */
      prose-p:text-gray-800 
        prose-p:leading-relaxed
        prose-p:mt-0 
        prose-p:mb-6

        prose-headings:mt-9
        prose-headings:mb-6
        prose-headings:font-bold 
        prose-headings:tracking-tight 
      prose-headings:text-gray-900 

        prose-h2:font-serif 
        prose-h2:italic 
        prose-h2:font-medium

      prose-a:text-gray-900 
        prose-a:font-medium 
        prose-a:no-underline 
        hover:prose-a:underline

      prose-strong:text-gray-900 
        prose-strong:font-semibold 

      prose-em:text-gray-800 

      prose-blockquote:text-gray-700 
      prose-blockquote:border-gray-300 

      prose-code:text-gray-900 
      prose-code:bg-gray-100 
        prose-code:px-1.5 
        prose-code:py-0.5 
        prose-code:rounded 
        prose-code:before:content-none 
        prose-code:after:content-none 

      prose-pre:bg-gray-900 
      prose-pre:text-gray-100 

        prose-img:rounded-lg 
        
      prose-hr:border-gray-200">
      {children}
    </div>
  );
}