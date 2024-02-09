
export default async function Home() {
  
  return (
    <>
    <div
      className="hero-image"
      style={{
        backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
        url('/hero/image12.jpg')`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 200px',
      }}
    >
      <div className="flex flex-col border-l-2 ">
        {/* <h1 className="text-white text-5xl mb-6">Boundless Curiosity</h1>
        <p className="text-white text-xl mb-3">Embracing life's ride with travel tales, book wisdom, and outdoor adventures.</p>
        <p className="text-white text-xl mb-3">Join my journey of discovery.</p> */}
        <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-1">B</span>oundless curiosity, seeking new horizons</div>
        <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-2">R</span>ealities faced with a truth that binds</div>
        <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-3">Y</span>earning for knowledge, in every experience</div>
        <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-4">A</span>ssessing life with gains and pains</div>
        <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-5">N</span>avigator of life’s vast learning landscape</div>
        <p className="text-white text-xl mt-4 ml-1">Join my journey of discovery</p>
      </div>
    </div>
    </>
  );
}
