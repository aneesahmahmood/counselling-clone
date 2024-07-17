import "./Services.css"
import { Fraunces, } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});



export default function Services() {
  const titleOneClassName = `${fraunces.className} service-header`;
  const service1 = `${fraunces.className} service1-text`;
  const service2 = `${fraunces.className} service2-text`;

  return (
    <section className="services-container">
      <h2 className={titleOneClassName}>How I Can Help</h2>
      <div className={`services ${fraunces.className}`}>
        <div className="service card">
          <h3>Anxiety</h3>
          <p>
            Providing one-on-one sessions to help you manage anxiety,
            depression, and personal growth.
          </p>
        </div>
        <div className="service card">
          <h3>Bereavement</h3>
          <p>
            Providing one-on-one sessions to help you manage anxiety,
            depression, and personal growth.
          </p>
        </div>
        <div className="service card">
          <h3>Depression</h3>
          <p>
            Providing one-on-one sessions to help you manage anxiety,
            depression, and personal growth.
          </p>
        </div>
        <div className="service card">
          <h3>Grief and Loss</h3>
          <p>
            Providing one-on-one sessions to help you manage anxiety,
            depression, and personal growth.
          </p>
        </div>
        <div className="service card">
          <h3>Identity Issues</h3>
          <p>
            Providing one-on-one sessions to help you manage anxiety,
            depression, and personal growth.
          </p>
        </div>
      </div>
      <section className="work-together">
        <div className="service-container">
          <div className={service1}>
            <p>How We Can Work Together</p>
          </div>
        </div>
        <div className="service-container">
          <div className={service2}>
            <p className="therapy-text">
              Therapy will look different for each individual, as it should! I
              offer each person a tailored approach so that they can feel best
              supported with their own unique goals and intentions for therapy.
              I encourage you to share about your life, relationships, and
              struggles so that we may explore certain thought and behavioral
              patterns that may no longer be serving you. I offer guidance as
              you develop alternative perspectives and ways of relating that
              resonate deeply to your core.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
