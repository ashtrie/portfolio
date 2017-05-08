import React, { Component } from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';

import Cinemagraph from './Cinemagraph';
import ParallaxSection from './ParallaxSection';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import EdAndExp from './EdAndExp';
import WhyMe from './WhyMe';
import Contact from './Contact';

export default class Scroll extends Component {
    render() {
        return (
            <ScrollContainer>
                <ScrollSection pageId={ 0 }>
                    <Cinemagraph/>
                </ScrollSection>

                <ScrollSection pageId={ 1 }>
                    <About/>
                </ScrollSection>

                <ScrollSection pageId={ 2 }>
                    <EdAndExp/>
                </ScrollSection>

                <ScrollSection pageId={ 3 }>
                    <Skills/>
                </ScrollSection>

                <ScrollSection pageId={ 4 }>
                    <Projects/>
                </ScrollSection>

                <ScrollSection pageId={ 5 }>
                    <WhyMe/>
                </ScrollSection>

                <ScrollSection pageId={ 6 }>
                    <Contact/>
                </ScrollSection>
            </ScrollContainer>
        );
    }

}
