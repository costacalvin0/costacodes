import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import React from 'react'
import "./index.css";

export type ProjectCardProps = {
    title: string,
    description: string,
    image: string,
    demo?: string,
    code?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    demo,
    code,
}) => {
    return (
        <div>
            <Card className='card'>
                <CardMedia ><img src={image} alt="Project Visual" className='Image' /></CardMedia>
                <h3>{title}</h3>
                <CardContent>{description}</CardContent>
                <CardActionArea><a href={demo} >Demo</a></CardActionArea>
                <CardActionArea><a href={code}>Code</a></CardActionArea>
            </Card>
        </div>
    )
}

export default ProjectCard;
