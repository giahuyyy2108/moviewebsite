import React from "react";
import {Container, Inner,Item, Pane,Title,SubTitle,Image } from "./styles/jumbostron";

export default function Jumbotron({children,direction = 'row', ...restPrps}){
    return(
        <Item direction = {direction}>
            <Inner>
                {children}
            </Inner>            
        </Item> 
    )
}

Jumbotron.Container = function jumbostronContainer({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Pane = function jumbostronPane({ children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.Title = function jumbostronTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function jumbostronSubTitle({ children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Image = function jumbostronImage({ ...restProps}){
    return <Image {...restProps} />;
}