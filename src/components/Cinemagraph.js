import React, { Component } from 'react';
import styles from './Cinemagraph.css';
import fonts from './main.css';

export default class Cinemagraph extends Component {
    render() {
        return (
            <section id={ styles.cinemagraph }>
                <video autoPlay loop preload poster className={ styles.gradient }>
                    <source src="../../pics/waterfall.mp4" type="video/mp4"/>
                </video>
                <div className={ styles.overlay }>
                    <div className={ styles.pattern }>
                        <div className={ styles.animated + ' ' + styles.fadeInDown + ' ' + styles.logo }>A</div>
                        <div className={ styles.animated + ' ' + styles.fadeInUp + ' ' + styles.ashtrie }>ashtrie</div>
                    </div>
                </div>

            </section>
        );
    }
}
