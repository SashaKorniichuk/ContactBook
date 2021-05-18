
import Col from 'react-bootstrap/Col'
import './SocialLink.css'

const SocialLink=({image,url})=>
{
    return(
          <Col md={2}>
             <a href={url}>
              <i className={image} ></i>
              </a>
          </Col>
    )
}

export default SocialLink;