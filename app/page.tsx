import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-black text-center py-16">
        <div className="parallax">
          <h1 className="text-5xl font-bold">Brianna Clark&apos;s Corner of the World</h1>
        </div>
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

      <section id="music" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Music</h2>
          <p className="text-center text-lg mb-8 text-gray-300">
            Check out my favorite music creations on my YouTube channel!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example YouTube Embeds */}
            <iframe
              className="w-full aspect-video rounded shadow"
              src="https://www.youtube.com/embed/f37G5AemF68"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full aspect-video rounded shadow"
              src="https://www.youtube.com/embed/EHDHDV4W0Bo"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full aspect-video rounded shadow"
              src="https://www.youtube.com/embed/6-3Vd0ZwEj0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/channel/UCEfDZEJ8DBNXhYT5SvxzcOg"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My YouTube Channel
            </a>
          </div>
        </div>
      </section>

      <section id="sewing" className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Sewing Creations</h2>
          <p className="text-center text-lg mb-8 text-gray-300">
            Explore some of my before-and-after sewing projects!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sewing Creations */}
            <div className="bg-white text-black rounded shadow p-4">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/before1.png"
                  alt="Before - Project 1"
                  className="w-full rounded shadow"
                />
                <img
                  src="/after1.png"
                  alt="After - Project 1"
                  className="w-full rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}