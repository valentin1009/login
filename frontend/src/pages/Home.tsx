import {Card, Grid} from "semantic-ui-react";
import {useUser} from "../hooks/UserProdiver";

function Home() {
    const {isLogin, user} = useUser();
    if (!isLogin) {
        return <></>
    }

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column
                    computer={8}
                    mobile={15}
                >
                <Card>
                    <Card.Content>
                        <Card.Header>{user?.name}</Card.Header>
                        <Card.Meta>{user?.email}</Card.Meta>
                        <Card.Description>
                            {user?.lat ?? `Lat: ${user?.lat}`}{' '}{user?.long && `Long: ${user?.long}`}
                        </Card.Description>
                    </Card.Content>
                </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Home;