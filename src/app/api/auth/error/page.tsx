import React from 'react';

const Error = (error: any) => {
    return (
        <div>
            {JSON.stringify(error)}
        </div>
    );
};

export default Error;