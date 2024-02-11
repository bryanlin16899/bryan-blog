import { cn } from "@/lib/utils";

function CategoryBadge({name}: {name: string}){
  const categoryColors = {
    'technical': 'bg-blue-500',
    'notes': 'bg-yellow-500',
    '': 'bg-gray-500',
  }

  const categoryName = {
    'technical': '技術',
    'notes': '筆記',
    '': '其他',
  }

  return (
    <div className={cn(
        `rounded-full text-white text-center max-w-[60px] h-[23px]`,
        categoryColors[name.toLowerCase()],
      )}>
      {categoryName[name.toLowerCase()]}
    </div>
  );
};

export default CategoryBadge;
