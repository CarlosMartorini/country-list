import logo from '../../assets/logo_principal.png'
import { ContainerBar } from'./styles';
import { IoReturnDownBackSharp } from 'react-icons/io5'

const HeaderBar = () => {
    return (
        <ContainerBar>
            <img src={logo} alt='logo'/>
            <button><IoReturnDownBackSharp/> Voltar</button>
        </ContainerBar>
    );
};

export default HeaderBar;