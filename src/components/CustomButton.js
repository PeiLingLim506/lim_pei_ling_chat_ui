import '../css/CustomButton.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomButton = (props) => {
    if (props.icon) {
        return (
            <Button className='icon-btn' style={{ color: props.color }}>
                <FontAwesomeIcon icon={props.icon} size={props.size} />
            </Button>
        );
    } else {
        return (
            <Button className='text-btn border-0 me-2' style={{ backgroundColor: props.bgcolor, color: props.color }}>
                {props.text}
            </Button>
        );
    }
};

export default CustomButton;