import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Data from API</h1>
            <ul>
                {data.slice(0, 10).map((item) => (
                    <li key={item.id}>
                        <strong>{item.title}</strong>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
