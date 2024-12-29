import Image from 'next/image';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <section id="hero" className="bg-black text-center py-16">
        <h1 className="text-5xl font-bold">Brianna Clark&apos;s Corner of the World</h1>
        <p className="mt-4 text-lg">Welcome to my collection of art, photography, and creativity!</p>
      </section>

      <section id="art" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Art</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white text-black rounded shadow p-4">
              <Image src="/art1.jpg" alt="Montana Mountain Scene Ukulele" width={300} height={300} />
              <h3 className="text-xl font-bold mt-2">Montana Mountain Scene Ukulele</h3>
              <p>$300.00</p>
            </div>
            {/* Repeat for other art items */}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-black text-center">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="mt-4 text-lg">I am 22 years old and live in Bozeman, Montana. My full-time job is a software engineer...</p>
        <Image src="/about.jpg" alt="About Brianna" width={300} height={300} className="rounded-full mx-auto mt-8" />
      </section>

      <section id="photography" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Photography</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Image src="/photo1.jpg" alt="Photo 1" width={300} height={300} className="rounded" />
            {/* Repeat for other photos */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
