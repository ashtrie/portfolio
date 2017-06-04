import React, { Component } from 'react';
import styles from './Contact.css';
import fonts from './main.css';
import FontAwesome from 'react-fontawesome';

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    };

    changeName(event) {
        this.setState({ name: event.target.value });
    }

    changeEmail(event) {
        this.setState({ email: event.target.value });
    }

    changeMessage(event) {
        this.setState({ message: event.target.value });
    }

    sendEmail() {
        this.setState({
            name: '',
            email: '',
            message: 'Your message is sent :)',
        });

        setTimeout(() => {
            this.setState((state, props) => {
                return {
                    name: '',
                    email: '',
                    message: '',
                }
            });
        }, 2000);

    }

    render() {
        return (
            <section id={ styles.contact }>
                <header>
                    <h1>contact me</h1>
                </header>

                <form className={ styles.form }>
                    <input type="text" placeholder="Name"
                           className={ styles.text }
                           onChange={ ::this.changeName }
                           value={ this.state.name }/>
                    <input type="text" placeholder="Email"
                           className={ styles.text }
                           onChange={ ::this.changeEmail }
                           value={ this.state.email }/>
                    <div>
                        <textarea type="text" placeholder="Your message..."
                                  className={ styles.text + ' ' + styles.message }
                                  onChange={ ::this.changeMessage }
                                  value={ this.state.message }/>
                    </div>
                    <div onClick={ ::this.sendEmail }
                         className={ styles.btn + ' ' + styles['btn-1'] }>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        SEND
                    </div>
                </form>


                <footer>
                    <h2>follow me</h2>
                    <FontAwesome name="facebook"
                                 size="2x"
                                 className={ styles.icon }
                    />
                    <FontAwesome name="twitter"
                                 size="2x"
                                 className={ styles.icon }
                    />
                    <FontAwesome name="vk"
                                 size="2x"
                                 className={ styles.icon }
                    />
                    <FontAwesome name="linkedin"
                                 size="2x"
                                 className={ styles.icon }
                    />
                    <FontAwesome name="github"
                                 size="2x"
                                 className={ styles.icon }
                    />
                </footer>
            </section>
        );
    }
}
