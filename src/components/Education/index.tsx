import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { education, trainings } from '../../data/resume';
import {
  EducationSection,
  SectionSubtitle,
  SectionTitle,
  EducationGrid,
  EducationCard,
  CardIcon,
  DegreeBadge,
  FieldName,
  InstitutionName,
  ConclusionDate,
  TrainingSection,
  TrainingTitle,
  TrainingList,
  TrainingItem,
  TrainingIcon,
} from './styles';

export function Education() {
  return (
    <EducationSection id="education">
      <SectionSubtitle>Minha formação</SectionSubtitle>
      <SectionTitle>Formação Acadêmica</SectionTitle>

      <EducationGrid>
        {education.map((edu, index) => (
          <EducationCard key={index}>
            <CardIcon>
              <FaGraduationCap />
            </CardIcon>
            <DegreeBadge>{edu.degree}</DegreeBadge>
            <FieldName>{edu.field}</FieldName>
            <InstitutionName>{edu.institution}</InstitutionName>
            <ConclusionDate>Conclusão: {edu.conclusion}</ConclusionDate>
          </EducationCard>
        ))}
      </EducationGrid>

      <TrainingSection>
        <TrainingTitle>
          <FaCertificate /> Treinamentos & Certificações
        </TrainingTitle>
        <TrainingList>
          {trainings.map((training, index) => (
            <TrainingItem key={index}>
              <TrainingIcon>▹</TrainingIcon>
              {training}
            </TrainingItem>
          ))}
        </TrainingList>
      </TrainingSection>
    </EducationSection>
  );
}
