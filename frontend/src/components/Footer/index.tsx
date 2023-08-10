import { StyledFooter } from './style';
import Logo from '../../utils/images/logo2.svg';
import { BiChevronUp } from 'react-icons/bi';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className='container'>
        <img src={Logo} alt='brand logo' />
        <p className='text-style-text-body-2-400'>
          © 2022 - Todos os direitos reservados.
        </p>
        <button>
          <BiChevronUp />
        </button>
      </div>
    </StyledFooter>
  );
};
