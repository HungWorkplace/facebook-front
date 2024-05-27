import { Post, User } from "@/types/api";

export const users: User[] = [
  {
    _id: "1",
    firstName: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    birthday: new Date("1990-01-01"),
    gender: "male",
    createdAt: new Date(),
  },
  {
    _id: "2",
    firstName: "Jane",
    surname: "Smith",
    email: "jane.smith@example.com",
    birthday: new Date("1992-02-02"),
    gender: "female",
    createdAt: new Date(),
  },
  {
    _id: "3",
    firstName: "Alex",
    surname: "Johnson",
    phone: "555-1234",
    email: "alex.johnson@example.com",
    birthday: new Date("1988-03-03"),
    gender: "other",
    createdAt: new Date(),
  },
  {
    _id: "4",
    firstName: "Emily",
    surname: "Davis",
    email: "emily.davis@example.com",
    birthday: new Date("1985-04-04"),
    gender: "female",
    createdAt: new Date(),
  },
  {
    _id: "5",
    firstName: "Michael",
    surname: "Brown",
    phone: "555-5678",
    email: "michael.brown@example.com",
    birthday: new Date("1995-05-05"),
    gender: "male",
    createdAt: new Date(),
  },
];

export const posts: Post[] = [
  {
    _id: "101",
    user: users[0],
    content: `Today was a fantastic day! 
    I started my morning with a refreshing jog in the park. 
    In the afternoon, I met up with old friends for coffee and reminisced about our college days.`,
    createdAt: new Date(),
  },
  {
    _id: "102",
    user: users[1],
    content: `I had an amazing experience at the art gallery today. 
    The exhibits were incredibly inspiring and full of vibrant colors. 
    I even managed to chat with one of the artists and learned a lot about their creative process.`,
    image: "https://example.com/gallery.jpg",
    createdAt: new Date(),
  },
  {
    _id: "103",
    user: users[2],
    content: `Cooking is truly an art, and I tried a new recipe today. 
    The dish turned out to be delicious, far exceeding my expectations. 
    Sharing a meal with family made it even more special.`,
    createdAt: new Date(),
  },
  {
    _id: "104",
    user: users[3],
    content: `I finally completed the marathon I've been training for months! 
    Crossing the finish line was one of the most fulfilling moments of my life. 
    The support from the crowd and my loved ones kept me going.`,
    createdAt: new Date(),
  },
  {
    _id: "105",
    user: users[4],
    content: `Just returned from a week-long camping trip in the mountains. 
    The serene environment was a perfect escape from the city hustle. 
    Each night, the clear sky full of stars was a breathtaking sight.`,
    image: "https://example.com/camping.jpg",
    createdAt: new Date(),
  },
];
