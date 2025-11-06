"use client";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

export default function Categories() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-full mb-4 text-sm">
      {categories.map((category, index) => (
        <motion.div
          className="relative flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-full overflow-hidden"
          key={category.name}
          onClick={() => handleChange(category.slug)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <AnimatePresence>
            {category.slug === selectedCategory && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-white rounded-full"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  backdropFilter: "blur(10px)",
                }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {hoveredIndex === index && category.slug !== selectedCategory && (
              <motion.div
                className="absolute inset-0 bg-white/40 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                style={{
                  backdropFilter: "blur(8px)",
                }}
              />
            )}
          </AnimatePresence>
          <motion.div
            className={`relative z-10 flex items-center justify-center gap-2 ${
              category.slug === selectedCategory
                ? "text-gray-900"
                : "text-gray-500"
            }`}
            animate={{
              y: category.slug === selectedCategory ? [0, -2, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              repeat: category.slug === selectedCategory ? Infinity : 0,
              repeatDelay: 2,
            }}
          >
            <motion.div
              animate={{
                rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {category.icon}
            </motion.div>
            <motion.span
              animate={{
                opacity: category.slug === selectedCategory ? [1, 0.8, 1] : 1,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: category.slug === selectedCategory ? Infinity : 0,
              }}
            >
              {category.name}
            </motion.span>
          </motion.div>
          {category.slug === selectedCategory && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.8) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
