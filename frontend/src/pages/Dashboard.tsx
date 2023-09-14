import {useUser} from "../hooks/UserProdiver";
import {useState} from "react";
import useLocationWeather from "../hooks/useLocationWeather";
import {Card, Grid} from "semantic-ui-react";

function Dashboard() {

    const {user} = useUser();
    const weather = useLocationWeather({ lat: user?.lat, long: user?.long });

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
                        {weather && (
                            <Card.Content extra>
                                Current temperature: {weather.current_weather.temperature}
                            </Card.Content>
                        )}
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Dashboard;