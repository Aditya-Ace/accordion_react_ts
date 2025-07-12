import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lock } from "lucide-react";

import { cn } from "../lib/utils";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  defaultIsOpen?: boolean;
  onExpand?: () => void;
  locked?: boolean;
  onRenderTitle?: (title: string) => React.ReactNode;
  variant?: "default" | "gradient" | "glass" | "neon" | "minimal";
  size?: "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  disabled?: boolean;
  id?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  icon,
  defaultIsOpen = false,
  onExpand,
  locked = false,
  onRenderTitle,
  variant = "default",
  size = "md",
  iconPosition = "left",
  className,
  titleClassName,
  contentClassName,
  disabled = false,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const [isFocused, setIsFocused] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const accordionId =
    id || `accordion-${Math.random().toString(36).substr(2, 9)}`;

  const handleToggle = () => {
    if (!locked && !disabled) {
      setIsOpen(!isOpen);
      if (!isOpen && onExpand) {
        onExpand();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const firstFocusable = contentRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [isOpen]);

  const getVariantStyles = () => {
    const baseStyles = "rounded-xl border transition-all duration-300";

    switch (variant) {
      case "gradient":
        return cn(
          baseStyles,
          "bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 border-purple-200/50",
          "dark:from-purple-900/20 dark:via-pink-900/20 dark:to-indigo-900/20 dark:border-purple-700/30",
          isOpen && "shadow-lg shadow-purple-500/10 dark:shadow-purple-500/20",
          isFocused && "ring-2 ring-purple-500/20 ring-offset-2"
        );
      case "glass":
        return cn(
          baseStyles,
          "bg-white/70 backdrop-blur-md border-white/20 shadow-lg",
          "dark:bg-gray-900/70 dark:border-gray-700/30",
          isOpen && "shadow-xl shadow-black/5 dark:shadow-black/20",
          isFocused && "ring-2 ring-blue-500/30 ring-offset-2"
        );
      case "neon":
        return cn(
          baseStyles,
          "bg-gray-900 border-cyan-500/30 shadow-lg shadow-cyan-500/10",
          "dark:bg-black dark:border-cyan-400/40 dark:shadow-cyan-400/20",
          isOpen && "shadow-xl shadow-cyan-500/20 border-cyan-400/50",
          isFocused &&
            "ring-2 ring-cyan-500/50 ring-offset-2 ring-offset-gray-900"
        );
      case "minimal":
        return cn(
          "border-b border-gray-200 dark:border-gray-700 rounded-none",
          isFocused && "bg-gray-50 dark:bg-gray-800/50"
        );
      default:
        return cn(
          baseStyles,
          "bg-white border-gray-200 shadow-sm",
          "dark:bg-gray-800 dark:border-gray-700",
          isOpen && "shadow-md",
          isFocused && "ring-2 ring-blue-500/20 ring-offset-2"
        );
    }
  };

  const getHeaderStyles = () => {
    const baseStyles =
      "w-full flex items-center gap-3 p-4 text-left transition-all duration-200";

    switch (variant) {
      case "gradient":
        return cn(
          baseStyles,
          "hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-pink-100/50",
          "dark:hover:from-purple-800/30 dark:hover:to-pink-800/30",
          locked || disabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer"
        );
      case "glass":
        return cn(
          baseStyles,
          "hover:bg-white/50 dark:hover:bg-gray-800/50",
          locked || disabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer"
        );
      case "neon":
        return cn(
          baseStyles,
          "hover:bg-cyan-500/5 text-cyan-100 dark:text-cyan-200",
          locked || disabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer"
        );
      case "minimal":
        return cn(
          baseStyles,
          "hover:bg-gray-50 dark:hover:bg-gray-800/50 px-0 py-4",
          locked || disabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer"
        );
      default:
        return cn(
          baseStyles,
          "hover:bg-gray-50 dark:hover:bg-gray-700/50",
          locked || disabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer"
        );
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "lg":
        return "text-lg";
      default:
        return "text-base";
    }
  };

  const getTitleStyles = () => {
    const baseStyles = "font-semibold flex-1 transition-colors duration-200";

    switch (variant) {
      case "gradient":
        return cn(
          baseStyles,
          "text-gray-800 dark:text-gray-100",
          isOpen && "text-purple-700 dark:text-purple-300"
        );
      case "neon":
        return cn(
          baseStyles,
          "text-cyan-100 dark:text-cyan-200",
          isOpen && "text-cyan-300 dark:text-cyan-100"
        );
      default:
        return cn(
          baseStyles,
          "text-gray-900 dark:text-gray-100",
          isOpen && "text-blue-600 dark:text-blue-400"
        );
    }
  };

  return (
    <motion.div
      className={cn(getVariantStyles(), getSizeStyles(), className)}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      layout
    >
      <motion.button
        ref={buttonRef}
        className={cn(
          getHeaderStyles(),
          variant === "minimal" && "rounded-none"
        )}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={locked || disabled}
        aria-expanded={isOpen}
        aria-controls={`${accordionId}-content`}
        id={`${accordionId}-header`}
        whileHover={!locked && !disabled ? { scale: 1.01 } : {}}
        whileTap={!locked && !disabled ? { scale: 0.99 } : {}}
      >
        {iconPosition === "left" && icon && (
          <motion.div
            className="flex-shrink-0"
            animate={{
              rotate: isOpen ? 360 : 0,
              scale: isOpen ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        <div className={cn(getTitleStyles(), titleClassName)}>
          {onRenderTitle ? onRenderTitle(title) : title}
        </div>

        {iconPosition === "right" && icon && (
          <motion.div
            className="flex-shrink-0"
            animate={{
              rotate: isOpen ? 360 : 0,
              scale: isOpen ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        <motion.div
          className={cn(
            "flex-shrink-0 transition-colors duration-200",
            variant === "neon"
              ? "text-cyan-300"
              : "text-gray-500 dark:text-gray-400"
          )}
          variants={{
            open: { rotate: 180, scale: 1.1 },
            closed: { rotate: 0, scale: 1 },
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {locked ? (
            <Lock className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={contentRef}
            id={`${accordionId}-content`}
            role="region"
            aria-labelledby={`${accordionId}-header`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: {
                  height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.25, delay: 0.1 },
                },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.2 },
                },
              },
            }}
            className="overflow-hidden"
          >
            <motion.div
              className={cn(
                "p-4 pt-0",
                variant === "minimal" && "px-0",
                variant === "neon" && "text-gray-100 dark:text-gray-200",
                contentClassName
              )}
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
