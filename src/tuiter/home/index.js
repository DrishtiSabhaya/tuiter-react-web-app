import HomeScreen from "./home";
import WhatsHappening from "./whats-happening";
import Tuits from "../tuits";

const HomeComponent = () => {
    return (
        <>
            <div>
                <WhatsHappening/>
                <Tuits/>
            </div>
        </>
    );
};

export default HomeComponent;