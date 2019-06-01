import * as  React from "react";

export interface PostProps { title: string, description: string; };

export const Post = (props: PostProps) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}