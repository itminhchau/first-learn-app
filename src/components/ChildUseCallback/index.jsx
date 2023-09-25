import React, { memo } from 'react';
import PropTypes from 'prop-types';


ChildUseCallback.propTypes = {

};

function ChildUseCallback({ fcOnclick }) {
    console.log("re-render child");
    const handleOnClick = () => {
        fcOnclick()
    }
    return (
        <div>
            <button onClick={handleOnClick}>cremeant</button>
            hahahahaha
        </div>
    );
}

export default memo(ChildUseCallback);