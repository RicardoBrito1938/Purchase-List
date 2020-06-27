import React from 'react';

export default function ListFooter({total, date}) {
    return (
        <div className="list-footer">
            <p>{date}</p>
            <p>R$ {total}</p>
        </div>
    );
}
