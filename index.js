const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Learning Heroes!");
});

const heroes = [
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/jhankarmahbub.jpg",
      "id": 1,
      "course_name": "MERN Stack Development",
      "duration": "6 Month",
      "price": 550,
      "instructor": "Jhankar Mahbub",
      "rate": 4.8
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/sumit.jpg",
      "id": 2,
      "course_name": "Full Stack Development",
      "duration": "8 Month",
      "price": 750,
      "instructor": "Sumit Saha",
      "rate": 4.7
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/jhankar.jpg",
      "id": 3,
      "course_name": "CSE Fundamentals",
      "duration": "12 month",
      "price": 600,
      "instructor": "pHero TEAM",
      "rate": 4.9
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/hasin.jpg",
      "id": 4,
      "course_name": "JavaScript for Beginning",
      "duration": "2.5 Month",
      "price": 200,
      "instructor": "Hasin Hayder",
      "rate": 4.6
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/harry.jpg",
      "id": 5,
      "course_name": "Front End Development",
      "duration": "6 Month",
      "price": 700,
      "instructor": "Harry",
      "rate": 4.4
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/moshiur.jpg",
      "id": 6,
      "course_name": "WordPress Development",
      "duration": "6 Month",
      "price": 100,
      "instructor": "Moshiur Rahman",
      "rate": 4.8
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/anisul.jpg",
      "id": 7,
      "course_name": "Full Stack Development",
      "duration": "8 Month",
      "price": 110,
      "instructor": "Anisul Islam",
      "rate": 4.9
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/jhankar1.jpg",
      "id": 8,
      "course_name": "Full Stack Development",
      "duration": "8 Month",
      "price": 130,
      "instructor": "Jhankar Mahbub",
      "rate": 4.8
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/anisur.jpg",
      "id": 9,
      "course_name": "Graphics Design",
      "duration": "4 Month",
      "price": 150,
      "instructor": "Anisur Rahman",
      "rate": 4.7
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/sujon.png",
      "id": 10,
      "course_name": "WordPress Development",
      "duration": "4 Month",
      "price": 120,
      "instructor": "Md. Sujon",
      "rate": 4.5
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/cyber71.jpg",
      "id": 11,
      "course_name": "Ethical Hacking",
      "duration": "8 Month",
      "price": 140,
      "instructor": "Cyber 71",
      "rate": 4.1
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/shohagh.jpg",
      "id": 12,
      "course_name": "T-Shirt Design",
      "duration": "3 Month",
      "price": 300,
      "instructor": "Shohagh",
      "rate": 4.3
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/mosh.jpg",
      "id": 13,
      "course_name": "Software Development",
      "duration": "6 Month",
      "price": 330,
      "instructor": "Mosh Hamedani",
      "rate": 4.7
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/angela.jpg",
      "id": 14,
      "course_name": "Application Development",
      "duration": "7 Month",
      "price": 600,
      "instructor": "Angela Yu",
      "rate": 4.9
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/thapa.jpg",
      "id": 15,
      "course_name": "Web Development",
      "duration": "9 Month",
      "price": 500,
      "instructor": "Vinod Bahadur Thapa",
      "rate": 4.3
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/ed.jpg",
      "id": 16,
      "course_name": "Web Development",
      "duration": "12 Month",
      "price": 400,
      "instructor": "Dev Ed",
      "rate": 4.6
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/daniel.jpg",
      "id": 17,
      "course_name": "Tailwind Developer",
      "duration": "8 Month",
      "price": 700,
      "instructor": "Daniel Maloney",
      "rate": 4.8
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/ryan.jpg",
      "id": 18,
      "course_name": "Software Engineer",
      "duration": "10 Month",
      "price": 1000,
      "instructor": "Ryan Dahl",
      "rate": 4.7
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/isaac.jpeg",
      "id": 19,
      "course_name": "NPM Inc.",
      "duration": "12 Month",
      "price": 900,
      "instructor": "Isaac Z. Schlueter",
      "rate": 4.9
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/sara.jpg",
      "id": 20,
      "course_name": "Frontend UI Development",
      "duration": "11 Month",
      "price": 950,
      "instructor": "Sara Soueidan",
      "rate": 4.7
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/karen.jpg",
      "id": 21,
      "course_name": "Frontend UX Development",
      "duration": "12 Month",
      "price": 1000,
      "instructor": "Karen McGrane",
      "rate": 4.8
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/rachel.jpg",
      "id": 22,
      "course_name": "Web Development",
      "duration": "14 Month",
      "price": 950,
      "instructor": "Rachel Andrew",
      "rate": 4.9
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/simon.jpg",
      "id": 23,
      "course_name": "Web Design",
      "duration": "9 Month",
      "price": 700,
      "instructor": "Simon Collison",
      "rate": 4.7
  },
  {
      "image": "https://raw.githubusercontent.com/kiron0/fakeData/main/images/sarah.jpg",
      "id": 24,
      "course_name": "UI Design",
      "duration": "12 Month",
      "price": 800,
      "instructor": "Sarah Parmenter",
      "rate": 4.9
  }
];

// filter by search query parameter
app.get("/heroes", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(heroes);
  }
});

app.get("/hero/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const hero = heroes.find((hero) => hero.id === id);
  res.send(hero);
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
