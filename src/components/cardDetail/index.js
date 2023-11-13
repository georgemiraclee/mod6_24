import React from "react";
import "./index.css";

export default function index({ data }) {
    return (
        <div className="detail">
            {data ? (
                <>
                    <figure>
                        {data && data.base.image.url ? (
                            <img className="detail-img" src={data.base.image.url} alt={data.base.title} />
                        ) : null}
                    </figure>
                    <div className="detail-info">
                        <h3>{data.base.title} ({data.base.year})</h3>
                        <p>{data.plots[0].text}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}