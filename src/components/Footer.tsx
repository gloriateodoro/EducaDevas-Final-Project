import React from 'react';
import LogoReprograma from '../assets/repro.svg'; // Substitua pelo caminho real para o arquivo SVG da logo da Reprograma
import FacebookIcon from '../icons/Facebook';
import InstagramIcon from '../icons/Instagram';
import LinkedinIcon from '../icons/Linkedin';
import TwitterIcon from '../icons/Twitter';
import YoutubeIcon from '../icons/Youtube';

const Footer: React.FC = () => (
  <footer className="bg-gray-200">
    <div className='flex items-center justify-between mx-56 h-60'>
      <img src={LogoReprograma} alt="Logo da Reprograma" className="max-h-12" />
      <div className="flex space-x-8">
        <a href="#" >
        <FacebookIcon />
        </a>
        <a href="#" >
        <InstagramIcon />
        </a>
        <a href="#" >
        <LinkedinIcon />
        </a>
        <a href="#" >
        <TwitterIcon />
        </a>
        <a href="#" >
        <YoutubeIcon />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

