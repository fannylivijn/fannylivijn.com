import { services } from "../data/content.js";

// Each number reveals its service on hover (or tap / keyboard focus).
export default function Services() {
  return (
    <section className="services">
      {services.map((service, i) => (
        <button key={service} className="service" type="button">
          <span className="service-number">{i + 1}</span>
          <span className="service-name">{service}</span>
        </button>
      ))}
    </section>
  );
}
