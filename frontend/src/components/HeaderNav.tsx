import {Button, Dropdown, Grid, Menu} from "semantic-ui-react";
import {redirect, useNavigate} from "react-router-dom";
import {useUser} from "../hooks/UserProdiver";

type TProps = {
    isLogin: boolean;
    logout: () => void;
}

function HeaderNav({ isLogin, logout }: TProps) {
    const navigate = useNavigate();

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
                            onClick={() => navigate("/")}
                        />
                        {isLogin && (
                            <Menu.Item
                                name='dashboard'
                                onClick={() => navigate("/dashboard")}
                            />
                        )}

                        <Menu.Menu position='right'>
                            <Menu.Item>
                                {!isLogin ?
                                    <Button onClick={() => navigate("/signin")} primary>Login</Button> :
                                    <Button onClick={() => logout()} primary>Logout</Button>
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