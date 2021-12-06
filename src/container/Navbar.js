import NavbarComponent from "../components/navbar";

const Navbar = () => {

    const onSignout = () =>
        console.log("signout")

    return (
        <NavbarComponent onSignout={onSignout} />
    )
}

export default Navbar