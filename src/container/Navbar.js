import { useAuth } from "../AuthContext";
import NavbarComponent from "../components/navbar";

const Navbar = () => {

    const auth = useAuth()
    console.log(auth)

    const onSignout = () =>
        auth.signout()

    return (
        <NavbarComponent onSignout={onSignout} />
    )
}

export default Navbar