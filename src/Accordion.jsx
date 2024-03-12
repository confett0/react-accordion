import React, { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h1>FAQs</h1>
      <Panel
        title="What is Frontend Mentor, and how will it help me?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building.
      </Panel>

      <Panel
        title="Is Frontend Mentor free?"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Yes, Frontend Mentor offers both free and premium coding challenges,
        with the free option providing access to a range of projects suitable
        for all skill levels.
      </Panel>
      <Panel
        title="Can I use Frontend Mentor projects in my portfolio?"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        Yes, you can use projects completed on Frontend Mentor in your
        portfolio. It's an excellent way to showcase your skills to potential
        employers!
      </Panel>
      <Panel
        title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
      >
        The best place to get help is inside Frontend Mentor's Discord
        community. There's a help channel where you can ask questions and seek
        support from other community members.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <>
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? <p>{children}</p> : <button onClick={onShow}></button>}
      </section>
    </>
  );
}