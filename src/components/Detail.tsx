import {Col} from "react-bootstrap";

const Detail = (props: any) => {
    return(
        props.currentUser ?

        <>

            <div id="user-details-div" style={{position: "fixed"}}>
                <h1>
                    {props.currentUser.fullName}
                </h1>
                <p>
                    Username: {props.currentUser.username} <br/>
                    Password: {props.currentUser.password} <br/>
                    Age: {props.currentUser.age} <br/>
                    Email: {props.currentUser.email} <br/> <br/>
                    {props.currentUser.description}
                </p>

            </div>
        </>
            :
            <>
                <div>
                    <h1>
                        No User Selected
                    </h1>
                </div>
            </>
    );
};

export default Detail;