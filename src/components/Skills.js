import React, { Component } from 'react';
import styles from './Skills.css';
import fonts from './main.css';

export default class Skills extends Component {
    state = {
        skills: [
            {
                groupName: 'Programming Languages',
                subSkills: [
                    {
                        name: 'JavaScript',
                        points: 96,
                    },
                    {
                        name: 'Python',
                        points: 32,
                    },
                    {
                        name: 'C++',
                        points: 65,
                    },
                ],
            },
            {
                groupName: 'Frameworks & Libraries',
                subSkills: [
                    {
                        name: 'React',
                        points: 98,
                    },
                    {
                        name: 'Redux',
                        points: 75,
                    },
                    {
                        name: 'Node',
                        points: 68,
                    },
                    {
                        name: 'Express',
                        points: 56,
                    },
                    {
                        name: 'jQuery',
                        points: 61,
                    },
                ],
            },
            {
                groupName: 'Style & Markup',
                subSkills: [
                    {
                        name: 'CSS3',
                        points: 81,
                    },
                    {
                        name: 'Sass',
                        points: 74,
                    },
                    {
                        name: 'HTML5',
                        points: 92,
                    },
                ],
            },
            {
                groupName: 'Operational Systems',
                subSkills: [
                    {
                        name: 'Windows',
                        points: 63,
                    },
                    {
                        name: 'Linux',
                        points: 79,
                    },
                ],
            },
            {
                groupName: 'Paradigms',
                subSkills: [
                    {
                        name: 'OOP',
                        points: 77,
                    },
                    {
                        name: 'Functional Programming',
                        points: 74,
                    },
                ],
            },
            {
                groupName: 'General',
                subSkills: [
                    {
                        name: 'Git',
                        points: 82,
                    },
                    {
                        name: 'Design Patterns',
                        points: 57,
                    },
                    {
                        name: 'UI/UX',
                        points: 47,
                    },
                ],
            },
        ],
        activeSkill: 5,
        activeSubSkill: 1,
    };

    subSkillEnter(index) {
        this.setState({ activeSubSkill: index });
        console.log('onMouseEnter subSkillHighlight', index);
    }

    subSkillLeave() {
        this.setState({ activeSubSkill: 0 });
        console.log('onMouseLeave subSkillHighlight');
    }

    skillEnter(index) {
        this.setState({ activeSkill: index });
        console.log('onMouseEnter skillHighlight', index);
    }

    skillLeave() {
        this.setState({ activeSkill: 0 });
        console.log('onMouseLeave skillHighlight');
    }

    fillStyle() {
        return {
            width: `${this.state.skills[this.state.activeSkill].subSkills[this.state.activeSubSkill].points}% !important`
        };
    }

    render() {
        let skills = this.state.skills.map((item, index) => {
            let subSkills = item.subSkills.map((item, jindex) => {
                return <span key={ jindex }
                             onMouseEnter={ () => this.subSkillEnter(jindex) }
                             onMouseLeave={ ::this.subSkillLeave }
                             className={ this.state.activeSubSkill === jindex && this.state.activeSkill === index ? styles.subSkillsHover : '' }
                       >
                           { item.name }
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
        let currentSkillPoints = this.state.skills[this.state.activeSkill].subSkills[this.state.activeSubSkill].points;
        let fillPerc = {
            width: currentSkillPoints + '%',
        };

        console.log('fillPerc', fillPerc);
        console.log('currentSkillPoints', currentSkillPoints);
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
                        <div className={ styles.fill } style={ fillPerc }>
                        </div>
                        <span className={ styles.percent }>{ currentSkillPoints }</span>
                    </div>

                </div>

            </section>
        );
    }
}
