import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';

import './CustomCard.css';

const CustomCard = ({children, footer, containerClass}) => (
    <div className={containerClass}>
        <Card className="card">
            <CardActionArea className="card-action-area">
                <CardContent className="card-content">{children}</CardContent>
            </CardActionArea>
            {footer && (
                <>
                    <Divider />
                    <CardActions className="card-footer">{footer}</CardActions>
                </>
            )}
        </Card>
    </div>
);

CustomCard.propTypes = {
    containerClass: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    footer: PropTypes.element,
};

export default CustomCard;
