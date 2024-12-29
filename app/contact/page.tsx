export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-black text-white text-center py-10">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="mt-4 text-lg">
            I&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Email Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p>
                <a
                  href="mailto:briannaclark933@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  briannaclark933@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}