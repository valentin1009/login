import renderer from 'react-test-renderer';
import HeaderNav from "../components/HeaderNav";
import {BrowserRouter} from "react-router-dom";

describe("HeaderNav renders correctly", () => {
    it('Logout renders correctly', () => {
        const tree = renderer
            .create(<BrowserRouter><HeaderNav isLogin={true} logout={() => {}} /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Login renders correctly', () => {
        const tree = renderer
            .create(<BrowserRouter><HeaderNav isLogin={false} logout={() => {}} /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});