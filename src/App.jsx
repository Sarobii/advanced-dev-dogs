import "./App.css";
import Trick from "./assets/Trick.jsx";
import { useState } from "react";

const categories = [
  "All",
  "Basic",
  "Agility",
  "Acting",
  "Communication",
  "Advanced",
  "Scent Work",
  "Affection",
  "Self Control",
  "Utility",
];

const dogTricks = [
  {
    title: "Sit",
    category: "Basic",
    description: "Dog sits down on its hind legs.",
  },
  {
    title: "Stay",
    category: "Basic",
    description: "Dog remains in place until released.",
  },
  {
    title: "Down",
    category: "Basic",
    description: "Dog lies down on the ground.",
  },
  {
    title: "Come",
    category: "Basic",
    description: "Dog comes to the owner when called.",
  },
  {
    title: "Heel",
    category: "Basic",
    description: "Dog walks beside the owner.",
  },
  {
    title: "Shake",
    category: "Basic",
    description: "Dog offers a paw to shake hands.",
  },
  {
    title: "Roll Over",
    category: "Basic",
    description: "Dog rolls over onto its back.",
  },
  {
    title: "Fetch",
    category: "Basic",
    description: "Dog retrieves an object and brings it back.",
  },
  { title: "Spin", category: "Basic", description: "Dog spins in a circle." },
  {
    title: "High Five",
    category: "Basic",
    description: "Dog raises a paw to high five.",
  },
  {
    title: "Jump",
    category: "Agility",
    description: "Dog jumps over an obstacle.",
  },
  {
    title: "Weave Poles",
    category: "Agility",
    description: "Dog weaves through a series of poles.",
  },
  {
    title: "Tunnel",
    category: "Agility",
    description: "Dog runs through a tunnel.",
  },
  {
    title: "A-Frame",
    category: "Agility",
    description: "Dog climbs up and down an A-frame.",
  },
  {
    title: "Balance Beam",
    category: "Agility",
    description: "Dog walks across a narrow beam.",
  },
  {
    title: "Play Dead",
    category: "Acting",
    description: "Dog lies down and stays motionless.",
  },
  {
    title: "Crawl",
    category: "Acting",
    description: "Dog crawls forward on its belly.",
  },
  {
    title: "Bow",
    category: "Acting",
    description: "Dog bows down, front legs extended.",
  },
  {
    title: "Speak",
    category: "Communication",
    description: "Dog barks on command.",
  },
  {
    title: "Quiet",
    category: "Communication",
    description: "Dog stops barking on command.",
  },
  {
    title: "Wave",
    category: "Communication",
    description: "Dog waves a paw in greeting.",
  },
  {
    title: "Find It",
    category: "Advanced",
    description: "Dog searches for and finds a hidden object.",
  },
  {
    title: "Open Door",
    category: "Advanced",
    description: "Dog opens a door using a pull cord or handle.",
  },
  {
    title: "Turn Off Light",
    category: "Advanced",
    description: "Dog flips a light switch to turn off the light.",
  },
  {
    title: "Find Scent",
    category: "Scent Work",
    description: "Dog finds an object based on its scent.",
  },
  {
    title: "Scent Discrimination",
    category: "Scent Work",
    description: "Dog distinguishes between different scents.",
  },
  {
    title: "Kiss",
    category: "Affection",
    description: "Dog gives a kiss on the cheek or hand.",
  },
  {
    title: "Hug",
    category: "Affection",
    description: "Dog gives a hug by wrapping paws around a person.",
  },
  {
    title: "Wait",
    category: "Self Control",
    description: "Dog waits patiently before taking action.",
  },
  {
    title: "Leave It",
    category: "Self Control",
    description: "Dog leaves an object alone when commanded.",
  },
  {
    title: "Retrieve Item",
    category: "Utility",
    description: "Dog retrieves a specific item for the owner.",
  },
  {
    title: "Close Door",
    category: "Utility",
    description: "Dog closes a door using its nose or paw.",
  },
];

export default function App() {
  const [filteredTricks, setFilteredTricks] = useState(dogTricks);

  const handleClick = (category) => {
    console.log(category);
    if (category === "All") {
      setFilteredTricks(dogTricks);
      return;
    }
    setFilteredTricks(dogTricks.filter((trick) => trick.category === category));
  };

  return (
    <>
      <div className="main-nav">
        <h1>Find the Best Dog Tricks</h1>
        <p>Everything you and Fido need to impress.</p>
      </div>

      <div className="category-nav">
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="badge"
              onClick={() => handleClick(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="content">
        <div className="card-container">
          {filteredTricks.map((trick) => {
            return (
              <Trick
                key={trick.title}
                category={trick.category}
                title={trick.title}
                description={trick.description}/>
            )
          })}
        </div>
      </div>
    </>
  );
}
