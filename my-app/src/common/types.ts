import { type } from "os";
import React from "react";

// type User = {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
//   age: number;
// };
// type Users = Array<User>;

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   currency: string;
//   ingredients: string[];
//   type: string;
//   available: boolean;
// };

// type Products = Array<Products>;

// const users = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg",
//     age: 23,
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg",
//     age: 20,
//   },
// ];

// const products = [
//   {
//     id: 1,
//     name: "Burger Premium",
//     price: 6,
//     currency: "euro",
//     ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
//     type: "burger",
//     available: true,
//   },
//   {
//     id: 2,
//     name: "Burger Lite",
//     price: 2.3,
//     currency: "euro",
//     ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
//     type: "burger",
//     available: true,
//   },
// ];

// type GetUser = (id: number, users: Users) => User | undefined;

// const getUser: GetUser = (id, users) => users.find((user) => user.id === id);

type Country = {
  country: string;
  abbreviation: string;
  city: string;
  currency: string;
  population: number;
};

type Countries = Country[];

const countries: Countries = [
  {
    country: "United Arab Emirates",
    abbreviation: "AE",
    city: "Abu Dhabi",
    currency: "Arab Emirates Dirham",
    population: 9630959,
  },
  {
    country: "Poland",
    abbreviation: "PL",
    city: "Warszawa",
    currency: "Polish Zloty",
    population: 37974750,
  },
  {
    country: "Russian Federation",
    abbreviation: "RU",
    city: "Moscow",
    currency: "Russian Ruble",
    population: 144478050,
  },
];

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//     1. Создать строку из названий стран через запятую

type StringConcat = (item: Country[]) => string;

const stringConcat: StringConcat = (countries) => {
  let count = "";
  countries.forEach((item) => {
    count += `${item.country}`;
  });
  return count;
};
stringConcat(countries);

//     2. Посчитать общее количнство людей в данном массиве стран.

type GetNumberPeople = (item: Country[]) => number;

const getNumberPeople: GetNumberPeople = (countries) => {
  let result = 0;
  countries.forEach((item) => {
    result += item.population;
  });
  return result;
};
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.

type SortByCount = (item: Country[]) => void;

const sortByCount: SortByCount = (countries) => {
  countries.sort((a, b) => (a.country > b.country ? 1 : -1));
  return countries;
};
sortByCount(countries);

//     4. Получить массив валют.

type CurrencyName = (item: Country[]) => string;

const currencyName: CurrencyName = (countries) => {
  let result = "";
  countries.forEach((item) => {
    result = `${item.currency} in this ${item.country}`;
  });
  return result;
};
currencyName(countries);

//     5. Получить массив городов, отсортированных в алвавитном порядке.

type SortByCity = (item: Country[]) => void;

const sortByCity: SortByCity = (countries) => {
  countries.sort((a, b) => (a.city > b.city ? 1 : -1));
  return countries;
};
sortByCity(countries);

//     6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

type GetNumberPopulation = (item: Country[]) => string;

const getNumberPopulation: GetNumberPopulation = (countries) => {
  let result = "";
  countries.forEach((item) => {
    result = `${item.country} = ${item.population}`;
  });
  return result;
};

type User = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
};
type Users = User[];

const users: Users = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

// 1. Создать строку из имен пользователей через запятую

type StringName = (item: User[]) => string;

const stringName: StringName = (users) => {
  let result = "";
  users.forEach((item) => {
    result += `${item.name}`;
  });
  return result;
};
stringName(users);

// 2. Посчитать общее количнство машин у пользователей

// type GetNumberCar = (item: User[]) => number;

// const getNumberCar: GetNumberCar = (users) => {
//   let result = 0
//   if(item.cars) {
//     result++
//   }
// };

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

type FilterUserHasEducation = (item: User[]) => User[];

const filterUserHasEducation: FilterUserHasEducation = (users) => {
  return users.filter((user) => user.hasEducation);
};
filterUserHasEducation(users);

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

type FilterUserHasAnimals = (item: User[]) => User[];

const filterUserHasAnimals: FilterUserHasAnimals = (users) => {
  return users.filter((user) => user.animals);
};
filterUserHasAnimals(users);

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую

type StringCarPeople = (item: User[]) => string;

const stringCarPeople: StringCarPeople = (users) => {
  let result = "";
  users.forEach((item) => {
    result += `${item.cars}, `;
  });
  return result;
};
stringCarPeople(users);
