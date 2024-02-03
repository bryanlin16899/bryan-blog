"use client"


function TableOfContent({ contents } : {contents: any[]}) {
    
    if (!contents || contents.length === 0) {
        return null;
    }
    

    return (
    <div className="hidden md:flex mt-12 col-start-7 col-end-9 prose">
        <ul className="list-inside list-disc">
            {contents.map((c: any, index: number) => (
            <li key={index} className={`text-black ml-[${c.level*15}px]`}>
                <a href={c.id}>{c.text}</a>
            </li>
            ))}
        </ul>
    </div>
    )
}

export default TableOfContent