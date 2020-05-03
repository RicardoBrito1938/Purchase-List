import React from 'react';
import CustomCard from '../common/CustomCard';

const NewList = () => (
    <CustomCard link="/list" containerClass="new-list-container">
        <div>
            <p className="title">Adicionar novas listas</p>
        </div>
    </CustomCard>
);

export default NewList;
