import React from "react";
import { CalendarCheck, Truck, Repeat } from "lucide-react";

const steps = [
  {
    title: "Choose & Schedule",
    description:
      "Select the equipment you need and choose your rental date. We confirm availability instantly.",
    icon: CalendarCheck,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Same-Day Delivery",
    description:
      "We deliver the equipment to your location on the selected day, fully checked and ready to use.",
    icon: Truck,
    bg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Use & Easy Pickup",
    description:
      "Use the equipment for your event or requirement. After completion, we handle the pickup.",
    icon: Repeat,
    bg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Renting equipment is simple, fast, and hassle-free.
        </p>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-purple-200 via-cyan-200 to-pink-200" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center px-4"
              >
                {/* Icon bubble */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.bg} mb-6 z-10`}
                >
                  <Icon className={`w-7 h-7 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
