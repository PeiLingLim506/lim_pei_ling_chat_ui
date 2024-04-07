import '../css/CustomButton.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomButton = (props) => {
    if (props.icon) {
        if (props.isRoundBtn) {
            return (
                <Button className='btn round-btn btn btn-primary d-flex align-items-center justify-content-center' style={{ backgroundColor: props.bgcolor, color: props.color, borderColor: props.bordercolor, width: props.w, height: props.h, border: props.border }} type={props.type ? props.type : ''}>
                    <FontAwesomeIcon icon={props.icon} size={props.size} />
                </Button>
            );

        } else {
            return (
                <Button className='btn icon-btn d-flex align-items-center justify-content-center' style={{ color: props.color, width: props.w }}>
                    <FontAwesomeIcon icon={props.icon} size={props.size} />
                </Button>
            );
        }
        
    } else {
        return (
            <Button className='text-btn border-0 me-2' style={{ backgroundColor: props.bgcolor, color: props.color }}>
                {props.text}
            </Button>
        );
    }
};

export default CustomButton;