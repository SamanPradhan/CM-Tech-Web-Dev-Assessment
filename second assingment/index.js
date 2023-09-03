const contacts = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    age: 35,
    password: "gT%8()",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@example.com",
    age: 28,
    password: "gT%8()",
    phone: "8899776655",
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    age: 32,
    password: "gT%8()",
    phone: "7778889999",
  },
  {
    id: 4,
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    age: 30,
    password: "gT%8()",
    phone: "9988776655",
  },
  {
    id: 5,
    name: "Kavita Singh",
    email: "kavita.singh@example.com",
    age: 27,
    password: "gT%8()",
    phone: "8765432109",
  },
];

const orders = [
  {
    id: 101,
    productsSold: 3,
    totalOrderValue: 1500,
    productNames: ["Smartphone", "Laptop", "Headphones"],
    email: "amit.sharma@example.com",
    orderDate: "2021-08-15",
  },
  {
    id: 102,
    productsSold: 2,
    totalOrderValue: 800,
    productNames: ["Tablet", "Bluetooth Speaker"],
    email: "priya.patel@example.com",
    orderDate: "2021-04-10",
  },
  {
    id: 103,
    productsSold: 4,
    totalOrderValue: 2200,
    productNames: [
      "Television",
      "Refrigerator",
      "Washing Machine",
      "Microwave Oven",
    ],
    email: "rahul.verma@example.com",
    orderDate: "20213-07-08",
  },
  {
    id: 104,
    productsSold: 1,
    totalOrderValue: 500,
    productNames: ["Fitness Tracker"],
    email: "neha.gupta@example.com",
    orderDate: "2022-01-15",
  },
  {
    id: 105,
    productsSold: 2,
    totalOrderValue: 1600,
    productNames: ["Camera", "Tripod"],
    email: "kavita.singh@example.com",
    orderDate: "2021-09-25",
  },
  {
    id: 106,
    productsSold: 2,
    totalOrderValue: 1500,
    productNames: ["Camera", "Tripod"],
    email: "kavita.singh@example.com",
    orderDate: "2021-09-25",
  },
];
function combineData(contacts, orders) {
  const emailToUserData = {};

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    emailToUserData[contact.email] = { ...contact, orders: [] };
  }

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const userData = emailToUserData[order.email];
    if (userData) {
      userData.orders.push(order);
    }
  }

  const result = Object.values(emailToUserData);

  return result;
}

const combinedData = combineData(contacts, orders);
console.log(combinedData);
