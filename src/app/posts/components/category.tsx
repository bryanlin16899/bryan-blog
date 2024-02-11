"use client";
import { useRouter } from "next/navigation";

function Category() {
    // const searchParams = useSearchParams();

    const router = useRouter();

    const handleCategoryChange = (category: string) => {
        router.push(`/posts/${category}`);
    };

    return (
        <div>
            <button onClick={() => handleCategoryChange("")}>All</button>
            <button onClick={() => handleCategoryChange("technical")}>Technical</button>
            <button onClick={() => handleCategoryChange("notes")}>Notes</button>
        </div>
    );
}

export default Category;
