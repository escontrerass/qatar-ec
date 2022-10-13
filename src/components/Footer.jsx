import logoVite from '../assets/vite-logo.svg'
import logoReact from '../assets/react-logo.svg'
import logoTailwind from '../assets/tailwind-logo.svg'
import logoGithub from '../assets/github-logo.svg'

export function Footer() {
  return (
    <footer className='mx-auto flex h-[10vh] max-w-7xl items-center justify-around bg-gray-500 px-1'>
      <div className='text-center'>
        <p className='mb-1 font-light text-white'>Technologies used</p>
        <div className='flex items-center justify-evenly'>
          <a href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer' title='Vite logo'>
            <img src={logoVite} alt='Vite logo' className='mx-auto w-7' />
          </a>
          <a href='https://es.reactjs.org/' target='_blank' rel='noopener noreferrer' title='React logo'>
            <img src={logoReact} alt='React logo' className='mx-auto w-7' />
          </a>
          <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer' title='Tailwind logo'>
            <img src={logoTailwind} alt='Tailwind logo' className='mx-auto w-7' />
          </a>
        </div>
      </div>
      <div className='text-center'>
        <p className='font-light text-white'>Power by</p>
        <a
          href='https://github.com/raminmr/free-api-worldcup2022'
          target='_blank'
          rel='noopener noreferrer'
          className='font-qatar font-bold text-rose-700 hover:text-white'
          title='API Qatar 2022'
        >
          Api Qatar 2022
        </a>
      </div>
      <div className='text-center'>
        <p className='mb-1 font-light text-white'>Design by</p>
        <a
          href='https://github.com/escontrerass/qatar-ec'
          target='_blank'
          rel='noopener noreferrer'
          title='Github logo'
        >
          <img src={logoGithub} alt='Github logo' className='mx-auto w-7' />
        </a>
      </div>
    </footer>
  )
}
