import Image from 'next/image';
import LogoImg from '../../public/post-genius-logo.png';

export const Logo = () => {
    return <Image src={LogoImg} alt="Logo" priority />;
};
