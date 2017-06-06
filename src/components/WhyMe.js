import React, { Component } from 'react';
import styles from './WhyMe.css';
import fonts from './main.css';

export default class WhyMe extends Component {
    render() {
        return (
            <section id={ styles.whyMe }>
                <header>
                    <h1>why me</h1>
                </header>

                <article>
                    {/* <div></div> */}
                    {/* <div></div> */}
                    <iframe width="480" height="280" src="https://www.youtube.com/embed/Ke2bSQEm-JY"></iframe>
                    <iframe width="480" height="280" src="https://www.youtube.com/embed/96ufQrn8DHY"></iframe>
                </article>
            </section>
        );
    }
}
