import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { personalInfo } from '@/lib/data';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    { icon: <Phone className="w-5 h-5" />, label: 'Phone Number', value: personalInfo.phone, href: `https://wa.me/${personalInfo.phone.replace(/\D/g, '')}` },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: personalInfo.address },
  ];

  return (
    <section id="contact" className="pb-12 bg-transparent">
      <div className="w-full px-4">
        <div className="w-full max-w-7xl mx-auto">
          <AnimatedSection>
            {/* Heading above grid — full width */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green mb-8 leading-tight">
              Let&apos;s connect
            </h2>

            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">

              {/* Left: Form */}
              <form className="flex flex-col gap-5" onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const name = fd.get('name');
                const phone = fd.get('phone');
                const email = fd.get('email');
                const subject = fd.get('subject') || 'Contact from Portfolio';
                const message = fd.get('message');
                
                const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
                window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
              }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border border-zinc-300 bg-white rounded-xl px-4 py-3 text-sm md:text-base font-medium text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-brand-green transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="border border-zinc-300 bg-white rounded-xl px-4 py-3 text-sm md:text-base font-medium text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-brand-green transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="border border-zinc-300 bg-white rounded-xl px-4 py-3 text-sm md:text-base font-medium text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-brand-green transition-all"
                  />
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="border border-zinc-300 bg-white rounded-xl px-4 py-3 text-sm md:text-base font-medium text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-brand-green transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Message"
                  className="border border-zinc-300 bg-white rounded-xl px-4 py-3 text-sm md:text-base font-medium text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-brand-green transition-all resize-none"
                />
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-extrabold text-zinc-900 hover:text-brand-green transition-colors"
                  >
                    Send Message <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </form>

              {/* Right: Contact Info — naturally aligned with first input */}
              <div className="flex flex-col gap-4 min-w-[260px]">
                {contacts.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white border border-zinc-200 rounded-2xl px-5 py-4 shadow-sm">
                    <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-zinc-400 font-medium mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer" className="text-sm md:text-base font-bold text-zinc-900 hover:text-brand-green transition-colors inline-block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm md:text-base font-bold text-zinc-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

