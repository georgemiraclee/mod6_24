import React from "react";
import "./index.css";


export default function index({ isShow, data, onCancel }){
    return (
        <div className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/detail">Detail</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </div>
    );
}
