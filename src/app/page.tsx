
export default async function Home() {
  
  return (
    <>
    <div
      className="hero-image"
      style={{
        backgroundImage: `
        linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)),
        url('/image2.jpg')`, // Replace with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '95vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 className="text-white text-3xl">HOME PAGE</h1>
    </div>
    
    </>
  );
}
