"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Sheet = ({ open, onOpenChange, children }: SheetProps) => {
  return <>{children}</>
}

const SheetTrigger = ({
  asChild,
  children,
  ...props
}: { asChild?: boolean; children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => {
  return <div {...props}>{children}</div>
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right" | "top" | "bottom"
}

const SheetContent = ({ side = "right", className, children, ...props }: SheetContentProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)} />}
      <div
        className={cn(
          "fixed z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out",
          side === "right" && "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l",
          side === "left" && "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r",
          side === "top" && "inset-x-0 top-0 w-full border-b",
          side === "bottom" && "inset-x-0 bottom-0 w-full border-t",
          className,
        )}
        {...props}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </>
  )
}

export { Sheet, SheetTrigger, SheetContent }
