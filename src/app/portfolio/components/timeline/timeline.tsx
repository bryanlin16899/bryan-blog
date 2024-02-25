import './styles.css'

function Timeline({ data }: { data: any }) {
  return (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p className='flex self-start'>{data.text}</p>
            {data.link && (
                <>
                <a
                    className='self-end'
                >
                    {data.link.text}
                </a>
                <span className="circle" />
                </>
            )}
        </div>
    </div>
  )
}

export default Timeline