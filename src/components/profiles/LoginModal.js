import React from 'react';

const LoginModal = ({ onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Session Expired</h2>
                <p>Your session has expired. Please log in again to continue.</p>
                <div className="modal-actions">
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onConfirm}>Log In</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
