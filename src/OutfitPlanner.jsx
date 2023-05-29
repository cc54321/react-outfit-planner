import React, { useState } from 'react';
import './Outfit.css';
import clothing from './MockData';


const OutfitPlanner = () => {
  const [outfit, setOutfit] = useState(null);

  const generateOutfit = (dressCode) => {
    const filteredClothing = clothing.filter((item) => item.dressCode === dressCode);

    if (filteredClothing.length === 0) {
      setOutfit(null);
      return;
    }

    const randomTop = getRandomItem(filteredClothing, 'top');
    const randomBottom = getRandomItem(filteredClothing, 'bottom');
    const randomShoes = getRandomItem(filteredClothing, 'shoes');

    const newOutfit = {
      top: randomTop,
      bottom: randomBottom,
      shoes: randomShoes,
    };

    setOutfit(newOutfit);
  };

  const getRandomItem = (items, type) => {
    const filteredItems = items.filter((item) => item.type === type);
    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    return filteredItems[randomIndex];
  };

  return (
    <div className="outfit-planner">
      <h2>Outfit Planner</h2>
      <div className="buttons">
        <button onClick={() => generateOutfit('casual')}>Casual</button>
        <button onClick={() => generateOutfit('sport')}>Sport</button>
        <button onClick={() => generateOutfit('formal')}>Formal</button>
      </div>
      {outfit && (
        <div className="outfit">
          <h3>Generated Outfit:</h3>
          {outfit.top ? (
            <div className="item">
              <img src={outfit.top.imageUrl} alt={outfit.top.description} />
              <p>{outfit.top.description}</p>
            </div>
          ) : (
            <div className="item">
              <p>No top found for formal dress code</p>
            </div>
          )}
          {outfit.bottom ? (
            <div className="item">
              <img src={outfit.bottom.imageUrl} alt={outfit.bottom.description} />
              <p>{outfit.bottom.description}</p>
            </div>
          ) : (
            <div className="item">
              <p>No bottom found for formal dress code</p>
            </div>
          )}
          {outfit.shoes ? (
            <div className="item">
              <img src={outfit.shoes.imageUrl} alt={outfit.shoes.description} />
              <p>{outfit.shoes.description}</p>
            </div>
          ) : (
            <div className="item">
              <p>No shoes found for formal dress code</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OutfitPlanner;


// const OutfitPlanner = () => {
//   const [outfit, setOutfit] = useState(null);

//   const generateOutfit = (dressCode) => {
//     const filteredClothing = clothing.filter((item) => item.dressCode === dressCode);

//     if (filteredClothing.length === 0) {
//       setOutfit(null);
//       return;
//     }

//     const randomTop = getRandomItem(filteredClothing, 'top');
//     const randomBottom = getRandomItem(filteredClothing, 'bottom');
//     const randomShoes = getRandomItem(filteredClothing, 'shoes');

//     const newOutfit = {
//       top: randomTop,
//       bottom: randomBottom,
//       shoes: randomShoes,
//     };

//     setOutfit(newOutfit);
//   };

//   const getRandomItem = (items, type) => {
//     const filteredItems = items.filter((item) => item.type === type);
//     const randomIndex = Math.floor(Math.random() * filteredItems.length);
//     return filteredItems[randomIndex];
//   };

//   return (
//     <div className="outfit-planner">
//       <h2>Outfit Planner</h2>
//       <div className="buttons">
//         <button onClick={() => generateOutfit('casual')}>Casual</button>
//         <button onClick={() => generateOutfit('sport')}>Sport</button>
//         <button onClick={() => generateOutfit('formal')}>Formal</button>
//       </div>
//       {outfit && (
//         <div className="outfit">
//           <h3>Generated Outfit:</h3>
//           <div className="item">
//             <img src={outfit.top.imageUrl} alt={outfit.top.description} />
//             <p>{outfit.top.description}</p>
//           </div>
//           <div className="item">
//             <img src={outfit.bottom.imageUrl} alt={outfit.bottom.description} />
//             <p>{outfit.bottom.description}</p>
//           </div>
//           <div className="item">
//             <img src={outfit.shoes.imageUrl} alt={outfit.shoes.description} />
//             <p>{outfit.shoes.description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OutfitPlanner;