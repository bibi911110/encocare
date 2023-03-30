import LogoImg from '../../images/logos/logo.png'
export default function ApplicationLogo(props) {
    return (
        <img className={props.className} src={LogoImg}/>
    );
}


