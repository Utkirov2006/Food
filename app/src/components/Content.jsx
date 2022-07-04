import React from 'react';

const Content = (props) => {
    return (

        <div className="content">
            <div className="img">
                <img src={props.rasm4} />
                <img src={props.rasm5} />
                <img src={props.rasm1} />
                <img src={props.rasm2} />
                <img src={props.rasm3} />

            </div>

        </div>
    );
};

export default Content;