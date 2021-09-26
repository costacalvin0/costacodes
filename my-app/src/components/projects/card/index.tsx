import { Card, CardActionArea, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import React from 'react'

const ProjectCard = () => {
    return (
        <div>
            <Card>
                <CardMedia><img src="../../../images/pathgo/pathgo.PNG" alt="pathgo app" /></CardMedia>
                <CardHeader></CardHeader>
                <CardContent> A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.</CardContent>
                <CardActionArea>Learn More</CardActionArea>
            </Card>
        </div>
    )
}

export default ProjectCard;
