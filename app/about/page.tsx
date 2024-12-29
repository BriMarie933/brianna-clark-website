export default function AboutPage() {
  return (
    <div
      className="py-16 bg-gray-900 bg-cover bg-center relative"
      // style={{
      //   backgroundImage: 'url("/art1.jpg")', // Ensure photo1.jpg is in the public folder
      // }}
    >
      {/* Semi-transparent Overlay to Improve Readability */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>

      {/* Content */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <img
          src="/about.jpg" // Ensure this image is in your `public` folder
          alt="About Brianna Clark"
          className="w-full max-w-sm mx-auto rounded-full shadow-lg"
        />

        {/* About Content */}
        <div className="text-gray-300 text-lg leading-relaxed">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p>
            Hi! I’m Brianna Clark, a 22-year-old, 5th-generation Montanan who has lived in beautiful Bozeman, Montana my entire life. I’ve always loved challenging myself, whether it was working hard to earn the highest grades, achieving a black belt in karate, or using my free time to improve my skills and hobbies.
          </p>
          <p className="mt-4">
            Music has always been a big part of my life. I’ve loved singing for as long as I can remember, and along the way, I’ve taught myself to play the ukulele, guitalele, guitar, and even the electric guitar. Sewing is another passion of mine. When I was young, clothes rarely fit me properly because I was so petite, so I saved up for a sewing machine and taught myself how to use it. Today, I love creating unique pieces for myself and others.
          </p>
          <p className="mt-4">
            My interest in photography began when I started helping my older brother, a now-famous fitness influencer, create content with his Sony camera back when his following was still small. That experience sparked a love for capturing moments through the lens, which has grown over the years. Painting has also been a great way for me to relax. While I’ve never taken formal lessons, I’ve always loved drawing during class or painting at home as a creative outlet.
          </p>
          <p className="mt-4">
            For work, I’m a software engineer who enjoys solving problems and implementing creative solutions. I truly love my job and feel so blessed to do what I do every day. Fun fact: my husband and I actually created this website together on one of our date nights! If you’re interested in having a custom website created for you, feel free to <a href="/contact" className="text-blue-500 hover:underline">contact me</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
