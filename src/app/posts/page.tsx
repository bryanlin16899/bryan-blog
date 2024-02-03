

function PostsPage() {
    const articles = [
        { id: 1, title: 'Article 1', content: 'This is the content of Article 1' },
        { id: 2, title: 'Article 2', content: 'This is the content of Article 2' },
        { id: 3, title: 'Article 3', content: 'This is the content of Article 3' },
    ];

    return (
        <>
            <div className="flex flex-col w-screen p-10">
                <div className="flex justify-center p-10">
                    <h1 className="text-4xl">All Posts</h1>
                </div>
                
                <div className="flex flex-col self-center w-[60%]"> 
                    <div className="border-b-2 border-black" />
                    <div className="flex flex-col mt-10">
                        {articles.map((article) => (
                            <div key={article.id} className="flex flex-col border p-4 mb-4">
                                <span className="font-thin text-sm">published at 2023.07.01</span>
                                <a href="" className="text-2xl font-bold">{article.title}</a>
                                <p>{article.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage