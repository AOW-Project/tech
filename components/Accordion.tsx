"use client"
/**
 * Accordion component for collapsible panels with ARIA accessibility.
 * Exports AccordionItem interface for use in service blocks.
 */
import React, { useState } from "react"
import { Plus } from "lucide-react"

export interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="divide-y font-inter divide-gray-200">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            className="w-full text-left py-3 px-4 font-semibold text-lg md:text-xl text-black flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b8bf9] transition-colors bg-white hover:bg-blue-50"
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-panel-${idx}`}
            id={`accordion-header-${idx}`}
            onClick={() => handleToggle(idx)}
            type="button"
          >
            <span>{item.title}</span>
            <span className={`ml-2 transition-transform ${openIndex === idx ? "rotate-45" : "rotate-0"}`}><Plus className="w-5 h-5" /></span>
          </button>
          <div
            id={`accordion-panel-${idx}`}
            role="region"
            aria-labelledby={`accordion-header-${idx}`}
            aria-hidden={openIndex !== idx}
            className={`overflow-hidden transition-all duration-300 bg-white px-4 ${openIndex === idx ? "max-h-96 py-2" : "max-h-0 py-0"}`}
          >
            <div className="text-black text-base md:text-lg leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion; 