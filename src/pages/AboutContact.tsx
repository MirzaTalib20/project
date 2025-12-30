import React, { useMemo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Truck,
  Shield,
  Users,
  Award,
  MessageSquare,
  PhoneCall
} from "lucide-react";

/**
 * AboutContact
 * - Cleaner, trust-focused visual hierarchy
 * - Reduced visual noise, consistent spacing, accessible CTAs
 * - No layout-shifting animations; semantic lists for stats/cities
 */

const StatItem = ({
  Icon,
  value,
  label,
}: {
  Icon: React.ElementType;
  value: string;
  label: string;
}) => (
  <li className="text-center">
    <Icon className="w-6 h-6 mx-auto text-slate-600 mb-2" aria-hidden="true" />
    <p className="text-2xl font-bold text-slate-900">{value}</p>
    <p className="text-sm text-slate-600">{label}</p>
  </li>
);

const FeatureItem = ({
  Icon,
  title,
  desc,
}: {
  Icon: React.ElementType;
  title: string;
  desc: string;
}) => (
  <div className="rounded-lg border border-slate-200 p-5">
    <div className="flex items-start gap-3">
      <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
      <div>
        <h3 className="font-semibold text-base text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const AboutContact: React.FC = () => {
  const cities = useMemo(
    () => [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
    ],
    []
  );

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-4 bg-gradient-to-br from-[#e9e9e9] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Reliable cooling rentals, across India
          </h1>

          <p className="text-slate-900 max-w-2xl text-base md:text-lg leading-relaxed mb-8">
            Professional-grade coolers, portable ACs, and mist fans for events,
            offices, warehouses, and industrial setups — delivered, installed,
            and supported by experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919819570211"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 text-white px-5 py-3 text-sm font-semibold gap-2"
              aria-label="Call CoolRentZone to get a quote"
            >
       <PhoneCall className="w-5 h-5 text-white-400 " />
              
              Call now
            </a>
            <a
              href="https://wa.me/9819570211"
              className="inline-flex items-center justify-center rounded-lg border border-black-700 bg-green-800 hover:bg-black-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 text-white px-5 py-3 text-sm font-semibold gap-2"
              aria-label="Chat with CoolRentZone on WhatsApp"
              rel="noopener"
            > <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
            </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
              Who we are
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed max-w-xl">
              <p>
                Founded in 2020, CoolRentZone was built to solve one clear
                problem — accessing reliable cooling without heavy investment.
              </p>
              <p>
                From a single-city operation, we’ve grown into a multi-city
                rental network trusted by event organizers, factories,
                corporates, and households.
              </p>
              <p className="font-medium text-slate-900">
                Today, we operate 500+ cooling units with 24/7 technical
                support and same-day deployment capabilities.
              </p>
            </div>
          </div>

          <img
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="CoolRentZone team preparing cooling units at a warehouse"
            className="rounded-xl md:rounded-2xl border border-slate-200 w-full h-auto"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem Icon={Users} value="5000+" label="Clients served" />
            <StatItem Icon={Award} value="500+" label="Cooling units" />
            <StatItem Icon={MapPin} value="8+" label="Cities covered" />
            <StatItem Icon={Clock} value="24/7" label="Support" />
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Why clients choose CoolRentZone
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <FeatureItem
              Icon={Truck}
              title="Fast deployment"
              desc="Same-day delivery and professional installation."
            />
            <FeatureItem
              Icon={Shield}
              title="Zero downtime"
              desc="Backup units and on-call technicians available."
            />
            <FeatureItem
              Icon={Clock}
              title="Flexible rentals"
              desc="Daily, weekly, and long-term rental plans."
            />
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Cities we serve
          </h2>
          <p className="text-slate-600 mb-8">
            Expanding our cooling network across India.
          </p>

          <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
            {cities.map((city) => (
              <li key={city}>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-800">
                  {city}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
{/* LOCATION MAP */}
<section className="py-16 bg-white border-t border-slate-200">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      
      {/* Text */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Visit our Pune office
        </h2>

        <p className="text-slate-600 mb-6 max-w-md">
          Our operations hub is based in Pune, enabling fast dispatch,
          same-day installations, and on-ground technical support.
        </p>

        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex gap-3">
            <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
            <span>
              Shop 3, LSBI / Multifit Road,<br />
              Wadgaon Sheri, Pune – 411014
            </span>
          </li>

          <li className="flex gap-3">
            <Clock className="w-5 h-5 text-blue-600 shrink-0" />
            <span>24/7 Emergency Support</span>
          </li>

          <li className="flex gap-3">
            <Phone className="w-5 h-5 text-blue-600 shrink-0" />
            <span>+91 98195 70211</span>
          </li>
        </ul>

        <a
          href="https://maps.google.com/?q=Wadgaon+Sheri+Pune"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-sm font-semibold text-blue-600 hover:underline"
        >
          Open in Google Maps →
        </a>
      </div>

      {/* Map */}
      <div className="relative w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden border border-slate-200">
        <iframe
          title="CoolRentZone Pune Location"
          src="https://www.google.com/maps?q=Wadgaon%20Sheri%20Pune&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>

    </div>
  </div>
</section>
      {/* CONTACT CTA */}
      <section className="py-16 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Need cooling equipment fast?
          </h2>
          <p className="text-slate-600 mb-8">
            Speak to an expert for availability, pricing, and same-day
            deployment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+919819570211"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 text-white px-5 py-3 text-sm font-semibold"
              aria-label="Get a quote by phone"
            >
              Get a quote by phone
            </a>
            <a
              href="https://wa.me/919819570211"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 text-slate-900 px-5 py-3 text-sm font-semibold gap-2"
              aria-label="Chat on WhatsApp"
              rel="noopener"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Secondary contact details for trust */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-slate-700">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-slate-600" aria-hidden="true" />
              <span>+91 98195 70211</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-slate-600" aria-hidden="true" />
              <span>coolrentzone@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-slate-600" aria-hidden="true" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
