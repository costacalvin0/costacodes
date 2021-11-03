import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import React from 'react'
import "./index.css";

export type ProjectCardProps = {
    title: string,
    description: string,
    image: string,
    demo?: string,
    github?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    demo,
    github,
}) => {
    return (
        <div>
            <Card className='card'>
                <CardMedia ><img src={image} alt="pathgo app" className='Image' /></CardMedia>
                <h3>{title}</h3>
                <CardContent>{description}</CardContent>
                <CardActionArea><a href={demo} >Demo</a></CardActionArea>
                <CardActionArea><a href={github}>Github</a></CardActionArea>
            </Card>
        </div>
    )
}

export default ProjectCard;
