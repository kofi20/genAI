import classNames from 'classnames';
import styles from './hero-section.module.scss';
import { useState } from 'react';
import { Form } from '../form/form';

export interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    // State to track whether the form should be shown
    const [showForm, setShowForm] = useState(false);

    // Function to toggle the form visibility
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // Function to close the form
    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <h3 className={styles.h3}>My Stacks</h3>
            <button className={styles.button} onClick={toggleForm}>
                New Stack
            </button>
            {showForm && <Form onClose={handleCloseForm} />}
        </div>
    );
};
