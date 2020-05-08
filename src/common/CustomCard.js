import React from 'react';
import PropTypes from 'prop-types';
import {
    CardContent,
    CardActions,
    CardActionArea,
    Card,
    Divider,
    CardMedia,
} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './CustomCard.css';

const CustomCard = ({children, footer, containerClass, image, link}) => (
    <div className={containerClass}>
        <Link to={link}>
            <Card className="card">
                <CardActionArea className="card-action-area">
                    {image && (
                        <CardMedia
                            component="img"
                            className="card-img"
                            height="100"
                            image={image}
                            title="image"
                        />
                    )}
                    <CardContent className="card-content">
                        {children}
                    </CardContent>
                </CardActionArea>
                {footer && (
                    <>
                        <Divider />
                        <CardActions className="card-footer">
                            {footer}
                        </CardActions>
                    </>
                )}
            </Card>
        </Link>
    </div>
);

CustomCard.propTypes = {
    containerClass: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    footer: PropTypes.element,
    link: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export default CustomCard;
