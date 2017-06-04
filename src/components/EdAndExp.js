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
                        <div className={ styles.row }>
                            <div className={ styles.sfu }></div>
                            <div className={ styles.textarea }>
                                <p>Siberian Federal University (SibFU)</p>
                                <p>Institute of Space and Informational Technologies</p>
                                <p>Bachelor in Information Security</p>
                            </div>
                        </div>
                        <div className={ styles.row }>
                            <div className={ styles.itmo }></div>
                            <div className={ styles.textarea }>
                                <p>Saint Petersburg National Research University of Information Technologies, Mechanics and Optics (ITMO)</p>
                                <p>Faculty of Management Methods and Techniques</p>
                                <p>Master in Web Technologies</p>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.column }>
                        <div className={ styles.row }>
                            <div className={ styles.vh }></div>
                            <div className={ styles.textarea }>
                                <p>Vigorous Hive</p>
                                <p>Junior Web Developer</p>
                            </div>
                        </div>
                        <div className={ styles.row }>
                            <div className={ styles.fora }></div>
                            <div className={ styles.textarea }>
                                <p>Fora Soft</p>
                                <p>Full-stack JavaScript Developer</p>
                            </div>
                        </div>
                    </div>
                </article>

            </section>
        );
    }
}
