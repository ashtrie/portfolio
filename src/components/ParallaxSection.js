import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import styles from './ParallaxSection.css';

export default class ParallaxSection extends Component {
    
    render() {
        return (
            <Parallax bgImage="https://wallpaperscraft.com/image/fog_trees_mountains_pinnacle_113616_3840x2160.jpg" strength={ 600 }>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
                <h1> some content that is displayed above the bgImage </h1>
            </Parallax>
            // <div>
            //     <Parallax strength={300}>
            //         <Background>
            //             <img src="http://www.fillmurray.com/400/300"/>
            //             <div style={{
            //                 width: 800,
            //                 height: 300,
            //                 backgroundColor: '#450093'
            //             }}></div>
            //             <img src="http://www.fillmurray.com/500/300"/>
            //         </Background>
            //         <h1>something else</h1>
            //     </Parallax>
            // </div>
        );
    }
}
