import React from 'react';

const Input = ({ name, label, type, value, onChange, error}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
            />
            
            {/* so the below statement works in such a way that, if error is trusy then the error will be displayed otherwise the below statement will be ignored */}
            { error && <div className="alert alert-danger">{error}</div> }
        </div>
     );
}
 
export default Input;