import React from "react";
import { Fraunces } from "next/font/google";

import "./ServicesMain.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function ServicesMain() {
  const tableText = `${fraunces.className} table`;
  return (
    <div>
      <h1 className="header-service">WHY THERAPY? </h1>
      <p className="main-text">
        Choosing whether to pursue therapy can bring up many questions within
        us. &#34;Do I really need therapy?&#34; &#34;Are my problems and
        experiences even worth talking about?&#34; We can often feel insecure,
        embarrassed, and even a little afraid to enter into therapy. With this
        in mind, I not only validate these concerns, but I encourage you all the
        more to reach out despite these feelings as often time these emotions
        are indicative of how therapy can actually be helpful for us. For some,
        it may be their first time exploring therapy as an option. My hope is
        that you feel supported in our work together.
      </p>
      <h2 className="header-service">WHAT TO EXPECT</h2>
      <div className="text-div">
        <div className="number-div">
          <p className="numbers">01</p>
          <p className="text">
            We&#39;ll start with a brief phone conversation so that I can get a
            sense of the kind of support that you are looking for. I&#39;ll ask
            for some basic information to get to know you and also use this time
            to answer any questions that you might have. If it feels like we are
            a good fit for working together, we will schedule either an
            in-person or online appointment.
          </p>
        </div>
        <div className="number-div">
          <p className="numbers">02</p>
          <p className="text">
            In the first few sessions, I will learn more about you and together,
            we will explore the goals you have for therapy. Do you want to build
            healthier relationships? Learn how to better manage emotions and
            stress? Or even identifying patterns that keep us feeling
            &#34;stuck&#34; in our lives.
          </p>
        </div>
        <div className="number-div">
          <p className="numbers">03</p>
          <p className="text">
            The length and number of sessions will differ depending on your
            goals and needs for therapy. For some, a handful of sessions to
            address an acute issue will be enough, versus, others may need
            consistent, weekly sessions for months or years depending on their
            needs. We can discuss this in further detail to ensure you are
            receiving the support that you are looking for. ​
          </p>
        </div>
      </div>

      <div className="table-div">
        <h1 className="header-service">MY AREAS OF EXPERTISE</h1>
        <table className={tableText}>
          <tbody>
            <tr>
              <td>Anxiety, panic & phobias</td>
              <td>Depression</td>
              <td>Stress</td>
            </tr>
            <tr>
              <td>Loss</td>
              <td>Abuse</td>
              <td>Health issues & infertility</td>
            </tr>
            <tr>
              <td>Relationships</td>
              <td>Self-esteem</td>
              <td>Finding direction</td>
            </tr>
            <tr>
              <td>Suicidal thoughts</td>
              <td>Life changes</td>
              <td>Anger</td>
            </tr>
            <tr>
              <td>Pregnancy & parenting</td>
              <td>Postnatal depression</td>
              <td>Obsessive compulsive disorder</td>
            </tr>
            <tr>
              <td>School issues</td>
              <td>Self-harm</td>
              <td>Work & burn out</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServicesMain;
