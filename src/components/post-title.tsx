
function PostTitle({title, description}: {
    title: string,
    description: string
}) {
  return (
    <div className="flex flex-col mx-auto w-4/5">
        <h1 className="text-6xl font-bold mt-8 text-white font-normal">{title}</h1>
        <p className="text-2xl font-normal mt-4 text-white">
       {description}
        </p>
    </div>
  )
}

export default PostTitle