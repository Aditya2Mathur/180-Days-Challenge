import React from "react";
import StudentDetail from "./StudentDetail";
import "./Student.css";
import Card from "./Card";

const Students = (props) => {
    return (
        <Card className="students">
            <StudentDetail 
            name = {props.detail[0].name}
            branch = {props.detail[0].branch}
            year = {props.detail[0].year}
            />
            <StudentDetail 
            name = {props.detail[1].name}
            branch = {props.detail[1].branch}
            year = {props.detail[1].year}
            />
            <StudentDetail 
            name = {props.detail[2].name}
            branch = {props.detail[2].branch}
            year = {props.detail[2].year}
            />
            <StudentDetail 
            name = {props.detail[3].name}
            branch = {props.detail[3].branch}
            year = {props.detail[3].year}
            />
        </Card>
    )
}


export default Students;