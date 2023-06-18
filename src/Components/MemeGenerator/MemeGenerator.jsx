import React, { useState, useEffect } from 'react';
import { BiImage } from 'react-icons/bi';

const MemeGenerator = () => {

  const [memes, setMemes] = useState([]);

  useEffect( () => {
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
        alert("Error fetching memes:", error);
      }); 
  }, []);

  // Image variable for virtual DOM
  let memeSource;
  let memeTitle;
  
    // Meme States
  const [memeImg, setMemeImg] = useState();
  const [memeAlt, setMemeAlt] = useState(memeTitle);
  const [displayCard, setDisplayCard] = useState("none");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  
  const [allMemeImages, setAllMemeImages] = useState();
  
  // Function to generate a random meme image //  
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
  
  const handleChange  = (event) => {
    const {name, value} = event.target 
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  return (
    <main>
      <div className='form'>
        <input 
          placeholder='Top Text' 
          className='form-input' 
          type="text" 
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          />
          

        <input 
          placeholder='Bottom Text' 
          className='form-input' 
          type="text" 
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          />

        <button 
          className='form-button' 
          onClick={getMemeImage}
          >
          Generate Meme <BiImage size={'1.5rem'} />
        </button>

      </div>
      <div style={{display : displayCard}} className='meme-image-card'>
        <img src={memeImg} alt={memeAlt} />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default MemeGenerator;
