"use client";

import React from "react";
import { Collapse } from "antd";
import "./Accordian.css";

const { Panel } = Collapse;

const questions = [
  {
    id: 1,
    question: "What is counselling?",
    answer:
      "Counselling is a process where a trained professional helps individuals or groups explore their feelings, thoughts, and behaviors to address specific issues, improve relationships, and enhance overall well-being through empathetic support and tailored techniques.",
  },
  {
    id: 2,
    question: "How can counselling benefit me?",
    answer:
      "Counselling can benefit you by providing a safe space to explore and understand your feelings, gain insight into your thoughts and behaviors, develop coping strategies, improve relationships, manage stress and anxiety, navigate life transitions, and ultimately enhance your overall well-being.",
  },
  {
    id: 3,
    question:
      "What kinds of challenges can counselling help individuals address?",
    answer:
      "Counselling can effectively address a range of issues including relationship challenges, stress management, anxiety, depression, grief and loss, trauma recovery, and personal development.",
  },
  {
    id: 4,
    question: "What is the first session like?",
    answer:
      "The first session is an opportunity for you and your counsellor to get to know each other. It typically involves discussing your reasons for seeking counselling, your goals, and any concerns you might have. The counsellor will explain the counselling process and answer any questions you may have.",
  },
  {
    id: 5,
    question: "How many sessions will I need?",
    answer:
      "The number of sessions required varies depending on individual needs and goals. Some people find resolution in a few sessions, while others may benefit from longer-term counselling. Your counsellor will work with you to develop a plan that suits your specific situation.",
  },
  {
    id: 6,
    question: "Is it confidential?",
    answer:
      "Yes, counselling is confidential. Counsellors are bound by ethical guidelines to keep information shared during sessions private, ensuring a safe and secure environment for you to discuss your concerns. Exceptions to confidentiality typically include situations where there is a risk of harm to yourself or others, or where legal requirements necessitate disclosure.",
  },
  {
    id: 7,
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy requires at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another client. If you cancel with less than 24 hours notice, you may be charged a cancellation fee.",
  },
  {
    id: 8,
    question: "How much is each counselling session?",
    answer: "Each session is £45 and lasts for 50 minutes.",
  },
  {
    id: 9,
    question: "Can I carry out my sessions over Teams/Zoom?",
    answer:
      "Yes, you can carry out your counselling sessions over Teams or Zoom. I offer online sessions, providing flexibility and convenience while maintaining confidentiality and professional standards.",
  },

  {
    id: 11,
    question: "Do you offer specialised counselling for certain issues?",
    answer:
      "Yes, I offer specialised counselling for issues such as addiction, eating disorders, career guidance and parenting support. These services are tailored to address specific challenges and provide targeted support.",
  },
  {
    id: 13,
    question: "What should I do if I feel uncomfortable during a session?",
    answer:
      "If you ever feel uncomfortable during a session, it is important to communicate this with your counsellor. They are trained to handle such situations and will work with you to ensure you feel safe and supported. Your feedback is crucial in making the counselling process effective for you.",
  },
  {
    id: 14,
    question: "Can I bring someone with me to my counselling session?",
    answer:
      "You are welcome to bring a support person, such as a friend or family member, to your counselling session if you feel it will be helpful. It is best to discuss this with your counsellor in advance to ensure it aligns with the session&#34;s goals.",
  },
  {
    id: 15,
    question: "What if I do not feel like we are a good fit?",
    answer:
      "Finding the right counsellor is important for effective therapy. If you feel that we are not a good fit, please let me know. I can help you find another counsellor who might be better suited to your needs.",
  },
  {
    id: 16,
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by email or phone. Please provide your availability, and I will do my best to accommodate your preferred time.",
  },
  {
    id: 17,
    question: "What is the difference between counselling and psychotherapy?",
    answer:
      "Counselling typically focuses on specific issues and is often short-term, while psychotherapy involves a deeper exploration of emotional difficulties and may be more long-term. Both aim to improve mental health and well-being, but the approaches and duration can vary.",
  },
];

const Accordian = () => {
  return (
    <Collapse className="collapse">
      {questions.map(({ id, question, answer }) => (
        <Panel className="panel" header={question} key={id}>
          <p className="answer"> {answer}</p>
        </Panel>
      ))}
    </Collapse>
  );
};

export default Accordian;
