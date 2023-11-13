import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function index({ data, onClick }) {
    const navigate= useNavigate();

    const navigateDetail= ()=> {
        navigate('detail/'+data.id);
    }

    return (
        <div className="card">
            {data ? (
                <>
                    <figure>
                        {data.i && data.i.imageUrl ? (
                            <img className="list-img" src={data.i.imageUrl} alt={data.l} />
                        ) : null}
                    </figure>
                    <div className="card-info">
                        <h3>{data.l}</h3>
                        <p>{data.q}</p>
                    </div>
                    <button className="detail-btn" onClick={navigateDetail}>Detail</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}