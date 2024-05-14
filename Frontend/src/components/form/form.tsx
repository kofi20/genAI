import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './form.module.scss';
// import { FaTimes } from 'react-icons/fa';

export interface FormProps {
    className?: string;
    onClose: () => void;
}

export const Form = ({ className, onClose }: FormProps) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    // Determine if both name and description fields have text
    const isFormValid = name.trim() !== '' && description.trim() !== '';

    return (
        <div className={styles.overlay}>
            <form className={styles.form}>
                <div className={styles.heading}>
                    <div className={classNames(styles.header, styles.formheader)}>
                        <h2 className={styles.h2}>Create New Stack</h2> {/* Title */}
                        <button
                            className={classNames(styles.closeButton, styles.close)}
                            onClick={onClose}
                        >
                            x {/* Close icon */}
                        </button>
                    </div>
                </div>
                <hr className={styles.divider} />
                <label className={styles.label}>Name</label>
                <br />
                <input
                    type="text"
                    className={styles.input}
                    value={name}
                    onChange={handleNameChange}
                />
                <br />
                <label className={styles.des}>Description</label>
                <br />
                <input
                    type="text"
                    className={styles.inpdes}
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <div className={styles.button}>
                    {/* Close button */}
                    <button className={styles.cancel} onClick={onClose}>
                        Cancel
                    </button>
                    {/* Save button is enabled only if both name and description fields have text */}
                    <button className={styles.save} disabled={!isFormValid}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};
