import React, { useState, useEffect } from 'react';
import { BiImage } from 'react-icons/bi';

const MemeGenerator = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    // Fetch memes from Imgflip API
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        // Access the memes array from the response data
        const memes = data.data.memes;
        setMemes(memes);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching memes:", error);
      });
  }, []);

  // Function to generate a random meme image //  
  let memeSource;
  let memeTitle;

  const [memeImg, setMemeImg] = useState();
  const [memeAlt, setMemeAlt] = useState(memeTitle);
  const [displayCard, setDisplayCard] = useState("none")

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * memes.length);
    const selectedMeme = memes[randomNumber];
    memeSource = selectedMeme.url;
    memeTitle = selectedMeme.name;
    
    // Handle states  changes the variable when the button is clicked
    setDisplayCard("block");
    setMemeImg(memeSource);
    setMemeAlt(memeTitle);
  };

  return (
    <main>
      <div className='form'>
        <input placeholder='Top Text' className='form-input' type="text" />
        <input placeholder='Bottom Text' className='form-input' type="text" />
        <button
          className='form-button'
          onClick={getMemeImage}
        >
          Generate Meme <BiImage size={'1.5rem'} />
        </button>
      </div>
      <div style={{display : displayCard}} className='meme-image-card'>
        <img src={memeImg} alt={memeAlt} />
      </div>
    </main>
  );
};

export default MemeGenerator;
