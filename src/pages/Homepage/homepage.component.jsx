import React from 'react';
import Hero from '../../components/Hero/hero.component';



const HomePage = (props) => {

    console.log(props.match);
    return (
        <div className={`homepage`}>
            <Hero />
        </div>
    )
}


export default HomePage;