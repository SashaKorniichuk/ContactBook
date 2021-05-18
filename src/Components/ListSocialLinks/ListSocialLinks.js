import React, { Component } from "react";
import './ListSocialLinks.css'
import SocialLink from '../SocialLink'

export default class ListSocialLinks extends Component {
    render() {
      
        return ( 
            this.props.socialLinks.map((el => {
                let img = "fab fa-" + el.name;
                if(el.url!=="")
                {
                    return <SocialLink key={el.name} image={img} url={el.url} />
                }
                return null;
            }))
        )
    }
}

