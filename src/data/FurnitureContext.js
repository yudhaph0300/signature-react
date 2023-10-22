import React, { createContext, useState, useContext } from "react";

const FurnitureContext = createContext();

const FurnitureData = [
  {
    id: 1,
    name: "Teak Dining Chair with Armrest",
    type: "Dining Chair",
    price: 28,
    rating: 5,
    description:
      "This teak dining chair offers both style and comfort with its elegant armrests and high-quality craftsmanship. It's a perfect addition to any dining set.",
  },
  {
    id: 2,
    name: "Modern Coffee Table with Metal Legs",
    type: "Coffee Table",
    price: 15,
    rating: 4,
    description:
      "Enhance your living room with this modern coffee table featuring sleek metal legs. Its minimalist design complements a variety of interior styles.",
  },
  {
    id: 3,
    name: "Solid Wood Wardrobe with Mirror",
    type: "Wardrobe",
    price: 30,
    rating: 4,
    description:
      "Crafted from durable solid wood, this wardrobe comes with a convenient mirror. It provides ample storage space for your clothing and accessories.",
  },
  {
    id: 4,
    name: "Children's Study Desk with Bookshelf",
    type: "Study Desk",
    price: 10,
    rating: 4,
    description:
      "This children's study desk is designed with a built-in bookshelf for organized storage. It's the perfect addition to a child's learning space.",
  },
  {
    id: 5,
    name: "Bar Stool with Leather Cushion",
    type: "Bar Stool",
    price: 12,
    rating: 3,
    description:
      "Elevate your bar area with this stylish bar stool featuring a comfortable leather cushion. Its sturdy construction ensures long-lasting use.",
  },
  {
    id: 6,
    name: "Minimalist Wooden Bookshelf",
    type: "Bookshelf",
    price: 20,
    rating: 5,
    description:
      "Organize your book collection with this minimalist wooden bookshelf. Its clean lines and durable wood make it a functional and stylish addition to any room.",
  },
  {
    id: 7,
    name: "Fabric Lounge Chair",
    type: "Chair",
    price: 18,
    rating: 4,
    description:
      "Relax in style with this comfortable fabric lounge chair. Its contemporary design and high-quality fabric upholstery make it a standout piece in any living space.",
  },
  {
    id: 8,
    name: "Vanity Table with Round Mirror",
    type: "Vanity Table",
    price: 25,
    rating: 5,
    description:
      "This elegant vanity table comes with a round mirror, perfect for your daily grooming routine. It adds a touch of sophistication to any bedroom.",
  },
  {
    id: 9,
    name: "Minimalist Shoe Rack",
    type: "Shoe Rack",
    price: 9,
    rating: 3,
    description:
      "Keep your shoes organized with this minimalist shoe rack. Its compact design fits well in any entryway or closet space.",
  },
];

const FurnitureProvider = ({ children }) => {
  const [furnitureData, setFurnitureData] = useState(FurnitureData);

  return (
    <FurnitureContext.Provider value={{ furnitureData, setFurnitureData }}>
      {children}
    </FurnitureContext.Provider>
  );
};

export { FurnitureContext, FurnitureProvider, FurnitureData };
