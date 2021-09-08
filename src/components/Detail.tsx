import {Col} from "react-bootstrap";

const Detail = (props: any) => {
    return(
        <>
            {props.currentUser ? props.currentUser.email : "Empty Details"}
        </>
    );
};

export default Detail;