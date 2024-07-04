import Header from "./Header";


const Layout = (Component) => (props) => {
    return (
        <>
            <Header />
            <Component {...props} />
            
        </>

    )
}

export default Layout;