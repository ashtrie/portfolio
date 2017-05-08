import React, { Component } from 'react';
import styles from './Projects.css';
import fonts from './main.css';
const classNames = require('classnames');

export default class Projects extends Component {
    render() {

        return (
            <section id={ styles.projects }>
                <header>
                    <h1>projects</h1>
                </header>

                <article>
                    <div className={ styles.preview + ' ' + styles.wpzorg }></div>
                    <div className={ styles.preview + ' ' + styles.logotype }></div>
                    <div className={ styles.preview + ' ' + styles.norco }></div>
                    <div className={ styles.preview + ' ' + styles.tictactoe }></div>
                    <div className={ styles.preview + ' ' + styles.oncalc }></div>
                </article>
            </section>
        );
    }
}
