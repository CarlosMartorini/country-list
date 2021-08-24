import logo from '../../assets/logo_principal.png'

const HeaderBar = () => {
    return (
        <div>
            <img src={logo} alt='logo'/>
            <button>Voltar</button>
        </div>
    );
};

export default HeaderBar;