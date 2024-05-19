import { ResumeType } from "./Types";
import Contacts from "./rightcomponents/contact/Contacts";
import Expertise from "./rightcomponents/expertise/Expertise";

import PersonalCredentials from "./rightcomponents/personalcredentials/PersonalCredentials";
import Qualifications from "./rightcomponents/qualification/Qualifications";
import Resume from "./rightcomponents/resume/Resume";

const skills: string[] = [
  "Bootstrap, Angular",
  "React, Vue, Laravel",
  "C++, C, C#",
  "Java",
  "Phython",
];
const interests: string[] = [
  "Make UI/Ux Design",
  "Create Mobile App",
  "Custom Website",
  "Game Engine",
  "Create Own AI",
];
const expertiseTitles: [string, string] = ["Knowlegde", "Interests"];
const resumeTitles: [string, string] = ["Education", "Experience"];

let education: ResumeType[] = [
  { time: "2014 - 2016", what: "Master Degree", place: "Oxford University" },
  { time: "2010 - 2014", what: "Bachelor Degree", place: "ETH Zuerich" },
  { time: "2008 - 2010", what: "Associate Degree", place: "Simone College" },
];

let experience: ResumeType[] = [
  { time: "2018 - Now", what: "Exclusive Author", place: "Envato Market" },
  { time: "2016- 2018", what: "Full Stack Developer", place: "Abraxas" },
  { time: "2012 - 2016", what: "Full Stack Developer", place: "Google" },
];

const resumes: ResumeType[][] = [education, experience];

function RightContentPart() {
  return (
    <div className="RightContentPart">
      <PersonalCredentials />
      <Qualifications />
      <Expertise
        expertiseTitles={expertiseTitles}
        skills={skills}
        interests={interests}
      />
      <Resume resumeTitles={resumeTitles} resumes={resumes} />
      <Contacts />
    </div>
  );
}

export default RightContentPart;
