import {Button, Dropdown, Grid, Menu} from "semantic-ui-react";
import {redirect, useNavigate} from "react-router-dom";
import {useUser} from "../hooks/UserProdiver";

function HeaderNav() {

    const navigate = useNavigate();
    const {isLogin, user, logout} = useUser();

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column
                    computer={16}
                    mobile={15}
                >
                    <Menu>
                        <Menu.Item
                            name='home'
                        />
                        <Menu.Item
                            name='dashboard'
                        />

                        <Menu.Menu position='right'>
                            <Menu.Item>
                                {!isLogin ?
                                    <Button onClick={() => navigate("/signin")} primary>Login</Button> :
                                    <>{user?.name} <Button onClick={() => logout()} primary>Logout</Button></>
                                }
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default HeaderNav;