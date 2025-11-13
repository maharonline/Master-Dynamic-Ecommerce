import * as LucideIcons from "lucide-react";

export default function IconRenderer({ item }) {
  const IconComponent = LucideIcons[item.icon_type] || LucideIcons.HelpCircle;

  return (
    <IconComponent className="w-5 h-5 cursor-pointer hover:text-gray-700" />
  );
}
