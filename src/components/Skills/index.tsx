import { ProgressBar } from 'react-aria-components';
import { hardSkills, softSkills, tools } from '../../data/resume';
import {
  SkillsSection,
  SectionSubtitle,
  SectionTitle,
  SkillsGrid,
  SkillsColumn,
  ColumnTitle,
  SkillItem,
  SkillHeader,
  SkillName,
  SkillPercentage,
  ProgressTrack,
  ProgressFill,
  SoftSkillsGrid,
  SoftSkillTag,
  ToolsGrid,
  ToolTag,
  ColumnIcon,
} from './styles';
import { FaCode, FaUsers, FaTools } from 'react-icons/fa';

export function Skills() {
  return (
    <SkillsSection id="skills">
      <SectionSubtitle>O que eu sei</SectionSubtitle>
      <SectionTitle>Habilidades</SectionTitle>

      <SkillsGrid>
        <SkillsColumn>
          <ColumnTitle>
            <ColumnIcon><FaCode /></ColumnIcon>
            Hard Skills
          </ColumnTitle>
          {hardSkills.map((skill) => (
            <SkillItem key={skill.name}>
              <SkillHeader>
                <SkillName>{skill.name}</SkillName>
                <SkillPercentage>{skill.level}%</SkillPercentage>
              </SkillHeader>
              <ProgressBar value={skill.level} maxValue={100} aria-label={skill.name}>
                {({ percentage }) => (
                  <ProgressTrack>
                    <ProgressFill style={{ width: `${percentage}%` }} />
                  </ProgressTrack>
                )}
              </ProgressBar>
            </SkillItem>
          ))}
        </SkillsColumn>

        <div>
          <SkillsColumn>
            <ColumnTitle>
              <ColumnIcon><FaUsers /></ColumnIcon>
              Soft Skills
            </ColumnTitle>
            <SoftSkillsGrid>
              {softSkills.map((skill) => (
                <SoftSkillTag key={skill}>{skill}</SoftSkillTag>
              ))}
            </SoftSkillsGrid>
          </SkillsColumn>

          <SkillsColumn style={{ marginTop: '2rem' }}>
            <ColumnTitle>
              <ColumnIcon><FaTools /></ColumnIcon>
              Ferramentas
            </ColumnTitle>
            <ToolsGrid>
              {tools.map((tool) => (
                <ToolTag key={tool}>{tool}</ToolTag>
              ))}
            </ToolsGrid>
          </SkillsColumn>
        </div>
      </SkillsGrid>
    </SkillsSection>
  );
}
