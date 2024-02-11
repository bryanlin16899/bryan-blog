"use client";
import { useRouter } from "next/navigation";

function Category() {
    // const searchParams = useSearchParams();

    const router = useRouter();

    const handleCategoryChange = (category: string) => {
        router.push(`/posts/${category}`);
    };

    const allCategories = ["all", "technical", "notes"];
    
    return (
        <div className="flex border-b-2 ">
            {allCategories.map((category) => (
                <button className="mt-3 p-3 hover:bg-zinc-200 " key={category} onClick={() => handleCategoryChange(category)}>
                    {category.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default Category;
