import React, { Component } from 'react';
import styles from './Contact.css';
import fonts from './main.css';
import FontAwesome from 'react-fontawesome';

export default class Contact extends Component {
    render() {
        return (
            <section id={ styles.contact }>
                <header>
                    <h1>contact me</h1>
                </header>

                <form className={ styles.form }>
                    <input className={ styles.text } type="text" placeholder="Name"/>
                    <input className={ styles.text } type="text" placeholder="Email"/>
                    <div>
                        <textarea className={ styles.text + ' ' + styles.message } type="text" placeholder="Your message..."/>
                    </div>
                    <a href="https://twitter.com/Dave_Conner" className={ styles.btn + ' ' + styles['btn-1'] }>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        SEND
                    </a>
                </form>



                <footer>
                    <h2>follow me</h2>
                    <FontAwesome name="facebook"
                                 size="2x"
                                 style={ { color: '#fff'} }
                    />
                    <FontAwesome name="twitter"
                                 size="2x"
                                 style={ { color: '#fff'} }
                    />
                    <FontAwesome name="vk"
                                 size="2x"
                                 style={ { color: '#fff'} }
                    />
                    <FontAwesome name="linkedin"
                                 size="2x"
                                 style={ { color: '#fff'} }
                    />
                    <FontAwesome name="github"
                                 size="2x"
                                 style={ { color: '#fff'} }
                    />
                </footer>
            </section>
        );
    }
}
