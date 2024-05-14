import classNames from 'classnames';
import { useState } from 'react';
import styles from './home-page.module.scss';
import { Form } from '../form/form';

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
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
            <div className={styles.container}>
                <h4 className={styles.h4}>Create New Stack</h4>
                <p className={styles.paragh}>
                    Start building your generative AI apps with our essential tools and frameworks
                </p>
                <button className={styles.button} onClick={toggleForm}>
                    New Stack
                </button>
            </div>
            {showForm && <Form onClose={handleCloseForm} />}
        </div>
    );
};
