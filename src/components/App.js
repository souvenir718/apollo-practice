import { Route, Switch } from 'react-router';
import logo from '../logo.svg';
import '../styles/App.css';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';

function App() {
    // return <LinkList />;
    return (
        <div className="center w85">
            <Header />
            <div className="ph3 pv1 background-gray">
                <Switch>
                    <Route exact path="/" component={LinkList} />
                    <Route exact path="/create" component={CreateLink} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
