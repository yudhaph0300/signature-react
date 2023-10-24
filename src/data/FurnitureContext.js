import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FurnitureContext = createContext();

const FurnitureData = [
  {
    id: uuidv4(),
    name: "Fabric Upholstered Dining Chair with Armrest",
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
    type: "Dining Chair",
    price: 35,
    rating: 4.9,
    description:
      "Featuring comfortable fabric upholstery and supportive armrests, this dining chair provides an elevated dining experience. Its elegant design complements a variety of dining table styles.",
  },
  {
    id: uuidv4(),
    name: "White Vanity Table with Oval Mirror",
    img: "https://images.unsplash.com/photo-1491926626787-62db157af940?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmF8ZW58MHx8MHx8fDA%3D",
    type: "Vanity Table",
    price: 28,
    rating: 4.5,
    description:
      "This elegant white vanity table comes with an oval mirror, perfect for your daily grooming routine. It features ample storage space for your cosmetics and accessories.",
  },

  {
    id: uuidv4(),
    name: "Leather Padded Bar Stool with Backrest",
    img: "https://images.unsplash.com/photo-1630585308572-f53438fc684f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmF8ZW58MHx8MHx8fDA%3D",
    type: "Bar Stool",
    price: 28,
    rating: 4,
    description:
      "This stylish bar stool features a comfortable leather-padded seat and a supportive backrest. It's perfect for adding a touch of sophistication to your bar area.",
  },
  {
    id: uuidv4(),
    name: "Minimalist Wooden Bar Stool",
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
    type: "Bar Stool",
    price: 20,
    rating: 5,
    description:
      "Crafted from durable wood, this minimalist bar stool is both functional and stylish. Its clean lines and sturdy construction make it a versatile addition to your bar space.",
  },
  {
    id: uuidv4(),
    name: "Minimalist Wooden Study Desk",
    img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNvZmF8ZW58MHx8MHx8fDA%3D",
    type: "Study Desk",
    price: 18,
    rating: 4.5,
    description:
      "This minimalist study desk is crafted from high-quality wood. It provides a clean and organized workspace, making it ideal for studying or working from home.",
  },
  {
    id: uuidv4(),
    name: "Minimalist Shoe Rack with Drawers",
    img: "https://plus.unsplash.com/premium_photo-1673014201688-8b74e5a60777?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNvZmF8ZW58MHx8MHx8fDA%3D",
    type: "Shoe Rack",
    price: 12,
    rating: 4.5,
    description:
      "This minimalist shoe rack comes with convenient drawers for additional storage. It's perfect for keeping your shoes organized and your entryway clutter-free.",
  },
  {
    id: uuidv4(),
    name: "Solid Wood Modern Dining Chair",
    img: "https://images.unsplash.com/photo-1603192399946-8bbb0703cfc4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNvZmF8ZW58MHx8MHx8fDA%3D",
    type: "Dining Chair",
    price: 30,
    rating: 4.7,
    description:
      "Crafted from high-quality solid wood, this modern dining chair combines comfort and style. Its sleek design and sturdy construction make it a perfect addition to any dining room.",
  },
  {
    id: uuidv4(),
    name: "Teak Wood Wall-Mounted Shoe Rack",
    img: "https://images.unsplash.com/photo-1636651430146-00b72284bfbb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNvZmF8ZW58MHx8MHx8fDA%3D",
    type: "Shoe Rack",
    price: 15,
    rating: 4.7,
    description:
      "Crafted from high-quality teak wood, this wall-mounted shoe rack is both functional and stylish. It saves floor space while providing a practical storage solution for your footwear.",
  },
  {
    id: uuidv4(),
    name: "Mahogany Vanity Table with Armchair",
    img: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNvZmF8ZW58MHx8MHx8fDA%3D",
    type: "Vanity Table",
    price: 35,
    rating: 4.8,
    description:
      "Crafted from high-quality mahogany wood, this vanity table exudes sophistication. It includes a comfortable armchair and a spacious mirror for a luxurious grooming experience.",
  },

  {
    id: uuidv4(),
    name: "Children's Study Desk with Colorful Drawers",
    img: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Study Desk",
    price: 22,
    rating: 4.2,
    description:
      "This children's study desk features vibrant, colorful drawers, making it perfect for kids. It provides a fun and functional space for learning and creative activities.",
  },
];

const FurnitureProvider = ({ children }) => {
  const [furnitureData, setFurnitureData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("furnitureData"));
    return savedData || FurnitureData; // Jika data tersimpan, gunakan itu. Jika tidak, gunakan data awal.
  });

  const addFurniture = (newFurniture) => {
    setFurnitureData([...furnitureData, newFurniture]);
    localStorage.setItem(
      "furnitureData",
      JSON.stringify([...furnitureData, newFurniture])
    );
  };

  const deleteFurniture = (id) => {
    const updatedData = furnitureData.filter((item) => item.id !== id);
    setFurnitureData(updatedData);
    localStorage.setItem("furnitureData", JSON.stringify(updatedData));
  };

  const editFurniture = (id, updatedFurniture) => {
    const updatedData = furnitureData.map((item) =>
      item.id === id ? updatedFurniture : item
    );
    setFurnitureData(updatedData);
    localStorage.setItem("furnitureData", JSON.stringify(updatedData));
    // window.location.href = "/admin/furniture";
  };

  return (
    <FurnitureContext.Provider
      value={{
        furnitureData,
        setFurnitureData,
        addFurniture,
        deleteFurniture,
        editFurniture,
      }}
    >
      {children}
    </FurnitureContext.Provider>
  );
};

export { FurnitureContext, FurnitureProvider, FurnitureData };
