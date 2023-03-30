import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

function App () {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=>setRobots(users));
    }, []);
 
    const onSearchChange=(event)=>{
        setSearchField(event.target.value);

    }

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?
             <h1>Loading</h1> :

            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange = { onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundary>                    
                    </Scroll>                   
                    
                </div> 
            );

    }
export default App;