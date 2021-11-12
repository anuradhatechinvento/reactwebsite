import React from "react";
import web from "../src/images/curl.jpg";
import Comman from "./Comman"
const About = () => {
    return (
        <>
            <Comman name="Welcome to about page"  imgsrc={web} visit ="./contact" btname="Contact Now"/>

        </>


    );


};
export default About;