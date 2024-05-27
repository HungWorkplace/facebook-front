import { Post, User } from "@/types/api";

export const users: User[] = [
  {
    _id: "1",
    firstName: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    birthday: new Date("1990-01-01").toISOString(),
    gender: "male",
    createdAt: new Date("2022-01-01").toISOString(),
    fullName: "John Doe",
    avatar: getRandomImage(),
  },
  {
    _id: "2",
    firstName: "Jane",
    surname: "Smith",
    email: "jane.smith@example.com",
    birthday: new Date("1992-02-02").toISOString(),
    gender: "female",
    createdAt: new Date("2022-02-02").toISOString(),
    fullName: "Jane Smith",
    avatar: getRandomImage(),
  },
  {
    _id: "3",
    firstName: "Alex",
    surname: "Johnson",
    phone: "555-1234",
    email: "alex.johnson@example.com",
    birthday: new Date("1988-03-03").toISOString(),
    gender: "other",
    createdAt: new Date("2022-03-03").toISOString(),
    fullName: "Alex Johnson",
    avatar: getRandomImage(),
  },
  {
    _id: "4",
    firstName: "Emily",
    surname: "Davis",
    email: "emily.davis@example.com",
    birthday: new Date("1985-04-04").toISOString(),
    gender: "female",
    createdAt: new Date("2022-04-04").toISOString(),
    fullName: "Emily Davis",
    avatar: getRandomImage(),
  },
  {
    _id: "5",
    firstName: "Michael",
    surname: "Brown",
    phone: "555-5678",
    email: "michael.brown@example.com",
    birthday: new Date("1995-05-05").toISOString(),
    gender: "male",
    createdAt: new Date("2022-05-05").toISOString(),
    fullName: "Michael Brown",
    avatar: getRandomImage(),
  },
];

// Returns ISO string
function getRandomDate() {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  ).toISOString();
}

// https://randomuser.me/api/portraits/med/men/75.jpg
// Generate image URL, random from 1 to 30.jpg
function getRandomImage() {
  const random = Math.floor(Math.random() * 30) + 1;
  return `https://randomuser.me/api/portraits/med/men/${random}.jpg`;
}

export const posts: Post[] = [
  {
    _id: "101",
    user: users[0],
    content: `Today was a fantastic day! 
    I started my morning with a refreshing jog in the park. 
    In the afternoon, I met up with old friends for coffee and reminisced about our college days.`,
    createdAt: getRandomDate(),
  },
  {
    _id: "102",
    user: users[1],
    content: `I had an amazing experience at the art gallery today. 
    The exhibits were incredibly inspiring and full of vibrant colors. 
    I even managed to chat with one of the artists and learned a lot about their creative process.`,
    image: "https://example.com/gallery.jpg",
    createdAt: getRandomDate(),
  },
  {
    _id: "103",
    user: users[2],
    content: `Cooking is truly an art, and I tried a new recipe today. 
    The dish turned out to be delicious, far exceeding my expectations. 
    Sharing a meal with family made it even more special.`,
    createdAt: getRandomDate(),
  },
  {
    _id: "104",
    user: users[3],
    content: `I finally completed the marathon I've been training for months! 
    Crossing the finish line was one of the most fulfilling moments of my life. 
    The support from the crowd and my loved ones kept me going.`,
    createdAt: getRandomDate(),
  },
  {
    _id: "105",
    user: users[4],
    content: `Just returned from a week-long camping trip in the mountains. 
    The serene environment was a perfect escape from the city hustle. 
    Each night, the clear sky full of stars was a breathtaking sight.`,
    image: "https://example.com/camping.jpg",
    createdAt: getRandomDate(),
  },
];
