import "./styles/globals.css"
import MainLayout from "./layouts/Main/MainLayout"
import HomeLayout from "./layouts/Home/HomeLayout"

const layouts = {
    home:HomeLayout
}

function MainApp({ Component, pageProps }) {
    const ChildLayout = layouts[Component.layout] || (({ children }) => <>{children}</>)
    return (
        <MainLayout>
            <ChildLayout>
            <Component {...pageProps} />
            </ChildLayout>
        </MainLayout>
    )
}
export default MainApp