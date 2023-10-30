import { Navbar } from './style';
import logogato from '../assets/gatinho.png';

export function Header() {
    return (
        <Navbar>
        <img src={logogato} className='logo-gatinho' />
        <h1>Aprendendo useEffect com Gatinhos</h1>    
       </Navbar>
    );
}
