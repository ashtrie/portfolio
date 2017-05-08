import React, { Component } from 'react';
import styles from './EdAndExp.css';
import fonts from './main.css';

export default class EdAndExp extends Component {
    render() {
        return (
            <section id={ styles.edAndExp }>
                <header>
                    <h1>education & experiance</h1>
                </header>

                <article>
                    <div className={ styles.column }>
                        <div className={ styles.row + ' ' + styles.sfu }></div>
                        <div className={ styles.row + ' ' + styles.itmo }></div>
                    </div>
                    <div className={ styles.column }>
                        <div className={ styles.row + ' ' + styles.vh }></div>
                        <div className={ styles.row + ' ' + styles.fora }></div>
                    </div>
                </article>

            </section>
        );
    }
}
