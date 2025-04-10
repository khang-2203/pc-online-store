"use client";

import { useRouter } from "next/navigation";
import { subMenuData } from "./configs/subMenuData";

interface SubMenuProps {
  category: string | null;
  onClose: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ category, onClose }) => {
  const router = useRouter();

  if (
    !category ||
    !subMenuData?.[category] ||
    Object.keys(subMenuData?.[category] || {}).length === 0
  )
    return null;

  return (
    <div className="w-full">
      {Object.entries(subMenuData[category] || {}).map(([group, items]) => (
        <div key={group} className="mb-4">
          <h3 className="text-lg font-semibold text-red-600">{group}</h3>
          <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 border-b pb-5">
            {items.map((subItem, idx) => (
              <li
                key={idx}
                className="text-gray-700 hover:text-red-500 cursor-pointer border-b border-transparent hover:border-red-500 w-fit"
                onClick={() =>
                  router.push(
                    `/category/${category.toLowerCase().replace(/\s+/g, "-")}/brand/${subItem.toLowerCase().replace(/\s+/g, "-")}`
                  )
                }
              >
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
