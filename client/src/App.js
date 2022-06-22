import "./App.css";

function App() {
    return (
        <div>
            <div className="sidebar">
                <h1>Projects</h1>
                <h3>Project 1</h3>
                <h3>Project 2</h3>
            </div>
            <div className="pageContent">
                <h1>Project Title</h1>
                <h3>Tasks</h3>
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>
                <h3>Completed Tasks</h3>
                <ul>
                    <li>Task 4</li>
                    <li>Task 5</li>
                    <li>Task 6</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
