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
            <div className="bg-white text-black rounded shadow p-4 hover:shadow-lg transition-transform">
              <img
                src="/art5.png"
                alt="Montana Mountain Scene Ukulele"
                className="w-full rounded hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold mt-2">Montana Mountain Scene Ukulele</h3>
              <p>$500.00</p>
            </div>
            <div className="bg-white text-black rounded shadow p-4 hover:shadow-lg transition-transform">
              <img
                src="/art2.png"
                alt="Montana Mountain Scene Canvas"
                className="w-full rounded hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold mt-2">Montana Mountain Scene Canvas</h3>
              <p>$100.00</p>
            </div>
            <div className="bg-white text-black rounded shadow p-4 hover:shadow-lg transition-transform">
              <img
                src="/art3.png"
                alt="Montana Mountain Scene Canvas"
                className="w-full rounded hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold mt-2">Montana Mountain Scene Canvas</h3>
              <p>$100.00</p>
            </div>
            <div className="bg-white text-black rounded shadow p-4 hover:shadow-lg transition-transform">
              <img
                src="/art4.png"
                alt="Montana Mountain Scene Canvas"
                className="w-full rounded hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold mt-2">Montana Mountain Scene Canvas</h3>
              <p>$100.00</p>
            </div>
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

      <section id="sewing" className="py-20 bg-black">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Sewing Creations</h2>
          <p className="text-center text-xl mb-12 text-gray-300">
            Explore some of my before-and-after sewing projects!
          </p>
          <div className="flex flex-col items-center">
            <div className="bg-white text-black rounded shadow-lg p-12 max-w-6xl w-full">
              <h3 className="text-3xl font-bold mb-8 text-center">Project 1</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <img
                  src="/before1.png"
                  alt="Before - Project 1"
                  className="w-full rounded shadow-lg"
                />
                <img
                  src="/after1.png"
                  alt="After - Project 1"
                  className="w-full rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}