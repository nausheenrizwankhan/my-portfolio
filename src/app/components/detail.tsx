import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Projects from "./projects"
import Education from "./education" // Import Education component
import Experience from "./experience" // Import Experience component
import Skills from "./skills" // Import Skills component

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-4">
        {/*Tabs Trigger Button*/}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      {/* Tabs Content Here */}
      {/*Education */}
      <TabsContent value="education">
        <Education />
      </TabsContent>
      {/*Experience */}
      <TabsContent value="experience">
        <Experience />
      </TabsContent>
      {/*Skills */}
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      {/*Projects */}
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
    </Tabs>
  )
}


