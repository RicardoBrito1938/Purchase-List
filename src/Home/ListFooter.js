import React from 'react';

export default function ListFooter({total}) {
    return (
        <div className="list-footer">
            <p>01/01/2020</p>
            <p>R$ {total}</p>
        </div>
    );
}
