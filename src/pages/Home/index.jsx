import Card from "../../components/Cards/ResCard";
import ResData  from "../../utils/mockdata";
import Layout from "../../components/layout/Layout";

const Home = () => {
        return (
        <>
            <Card ResData={ResData} />
        </>
    )
}
export default Layout(Home);