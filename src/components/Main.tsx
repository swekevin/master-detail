import {useEffect, useState} from "react";
import {UserInformation} from "../data/UserInformation";
import {IUser} from "../models/IUser";
import Master from "./Master";
/*
THERE IS A BIG ISSUE WITH REACT BOOTSTRAP, FOLLOW THIS ANSWER GUIDE TO FIX THE ISSUE
https://stackoverflow.com/questions/47354472/react-bootstrap-not-styling-my-react-components
 */



const Main = () => {
    const [userData, setUserData] =  useState<IUser[] | undefined>([]);


    useEffect(() =>{
        setUserData(UserInformation);
    }, []);

    return(
        <Master userData={userData}/>
    );
};

export default Main;