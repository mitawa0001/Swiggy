import Card from "../../components/Cards/ResCard";
import ResData  from "../../utils/mockdata";
import Header from "../../components/layout/Header";



const Home = () => {
        return (
        <>
            <Header/>
            <Card ResData={ResData} />
        </>
    )
}
export default Home;