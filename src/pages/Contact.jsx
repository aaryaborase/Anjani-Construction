export default function Contact() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-heading font-bold mb-8">Contact Us</h1>

        <form className="grid gap-4 mb-10">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 bg-secondary rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 bg-secondary rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-secondary rounded"
          />
          <textarea
            placeholder="Project Details"
            className="p-3 bg-secondary rounded"
          />

          <button className="bg-accent text-black py-3 rounded font-semibold">
            Submit Request
          </button>
        </form>

        <div className="text-gray-400">
          <p>📞 +91 9922713122</p>
          <p>📧 Anjaniconstruction99@gmail.com</p>
          <p>📍 Nashik/India</p>
        </div>
      </div>
    </section>
  );
}
