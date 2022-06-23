import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [listOfProjects, setListOfProjects] = useState([]);
    const [listOfProjectsTasks, setListOfProjectsTasks] = useState([]);

    const params = {
        project: { toJSON: () => "Metro App" },
    };

    useEffect(() => {
        axios.get("http://localhost:4000/getProject", { params }).then((response) => {
            console.log(response.data);
            setListOfProjects(response.data);
            setListOfProjectsTasks(response.data);
        });
    }, []);
    return (
        <div>
            <div className="sidebar">
                <h1>Projects</h1>
                {listOfProjects.map((projects) => {
                    return (
                        <div>
                            <h3>Project: {projects.project}</h3>
                        </div>
                    );
                })}
            </div>
            <div className="pageContent">
                <h1>Project Title</h1>
                <h3>Tasks</h3>

                {listOfProjectsTasks.map((projects) => {
                    return (
                        <div className="tasks">
                            <p>{projects.project}</p>
                            {projects.project_tasks.map((tasks) => {
                                if (tasks.completed === true) {
                                    return <div>{tasks.task}</div>;
                                }
                            })}
                        </div>
                    );
                })}

                <h3>Completed Tasks</h3>
                {listOfProjectsTasks.map((projects) => {
                    return (
                        <div className="tasks">
                            <p>{projects.project}</p>
                            {projects.project_tasks.map((tasks) => {
                                if (tasks.completed === false) {
                                    return <div>{tasks.task}</div>;
                                }
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
