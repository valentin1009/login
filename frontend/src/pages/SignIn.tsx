import {Form, Grid, Message, Segment} from "semantic-ui-react";
import {useUser} from "../hooks/UserProdiver";
import {useRef} from "react";

function SignIn() {

    const {login, loginLoading, loginError} = useUser();
    const emailRef= useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const handleLogin = () => {
        if (emailRef.current && passRef.current) {
            login(emailRef.current.value, passRef.current.value);
        }

        return;
    };

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column
                    computer={8}
                    mobile={15}
                >
                    <Segment>
                        <Form loading={loginLoading} error={!!loginError} onSubmit={handleLogin}>
                            {loginError && <Message
                                error
                                header='Error'
                                content={loginError}
                            />}
                            <Form.Field>
                                <label>Enter Email</label>
                                <input type="email" ref={emailRef} />
                            </Form.Field>
                            <Form.Field>
                                <label>Enter Password</label>
                                <input type="password" ref={passRef} />
                            </Form.Field>
                            <Form.Button>Submit</Form.Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default SignIn;