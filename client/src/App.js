import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [listOfProjects, setListOfProjects] = useState([]);
    const [listOfProjectsTasks, setListOfProjectsTasks] = useState([]);
    const [seletedProjectID, setSeletedProjectID] = useState("62b45acbf96a989f04c407ef");

    useEffect(() => {
        axios.get("http://localhost:4000/getProject").then((response) => {
            console.log(response.data);
            setListOfProjects(response.data);

            const filteredProject = response.data.filter((id) => id._id === seletedProjectID);

            setListOfProjectsTasks(filteredProject);
        });
    }, [seletedProjectID]);

    const selectProject = (e) => {
        console.log(e.target.id);
        setSeletedProjectID(e.target.id);
    };

    const updateTask = () => {};
    const completeTask = () => {};
    const deleteTask = () => {};

    return (
        <div>
            <div className="sidebar">
                <h1>Projects</h1>
                {listOfProjects.map((projects) => {
                    return (
                        <div>
                            <h3 id={projects._id} onClick={selectProject}>
                                {projects.project}
                            </h3>
                        </div>
                    );
                })}
            </div>
            <div className="pageContent">
                {listOfProjectsTasks.map((projects) => {
                    return (
                        <div className="tasks">
                            <h1>{projects.project}</h1>
                            <h3>Tasks</h3>

                            {projects.project_tasks.map((tasks) => {
                                if (tasks.completed === false) {
                                    return (
                                        <div className="task">
                                            <p className="taskName">{tasks.task}</p>
                                            <button
                                                onClick={() => {
                                                    updateTask(projects._id);
                                                }}
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => {
                                                    completeTask(projects._id);
                                                }}
                                            >
                                                Complete
                                            </button>
                                            <button
                                                onClick={() => {
                                                    deleteTask(projects._id);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    );
                })}

                <h3>Completed Tasks</h3>
                {listOfProjectsTasks.map((projects) => {
                    return (
                        <div className="tasks">
                            {projects.project_tasks.map((tasks) => {
                                if (tasks.completed === true) {
                                    return (
                                        <div className="task">
                                            <p>{tasks.task}</p>
                                        </div>
                                    );
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
