import { BrowserRouter as Router } from 'react-router-dom';
import Content from "../../components/layout/Content";
import Menu from "../../components/layout/Menu";
import './Design.css';

function Design() {

    return (
        <div className="home">
                <Router>
                    <Menu />
                    <Content />
                </Router>
        </div>
    );
}

export default Design;