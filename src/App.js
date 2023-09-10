import React from "react";
import { Navbar, Hero, Card } from "./Components/Component";
import data from "./data";

const App = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <section className="container">
      <Navbar />
      <Hero />
      <div className="cards-list">{cards}</div>
    </section>
  );
};

export default App;
