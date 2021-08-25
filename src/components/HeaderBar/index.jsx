import logo from '../../assets/logo_principal.png'
import { ContainerBar } from'./styles';
import { IoReturnDownBackSharp } from 'react-icons/io5'

const HeaderBar = () => {

    const handleButton = () => {
        window.location.reload()
    }

    return (
        <ContainerBar>
            <img src={logo} alt='logo'/>
            <button onClick={() => handleButton()}><IoReturnDownBackSharp/> Voltar</button>
        </ContainerBar>
    );
};

export default HeaderBar;