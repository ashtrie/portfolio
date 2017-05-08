import React, { Component } from 'react';
import styles from './Skills.css';
import fonts from './main.css';

export default class Skills extends Component {
    state = {
        skills: [
            {
                groupName: 'Programming Languages',
                subSkills: ['JavaScript', 'Python', 'C++'],
            },
            {
                groupName: 'Frameworks & Libraries',
                subSkills: ['React', 'Redux', 'Node', 'Express', 'jQuery'],
            },
            {
                groupName: 'Style & Markup',
                subSkills: ['CSS3', 'Sass', 'HTML5'],
            },
            {
                groupName: 'Operational Systems',
                subSkills: ['Windows', 'Linux'],
            },
            {
                groupName: 'Paradigms',
                subSkills: ['OOP', 'Functional Programming'],
            },
            {
                groupName: 'General',
                subSkills: ['Git', 'Design Patterns', 'UI/UX'],
            },
        ],
        activeSkill: 0,
        activeSubSkill: 0,
    };

    subSkillEnter(index) {
        this.setState({ activeSubSkill: index });
        console.log('onMouseEnter subSkillHighlight', index);
    }

    subSkillLeave() {
        this.setState({ activeSubSkill: null });
        console.log('onMouseLeave subSkillHighlight');
    }

    skillEnter(index) {
        this.setState({ activeSkill: index });
        console.log('onMouseEnter skillHighlight', index);
    }

    skillLeave() {
        this.setState({ activeSkill: null });
        console.log('onMouseLeave skillHighlight');
    }

    render() {
        let skills = this.state.skills.map((item, index) => {
            let subSkills = item.subSkills.map((item, jindex) => {
                return <span key={ jindex }
                             onMouseEnter={ () => this.subSkillEnter(jindex) }
                             onMouseLeave={ ::this.subSkillLeave }
                             className={ this.state.activeSubSkill === jindex && this.state.activeSkill === index ? styles.subSkillsHover : '' }
                       >
                           { item }
                       </span>;
            });

            if (true) {
                return (
                    <div key={ index }
                         className={ styles.skillsGroup }
                         onMouseEnter={ () => this.skillEnter(index) }
                         onMouseLeave={ ::this.skillLeave }
                    >
                        <h2 className={ this.state.activeSkill === index ? styles.skillsGroupHover : '' }>{ item.groupName }</h2>
                        { subSkills }
                    </div>
                );
            }
            else {

            }
        });

        return (
            <section id={ styles.skills }>
                <header>
                    <h1>skills</h1>
                </header>

                <article>
                    { skills }
                </article>

                <div className={ styles.meter }>
                    <div className={ styles.statusBar }>
                        <div className={ styles.fill }>
                            <span className={ styles.percent }>98</span>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}
