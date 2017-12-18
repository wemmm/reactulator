import React from 'react';

const ScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input className="screen" type="text" readOnly value={props.value}/>
    </div>
  )
}

ScreenRow.propTypes = {
  value: React.PropTypes.string.isRequired
}

export default ScreenRow;
