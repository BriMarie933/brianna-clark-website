import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-black text-center py-16">
        <h1 className="text-5xl font-bold">Brianna Clark&apos;s Corner of the World</h1>
        <p className="mt-4 text-lg">Welcome to my collection of art, photography, and creativity!</p>
      </section>

      <section id="art" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Art</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                src: "/art5.png",
                alt: "Montana Mountain Scene Ukulele",
                title: "Montana Mountain Scene Ukulele",
                price: "$500.00",
              },
              {
                src: "/art2.png",
                alt: "Montana Mountain Scene Canvas",
                title: "Montana Mountain Scene Canvas",
                price: "$100.00",
              },
              {
                src: "/art3.png",
                alt: "Montana Mountain Scene Canvas",
                title: "Montana Mountain Scene Canvas",
                price: "$100.00",
              },
              {
                src: "/art4.png",
                alt: "Montana Mountain Scene Canvas",
                title: "Montana Mountain Scene Canvas",
                price: "$100.00",
              },
            ].map((art, index) => (
              <div
                key={index}
                className="bg-white text-black rounded shadow p-4 overflow-hidden"
              >
                <div className="relative w-full h-60 overflow-hidden rounded">
                  <Image
                    src={art.src}
                    alt={art.alt}
                    layout="fill" // Use the full container space
                    objectFit="cover" // Zoom and crop
                    objectPosition="0% 5%"  // Center the image
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">{art.title}</h3>
                <p>{art.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-black text-center">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="mt-4 text-lg">
          I am 22 years old and live in Bozeman, Montana. My full-time job is a software engineer...
        </p>
        <Image src="/about.jpg" alt="About Brianna" width={300} height={300} className="rounded-full mx-auto mt-8" />
      </section>

      <section id="photography" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Photography</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Image src="/photo13.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo12.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo11.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo10.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo9.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo8.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo7.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo6.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo5.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo4.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo3.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            <Image src="/photo2.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
          </div>
        </div>
      </section>
    </>
  );
}