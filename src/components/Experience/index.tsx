import { useState } from 'react';
import { Button } from 'react-aria-components';
import { FaBriefcase, FaChevronDown } from 'react-icons/fa';
import { experiences } from '../../data/resume';
import {
  ExperienceSection,
  SectionSubtitle,
  SectionTitle,
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineLine,
  TimelineContent,
  CompanyName,
  RoleText,
  PeriodText,
  ActivitiesList,
  ActivityItem,
  ExpandButton,
  TimelineIcon,
} from './styles';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ExperienceSection id="experience">
      <SectionSubtitle>Minha trajetória</SectionSubtitle>
      <SectionTitle>Experiência Profissional</SectionTitle>

      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={`${exp.company}-${index}`}>
            <TimelineDot $isActive={expandedIndex === index}>
              <TimelineIcon><FaBriefcase /></TimelineIcon>
            </TimelineDot>
            {index < experiences.length - 1 && <TimelineLine />}

            <TimelineContent $isExpanded={expandedIndex === index}>
              <CompanyName>{exp.company}</CompanyName>
              <RoleText>{exp.role}</RoleText>
              <PeriodText>{exp.period}</PeriodText>

              <ExpandButton
                as={Button}
                onPress={() => toggleExpand(index)}
                aria-label={expandedIndex === index ? 'Recolher atividades' : 'Expandir atividades'}
              >
                <FaChevronDown
                  style={{
                    transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                  }}
                />
                {expandedIndex === index ? 'Recolher' : 'Ver atividades'}
              </ExpandButton>

              {expandedIndex === index && (
                <ActivitiesList>
                  {exp.activities.map((activity, actIndex) => (
                    <ActivityItem key={actIndex}>{activity}</ActivityItem>
                  ))}
                </ActivitiesList>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
}
