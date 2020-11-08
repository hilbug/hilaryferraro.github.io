import React from "react";
import Jumbo from "../components/Jumbotron/Jumbotron";

const headline = "Meet Hilary";
const leadText = "An aspiring full stack developer after 10+ years on the operations side of healthcare technology. Currently enrolled in UNH's Coding Bootcamp. Acquiring proficiency in HTML, CSS, Javascript, jQuery, Node.js, MySQL, APIs/AJAX, Express, React, Perl. Loves her Boston Terrier, reading, royal-watching, and travel shows.";

const Introduction = () => {
    return (
        <div>
            <Jumbo
                headline={headline}
                leadText={leadText}
            />
        </div>
    );
}

export default Introduction;

// from previous portfolio
