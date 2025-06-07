import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaVideo, FaGraduationCap, FaUsers, FaTrophy, FaJava, FaDatabase, FaGitAlt, FaLaptopCode, FaPlus, FaCertificate, FaCalendarAlt, FaTrash } from 'react-icons/fa';
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
    SiDocker,
    SiPandas,
    SiFirebase,
    SiOpencv
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

const Spacer = styled.div`
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

const HackathonSection = styled.div`
  margin-top: 5rem;
`;

const HackathonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const HackathonCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2a2e35;
  cursor: pointer;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const HackathonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderImage = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e0e0e0;
  font-size: 3rem;
  background-color: #2a2e35;
  cursor: pointer;
  
  span {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  
  input {
    display: none;
  }
`;

const HackathonTitle = styled(CardTitle)`
  margin-top: 1rem;
`;

const HackathonDescription = styled(CardDescription)`
  flex-grow: 1;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #2a2e35;
  background-color: #1A1D21;
  color: #E0E0E0;
  font-size: 1rem;
  resize: vertical;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: #FF6B48;
  }
`;

const AddHackathonButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #1A1D21;
  color: #E5B684;
  border: 2px dashed #E5B684;
  border-radius: 12px;
  padding: 2rem;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #232730;
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 1.5rem;
  }
`;

const HackathonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CertificateSection = styled.div`
  margin-top: 5rem;
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const CertificateCard = styled(Card)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CertificateImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2a2e35;
  cursor: pointer;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.9;
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #1A1D21;
`;

const CertificatePlaceholder = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e0e0e0;
  font-size: 3rem;
  background-color: #2a2e35;
  cursor: pointer;
  
  span {
    font-size: 1rem;
    margin-top: 0.5rem;
    text-align: center;
    padding: 0 1rem;
  }
  
  input {
    display: none;
  }
`;

const CertificateDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CertificateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CertificateDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FF6B48;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [hackathons, setHackathons] = useState([
        {
            id: 1,
            title: "HackISU 2023",
            description: "Built a machine learning application that predicts energy consumption patterns.",
            image: null
        },
        {
            id: 2,
            title: "MLH Hackathon",
            description: "Created a web app for connecting local volunteers with community service opportunities.",
            image: null
        },
        {
            id: 3,
            title: "AWS Hackday",
            description: "Developed a cloud-based solution for real-time data processing using AWS services.",
            image: null
        }
    ]);

    const [certificates, setCertificates] = useState([
        {
            id: 1,
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "May 2023",
            image: null
        },
        {
            id: 2,
            name: "Machine Learning Specialization",
            issuer: "Stanford Online & Coursera",
            date: "January 2023",
            image: null
        }
    ]);
    
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
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'OpenCV', icon: <SiOpencv /> },
            { name: 'R', icon: <SiR /> }
        ],
        databases: [
            { name: 'SQL', icon: <FaDatabase /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Firebase', icon: <SiFirebase /> }
        ],
        devOps: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'Docker', icon: <SiDocker /> }
        ]
    };

    const learningItems = [
        {
            title: "Deep Learning",
            description: "Exploring neural network architectures, backpropagation, convolutional networks, recurrent networks, and generative models for solving complex AI problems.",
            source: "Source: Ian Goodfellow and Yoshua Bengio and Aaron Courville",
            icon: <FaBook />
        },
        {
            title: "Data Structures and Algorithms",
            description: "Mastering advanced data structures and algorithms for optimal problem-solving approaches and efficient code implementation.",
            source: "Source: Introduction to Algorithms by Thomas H. Cormen",
            icon: <FaBook />
        },
        {
            title: "Applied Data Modelling and Predictive Analysis",
            description: "Key concepts of predictive analysis, machine learning algorithms, data modeling techniques, and model evaluation",
            source: "Source: Iowa State University",
            icon: <FaGraduationCap />
        },
        {
            title: "Advanced Java Programming",
            description: "Exploring advanced Java topics including concurrency, design patterns, JVM internals, and enterprise application development.",
            source: "Source: Effective Java by Joshua Bloch",
            icon: <FaBook />
        },
        {
            title: "Principles of Artificial Intelligence",
            description: "Reasoning, decision making, and designing autonomous intelligent agents through programming projects.",
            source: "Source: Iowa State University",
            icon: <FaGraduationCap />
        }
    ];

    const handleHackathonImageUpload = useCallback((id, event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setHackathons(prev => prev.map(hackathon => 
                    hackathon.id === id 
                        ? { ...hackathon, image: reader.result }
                        : hackathon
                ));
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const handleCertificateImageUpload = useCallback((id, event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCertificates(prev => prev.map(certificate => 
                    certificate.id === id 
                        ? { ...certificate, image: reader.result }
                        : certificate
                ));
            };
            reader.readAsDataURL(file);
        }
    }, []);

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

                    <Spacer />
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
                    
                    <HackathonSection>
                        <HackathonHeader>
                            <SectionTitle>Hackathons</SectionTitle>
                        </HackathonHeader>
                        <HackathonGrid>
                            {hackathons.map((hackathon) => (
                                <HackathonCard key={hackathon.id}>
                                    <ImageContainer>
                                        {hackathon.image ? (
                                            <HackathonImage src={hackathon.image} alt={hackathon.title} />
                                        ) : (
                                            <PlaceholderImage>
                                                <FaLaptopCode />
                                                <span>Click to add image</span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleHackathonImageUpload(hackathon.id, e)}
                                                />
                                            </PlaceholderImage>
                                        )}
                                    </ImageContainer>
                                    
                                    <HackathonTitle>
                                        <FaLaptopCode />
                                        {hackathon.title}
                                    </HackathonTitle>
                                    
                                    <CardDescription>{hackathon.description}</CardDescription>
                                </HackathonCard>
                            ))}
                        </HackathonGrid>
                    </HackathonSection>
                    
                    <CertificateSection>
                        <CertificateHeader>
                            <SectionTitle>Certificates & Credentials</SectionTitle>
                        </CertificateHeader>
                        <CertificateGrid>
                            {certificates.map((certificate) => (
                                <CertificateCard key={certificate.id}>
                                    <CertificateImageContainer>
                                        {certificate.image ? (
                                            <CertificateImage src={certificate.image} alt={certificate.name} />
                                        ) : (
                                            <CertificatePlaceholder>
                                                <FaCertificate />
                                                <span>Click to add certificate image</span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleCertificateImageUpload(certificate.id, e)}
                                                />
                                            </CertificatePlaceholder>
                                        )}
                                    </CertificateImageContainer>
                                    
                                    <CertificateDetails>
                                        <CardTitle>
                                            <FaCertificate />
                                            {certificate.name}
                                        </CardTitle>
                                        
                                        <CardDescription>{certificate.issuer}</CardDescription>
                                        
                                        <CertificateDate>
                                            <FaCalendarAlt />
                                            <span>{certificate.date}</span>
                                        </CertificateDate>
                                    </CertificateDetails>
                                </CertificateCard>
                            ))}
                        </CertificateGrid>
                    </CertificateSection>
                </motion.div>
            </Container>
        </SkillsSection>
    );
}

export default Skills; 