import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import AWSArchitectureShowcase from './_components/AWSArchitectureShowcase';
import CloudJourney from './_components/CloudJourney';
import OpenSource from './_components/OpenSource';
import Certifications from './_components/Certifications';
import Resume from './_components/Resume';
import EngineeringNotes from './_components/EngineeringNotes';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <ProjectList />
            <AWSArchitectureShowcase />
            <CloudJourney />
            <OpenSource />
            <Certifications />
            <Resume />
            <EngineeringNotes />
        </div>
    );
}
