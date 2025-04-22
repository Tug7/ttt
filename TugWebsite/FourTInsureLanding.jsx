
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function FourTInsureLanding() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted. We will contact you shortly!');
  };

  return (
    <main className="bg-white text-gray-900 font-sans">
      <section className="bg-green-600 text-white p-6 rounded-b-2xl shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <img src="/logo.png" alt="4TInsure Logo" className="w-24 h-auto mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Business Insurance Made Personal</h1>
          <p className="mt-2 text-lg">Work with a real agent. Get a free quote. HR & Payroll services available too.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose 4TInsure?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>1-on-1 support from a personal agent</li>
            <li>Simple, free business insurance quotes</li>
            <li>Optional HR & Payroll integration</li>
            <li>Quick, no-stress process</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <Input name="business" placeholder="Business Name" value={form.business} onChange={handleChange} required />
            <Textarea name="message" placeholder="Tell us about your business..." value={form.message} onChange={handleChange} rows={4} />
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full">Submit</Button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} 4TInsure. All rights reserved. | Contact us at <a href="mailto:info@4tinsure.com" className="text-green-600">info@4tinsure.com</a>
        </div>
      </footer>
    </main>
  );
}
