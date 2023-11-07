import React from "react";

export const Content = () => {
  const handleNameChange = () => {
    const names = ["Denis", "Maxim", "Evgeniy"];
    const int = Math.floor(Math.random() * 3);  
    return names[int]   
  };
  return (
    <main>
      <p>Hello, {handleNameChange()}</p>
    </main>
  );
};
