import CategoryBadge from "./category-badge"

function PostTitle({title, description, category}: {
    title: string,
    description: string,
    category: string
}) {
  return (
    <div className="flex flex-col mx-auto w-4/5">
        <h1 className="text-6xl font-bold mt-8 text-white font-normal">{title}</h1>
        <p className="text-2xl font-normal mt-4 mb-2 text-white">
       {description}
        </p>
        <CategoryBadge name={category} />
    </div>
  )
}

export default PostTitle