"use client"


function TableOfContent({ contents } : {contents: any}) {
    
    if (!contents || contents.length === 0) {
        return null;
    }
    

    return (
    <ul className="list-inside list-disc">
        {contents.map((c: any, index: number) => (
        <li key={c.data.hProperties.id} className={`text-black ml-[${c.depth*15}px]`}>
            <TOCLink node={c}/>
            {c.children && <TableOfContent contents={c.children} />}
        </li>
        ))}
    </ul>
    )
}

export default TableOfContent

const TOCLink = ({ node } : { node: any }) => {
    const fontSizes = { 2: "base", 3: "sm", 4: "xs" };
    const id = node.data.hProperties.id;
    return (
        <a
        href={`#${id}`}
        className={`text-${fontSizes[node.depth]} hover:accent-color py-1`}
        onClick={(e) => {
            e.preventDefault();
            document
            .getElementById(id)
            .scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        >
        {node.value}
        </a>
    );
};