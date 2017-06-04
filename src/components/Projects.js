import React, { Component } from 'react';
import styles from './Projects.css';
import fonts from './main.css';
const classNames = require('classnames');

export default class Projects extends Component {
    render() {

        return (
            <section id={styles.projects}>
                <header>
                    <h1>projects</h1>
                </header>

                <article>
                    <a href="https://wpzorg.nl" className={ styles.preview + ' ' + styles.wpzorg }>
                        <div className={ styles.descriptionLayer }>
                            <p className={ styles.description }>WPZorg - Build business with WordPress</p>
                        </div>
                    </a>

                    <a href="https://logotypelanding.herokuapp.com/" className={ styles.preview + ' ' + styles.logotype }>
                        <div className={ styles.descriptionLayer }>
                            <p className={ styles.description }>Logotype - Logotype company landing</p>
                        </div>
                    </a>

                    <a href="https://norco.herokuapp.com/" className={ styles.preview + ' ' + styles.norco }>
                        <div className={ styles.descriptionLayer }>
                            <p className={ styles.description }>Norco - Buy supreme downhill bikes</p>
                        </div>
                    </a>

                    <a href="https://xo-tictactoe.herokuapp.com/" className={ styles.preview + ' ' + styles.tictactoe }>
                        <div className={ styles.descriptionLayer }>
                            <p className={ styles.description }>TicTacToe - Play tic-tac-toe with your friends online</p>
                        </div>
                    </a>

                    <a href="https://oncalc.herokuapp.com/" className={ styles.preview + ' ' + styles.oncalc }>
                        <div className={ styles.descriptionLayer }>
                            <p className={ styles.description }>Oncalc - Easy online computations</p>
                        </div>
                    </a>
                </article>
            </section>
        );
    }
}
