import { Player } from '@lottiefiles/react-lottie-player';
const NavBar = () => {
  return (
    <header>
        <nav className='navigation'>
        <Player
            className='lottie-player'
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_szusawu8.json"
        >
        </Player>
            <p>Grampy Meme Generator</p>
        </nav>
    </header>
  )
}

export default NavBar