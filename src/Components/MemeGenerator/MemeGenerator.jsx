import React, { useState, useEffect, useRef } from 'react';
import { BiImage } from 'react-icons/bi';
import html2canvas from 'html2canvas';

const MemeGenerator = () => {
  const [memes, setMemes] = useState([]);
  const [memeImg, setMemeImg] = useState('');
  const [memeAlt, setMemeAlt] = useState('');
  const [displayCard, setDisplayCard] = useState('none');
  const exportRef = useRef();

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => {
        const memes = data.data.memes;
        setMemes(memes);
      })
      .catch(error => {
        console.error('Error fetching memes:', error);
      });
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * memes.length);
    const selectedMeme = memes[randomNumber];
    setDisplayCard('block');
    setMemeImg(selectedMeme.url);
    setMemeAlt(selectedMeme.name);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    const element = document.getElementById('capture');

    html2canvas(element).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'download.png');
      });
    });
  };

  const handleCaptureImage = () => {
    html2canvas(exportRef.current).then(canvas => {
      const image = canvas.toDataURL('image/png');
      downloadImage(image, 'test.png');
    });
  };

  const downloadImage = (imageDataUrl, fileName) => {
    const anchor = document.createElement('a');
    anchor.href = imageDataUrl;
    anchor.download = fileName;
    anchor.click();
  };

  return (
    <main>
      <div className='form'>
        <input
          placeholder='Top Text'
          className='form-input'
          type='text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          placeholder='Bottom Text'
          className='form-input'
          type='text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button className='form-button' onClick={getMemeImage}>
          Generate Meme <BiImage size={'1.5rem'} />
        </button>
      </div>

      <div ref={exportRef}>
      <div style={{ display: displayCard }} className='meme-image-card' >
        <img src={memeImg} alt={memeAlt} />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
      </div>

      <button onClick={handleCaptureImage}>Download Image</button>
    </main>
  );
};

export default MemeGenerator;
