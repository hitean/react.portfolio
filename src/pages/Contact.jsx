import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔁 POST to backend route: /api/contact
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send ❌");
      }
    } catch (err) {
      alert("Server error ❌");
    }
  };

  return (
    <section className="min-h-screen bg-[#111827] text-white px-6 py-20 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#1f2937] p-6 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
