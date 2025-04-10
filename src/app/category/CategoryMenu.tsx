"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Dùng usePathname trong Next.js 15
import { Button } from "@/components/ui/button";
import { categoryData } from "./configs/categoryData";
import { X } from "lucide-react";
import SubMenu from "./SubMenu";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isHoveringSubMenu, setIsHoveringSubMenu] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setSelectedCategory(null);
    setActiveCategory(null);
    onClose();
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".sidebar-container")) {
        setSelectedCategory(null);
        setActiveCategory(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setSelectedCategory(category);
      setActiveCategory(category);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`sidebar-container fixed left-0 top-0 h-full w-[290px] bg-white shadow-lg transition-transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center bg-red-600 text-white text-2xl font-bold p-3">
          XGear
          <button onClick={onClose} className="text-white cursor-pointer">
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col items-start space-y-1 p-2 relative">
          {categoryData.map((item, index) => (
            <div
              key={index}
              className="relative w-full"
              onMouseEnter={() => {
                if (hideTimeout) clearTimeout(hideTimeout);
                setSelectedCategory(item.label);
                setActiveCategory(item.label);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  if (!isHoveringSubMenu) {
                    setSelectedCategory(null);
                    setActiveCategory(null);
                  }
                }, 300);
                setHideTimeout(timeout);
              }}
            >
              <Button
                variant="ghost"
                className={`w-full flex justify-start gap-3 items-center px-4 py-3 text-black group hover:text-white hover:bg-red-500 relative rounded-none cursor-pointer ${
                  selectedCategory === item.label ? "bg-red-500 text-white" : ""
                }`}
                onClick={() => handleCategoryClick(item.label)}
              >
                <span
                  className={`absolute right-[-20px] top-1/2 -translate-y-1/2 
              border-t-[10px] border-b-[10px] border-l-[10px] border-transparent 
              z-50 ${selectedCategory === item.label ? "border-l-red-500 block" : "hidden"}`}
                />
                {item.icon}
                {item.label}
              </Button>
            </div>
          ))}
        </div>

        {activeCategory && (
          <div
            className="submenu-container fixed left-[300px] top-[56px] min-w-[800px] max-h-[650px] bg-white shadow-lg p-6 overflow-y-auto"
            onMouseEnter={() => {
              if (hideTimeout) clearTimeout(hideTimeout);
              setIsHoveringSubMenu(true);
            }}
            onMouseLeave={() => {
              setIsHoveringSubMenu(false);
              setSelectedCategory(null);
              setActiveCategory(null);
            }}
          >
            <SubMenu
              category={activeCategory}
              onClose={() => setSelectedCategory(null)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
