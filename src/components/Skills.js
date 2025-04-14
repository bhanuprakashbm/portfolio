import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaVideo, FaGraduationCap, FaUsers, FaTrophy, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import {
    SiJavascript,
    SiPython,
    SiTypescript,
    SiC,
    SiCplusplus,
    SiReact,
    SiNodedotjs,
    SiBootstrap,
    SiSpring,
    SiRedux,
    SiPuppeteer,
    SiTensorflow,
    SiScikitlearn,
    SiNumpy,
    SiR,
    SiMongodb,
    SiDocker
} from 'react-icons/si';

const SkillsSection = styled.section`
  background-color: #0A0C0F;
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: #FF6B48;
  margin-bottom: 3rem;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

const Card = styled(motion.div)`
  background: #1A1D21;
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  color: #E5B684;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CardDescription = styled.p`
  color: #E0E0E0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Source = styled.p`
  color: #E5B684;
  font-size: 0.9rem;
  margin-top: auto;
`;

const LeadershipSection = styled.div`
  margin-top: 5rem;
`;

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ListTitle = styled.h3`
  font-size: 2.5rem;
  color: #E5B684;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  color: #E5B684;
  margin-bottom: 1.5rem;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1.5rem;
  align-items: start;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #FF6B48;
`;

const TechName = styled.span`
  color: #E0E0E0;
  font-size: 0.9rem;
`;

function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillCategories = {
        programmingLanguages: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'C', icon: <SiC /> },
            { name: 'C++', icon: <SiCplusplus /> }
        ],
        webTechnologies: [
            { name: 'React', icon: <SiReact /> },
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Bootstrap', icon: <SiBootstrap /> },
            { name: 'Spring', icon: <SiSpring /> },
            { name: 'Redux', icon: <SiRedux /> },
            { name: 'Puppeteer', icon: <SiPuppeteer /> }
        ],
        aiAndMl: [
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'R', icon: <SiR /> }
        ],
        databases: [
            { name: 'SQL', icon: <FaDatabase /> },
            { name: 'MongoDB', icon: <SiMongodb /> }
        ],
        devOps: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'Docker', icon: <SiDocker /> }
        ]
    };

    const learningItems = [
        {
            title: "Deep Learning",
            description: "Learning about general and deep learning.",
            source: "Source: Ian Goodfellow and Yoshua Bengio and Aaron Courville",
            icon: <FaBook />
        },
        {
            title: "Cryptocurrency Algorithmic Trading",
            description: "Creating powerful Trading Strategies and fully automated AWS Trading Bots for Bitcoin & co.",
            source: "Source: Alexander Hagmann",
            icon: <FaVideo />
        },
        {
            title: "Applied Data Modelling and Predictive Analysis",
            description: "Key concepts of predictive analysis, machine learning algorithms, data modeling techniques, and model evaluation",
            source: "Source: Iowa State University",
            icon: <FaGraduationCap />
        },
        {
            title: "The C Programming Language",
            description: "Learning C and low-level programming.",
            source: "Source: Brian W. Kernighan, Dennis M. Ritchie",
            icon: <FaBook />
        },
        {
            title: "Principles of Artificial Intelligence",
            description: "Reasoning, decision making, and designing autonomous intelligent agents through programming projects.",
            source: "Source: Iowa State University",
            icon: <FaGraduationCap />
        }
    ];

    return (
        <SkillsSection id="skills">
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <SectionTitle>What have I learned?</SectionTitle>
                    <SkillsGrid>
                        <Card>
                            <CategoryTitle>Programming Languages</CategoryTitle>
                            <IconGrid>
                                {skillCategories.programmingLanguages.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                        <Card>
                            <CategoryTitle>Web Technologies</CategoryTitle>
                            <IconGrid>
                                {skillCategories.webTechnologies.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                        <Card>
                            <CategoryTitle>AI & Machine Learning</CategoryTitle>
                            <IconGrid>
                                {skillCategories.aiAndMl.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                        <Card>
                            <CategoryTitle>Databases</CategoryTitle>
                            <IconGrid>
                                {skillCategories.databases.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                        <Card>
                            <CategoryTitle>DevOps</CategoryTitle>
                            <IconGrid>
                                {skillCategories.devOps.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                    </SkillsGrid>

                    <SectionTitle>What am I learning?</SectionTitle>
                    <GridContainer>
                        {learningItems.map((item, index) => (
                            <Card
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <CardTitle>
                                    {item.icon}
                                    {item.title}
                                </CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                                <Source>{item.source}</Source>
                            </Card>
                        ))}
                    </GridContainer>

                    <LeadershipSection>
                        <SectionTitle>Leadership & Awards</SectionTitle>
                        <LeadershipGrid>
                            <div>
                                <ListTitle>Leadership Experience</ListTitle>
                                <ExperienceList>
                                    <Card>
                                        <CardTitle>
                                            <FaUsers />
                                            Director, International Students Council
                                        </CardTitle>
                                        <CardDescription>
                                            Led a team of 5 to collaboratively execute 6+ projects with the University, International Students Office, and local organizations, engaging 100+ students and community members.
                                        </CardDescription>
                                    </Card>
                                    <Card>
                                        <CardTitle>
                                            <FaUsers />
                                            Treasurer, Indian Students Association
                                        </CardTitle>
                                        <CardDescription>
                                            Led a team of 14 and managed a $12,000+ budget, overseeing events with 500+ attendees and ensuring effective financial operations.
                                        </CardDescription>
                                    </Card>
                                </ExperienceList>
                            </div>
                            <div>
                                <ListTitle>Awards & Achievements</ListTitle>
                                <AchievementsList>
                                    <Card>
                                        <CardTitle>
                                            <FaTrophy />
                                            Dean's Academic Excellence Scholarship
                                        </CardTitle>
                                        <CardDescription>
                                            Recognition for continued academic excellence.
                                        </CardDescription>
                                    </Card>
                                    <Card>
                                        <CardTitle>
                                            <FaTrophy />
                                            Mark Giese Computer Science Scholarship
                                        </CardTitle>
                                        <CardDescription>
                                            Demonstrated leadership, evidenced by participation in extracurricular or community organizations and activities
                                        </CardDescription>
                                    </Card>
                                    <Card>
                                        <CardTitle>
                                            <FaTrophy />
                                            Adventure Award
                                        </CardTitle>
                                        <CardDescription>
                                            Highest possible scholarship award given to US citizens completing high school abroad.
                                        </CardDescription>
                                    </Card>
                                </AchievementsList>
                            </div>
                        </LeadershipGrid>
                    </LeadershipSection>
                </motion.div>
            </Container>
        </SkillsSection>
    );
}

export default Skills; 