import React, { useEffect } from "react";
import Tablet from "./Tablet";

const TabletsAnimationContainer = () => {
  const dailyUseWords = [
    "Hello",
    "Goodbye",
    "Please",
    "Thank you",
    "Sorry",
    "Yes",
    "No",
    "Excuse me",
    "Help",
    "Yes",
    "No",
    "Time",
    "Day",
    "Night",
    "Week",
    "Month",
    "Year",
    "Today",
    "Tomorrow",
    "Yesterday",
    "Morning",
    "Evening",
    "Afternoon",
    "Night",
    "Hour",
    "Minute",
    "Second",
    "Clock",
    "Watch",
    "Calendar",
    "Season",
    "Spring",
    "Summer",
    "Autumn",
    "Fall",
    "Winter",
    "Weather",
    "Rain",
    "Snow",
    "Sun",
    "Wind",
    "Cloud",
    "Sky",
    "Star",
    "Moon",
    "Earth",
    "Land",
    "Water",
    "Fire",
    "Air",
    "Tree",
    "Flower",
    "Grass",
    "Leaf",
    "Root",
    "Branch",
    "Seed",
    "Fruit",
    "Vegetable",
    "Plant",
    "Animal",
    "Bird",
    "Fish",
    "Insect",
    "Dog",
    "Cat",
    "Mouse",
    "Rat",
    "Cow",
    "Horse",
    "Sheep",
    "Pig",
    "Chicken",
    "Duck",
    "Goose",
    "Egg",
    "Milk",
    "Meat",
    "Fish",
    "Bread",
    "Rice",
    "Sugar",
    "Salt",
    "Water",
    "Tea",
    "Coffee",
    "Milk",
    "Juice",
    "Beer",
    "Wine",
    "Food",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Meal",
    "Plate",
    "Bowl",
    "Cup",
    "Glass",
    "Spoon",
    "Fork",
    "Knife",
    "Cook",
    "Bake",
    "Fry",
    "Boil",
    "Roast",
    "Grill",
  ];

  //   useEffect(() => {
  //     const scrollers = document.querySelectorAll(".scroller1");

  //     // If a user hasn't opted in for recuded motion, then we add the animation
  //     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //       addAnimation();
  //     }

  //     function addAnimation() {
  //       scrollers.forEach((scroller) => {
  //         // add data-animated="true" to every `.scroller` on the page
  //         scroller.setAttribute("data-animated", true);

  //         // Make an array from the elements within `.scroller-inner`
  //         const scrollerInner = scroller.querySelector(".scroller__inner1");
  //         const scrollerContent = Array.from(scrollerInner.children);

  //         // For each item in the array, clone it
  //         // add aria-hidden to it
  //         // add it into the `.scroller-inner`
  //         scrollerContent.forEach((item) => {
  //           const duplicatedItem = item.cloneNode(true);
  //           duplicatedItem.setAttribute("aria-hidden", true);
  //           item.length > 12 && item.remove();
  //           scrollerInner.appendChild(duplicatedItem);
  //         });
  //       });
  //     }
  //   });

  //   useEffect(() => {
  //     const scrollers = document.querySelectorAll(".scroller2");

  //     // If a user hasn't opted in for recuded motion, then we add the animation
  //     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //       addAnimation();
  //     }

  //     function addAnimation() {
  //       scrollers.forEach((scroller) => {
  //         // add data-animated="true" to every `.scroller` on the page
  //         scroller.setAttribute("data-animated", true);

  //         // Make an array from the elements within `.scroller-inner`
  //         const scrollerInner = scroller.querySelector(".scroller__inner2");
  //         const scrollerContent = Array.from(scrollerInner.children);

  //         // For each item in the array, clone it
  //         // add aria-hidden to it
  //         // add it into the `.scroller-inner`
  //         scrollerContent.forEach((item) => {
  //           const duplicatedItem = item.cloneNode(true);
  //           duplicatedItem.setAttribute("aria-hidden", true);
  //           item.length > 12 && item.remove();
  //           scrollerInner.appendChild(duplicatedItem);
  //         });
  //       });
  //     }
  //   });

  //   useEffect(() => {
  //     const scrollers = document.querySelectorAll(".scroller3");

  //     // If a user hasn't opted in for recuded motion, then we add the animation
  //     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //       addAnimation();
  //     }

  //     function addAnimation() {
  //       scrollers.forEach((scroller) => {
  //         // add data-animated="true" to every `.scroller` on the page
  //         scroller.setAttribute("data-animated", true);

  //         // Make an array from the elements within `.scroller-inner`
  //         const scrollerInner = scroller.querySelector(".scroller__inner3");
  //         const scrollerContent = Array.from(scrollerInner.children);

  //         // For each item in the array, clone it
  //         // add aria-hidden to it
  //         // add it into the `.scroller-inner`
  //         scrollerContent.forEach((item) => {
  //           const duplicatedItem = item.cloneNode(true);
  //           duplicatedItem.setAttribute("aria-hidden", true);
  //           item.length > 12 && item.remove();
  //           scrollerInner.appendChild(duplicatedItem);
  //         });
  //       });
  //     }
  //   });
  return (
    <div className="w-full flex flex-col justofy-start blur-[0.7px] mb-28 items-start gap-4">
      <div
        className="w-full h-auto scroller1 flex justify-start items-center gap-4"
        data-speed="slow"
        data-animated="true"
      >
        <div className="scroller__inner1 w-full flex justify-start items-center gap-4">
          {dailyUseWords?.map((word) => {
            return <Tablet word={word} key={word} />;
          })}
        </div>
      </div>
      <div
        className="w-full h-auto scroller2 flex justify-start items-center gap-4"
        data-speed="fast"
        data-animated="true"
      >
        <div className="scroller__inner2 w-full flex justify-start items-center gap-4">
          {dailyUseWords?.map((word) => {
            return <Tablet word={word} key={word} />;
          })}
        </div>
      </div>
      <div
        className="w-full h-auto scroller3 flex justify-start items-center gap-4"
        data-speed="slow"
        data-animated="true"
      >
        <div className="scroller__inner3 w-full flex justify-start items-center gap-4">
          {dailyUseWords?.map((word) => {
            return <Tablet word={word} key={word} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TabletsAnimationContainer;
