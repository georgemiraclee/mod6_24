import React, { useState, useEffect } from "react";
import axios from "axios";


// Components
import Card from "../components/card";



export default function ListMovie() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("Iron Man");
    

    
    useEffect(() => {
        const fetchData = async (query) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                "https://imdb8.p.rapidapi.com/auto-complete",{
                params: { q: query },
                headers: {
                    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
                    "X-RapidAPI-Key": "ee4ea94c99mshb4dcf3716227e3fp1fd465jsna385dd04617c",
                },
                }
            );
            if (response.status === 200) {
                setData(response.data);
                setisLoaded(true);
                setIsLoading(false);
                console.log(data)
            }
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    };
    if (!isLoaded) {
        fetchData(query);
    }
}, [isLoaded, query]);
const onSearch = (e) => {
    if (e.key === "Enter") {
        setisLoaded(false);
        setQuery(e.target.value);
    }
    };
    return (
        <main>
            <input
                type="text"
                placeholder="Search film by name"
                onKeyDown={(e) => onSearch(e)}
            />
            <h3 className="title">Search : {query}</h3>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                {data.d.map((item, index) => {
                    return (
                    <Card data={item} key={index} />
                    );
                })}
                </div>
            )}
        </main>
    );
}
