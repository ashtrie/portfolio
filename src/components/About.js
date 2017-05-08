import React, { Component } from 'react';
import styles from './About.css';
import fonts from './main.css';

export default class About extends Component {
    render() {
        return (
            <section id={ styles.about }>
                <header>
                    <h1>about myself</h1>
                </header>

                <article>
                    Hi, fellas! My name is Alexander Shcherbakov (ashtrie), I am dedicated JavaScript/Frontend developer living in St.Petersburg. My passion is building reach single page applications with powerfull React/Redux stack. I am capable to perfectly fit in your company and participte in projects of any complexity level. Also my hobbies are snowboarding, bodybuilding, languages and tinwhistle. I appreciate any feedback!
                </article>
            </section>
        );
    }
}
