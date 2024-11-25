import './assets/index.css'
import {Home} from "./components/Home.jsx";
import Layout from "@/app/layout.jsx";

export const App = () => {

    return (
        <>
            <Layout>
                <Home/>
            </Layout>
        </>
    )
}