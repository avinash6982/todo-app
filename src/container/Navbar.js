import { useAuth } from "../AuthContext";
import NavbarComponent from "../components/navbar";

const Navbar = () => {

    const auth = useAuth()

    const onSignout = () =>
        auth.signout()

    return (
        <NavbarComponent onSignout={onSignout} />
    )
}

export default Navbar