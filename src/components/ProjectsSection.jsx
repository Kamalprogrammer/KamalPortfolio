import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLinkIcon, GithubIcon } from "lucide-react"

// here i am storing all the details of projects 
const projects = [
    {
        id: 1,
        title: "Crypto Tracker Using JS",
        description: "A Crypto Currancy Tracker using JS and Fetch API and Tailwind CSS",
        image: "projects/CryptoTracker.png",
        tags: ["HTMl", "Tailwind", "Javascript"],
        demoUrl: "https://kamalprogrammer.github.io/CryptoPriceTracker-WebApp/",
        githubUrl: "https://github.com/Kamalprogrammer/CryptoPriceTracker-WebApp",

    },
    {
        id: 2,
        title: "AOEcoStore",
        description: "Implimeted JS Filter and Search Functionality using Sample Data from API",
        image: "projects/AoEcomStore.png",
        tags: ["HTMl", "Tailwind", "Javascript", "API", "Filter", "Sort"],
        demoUrl: "#",
        githubUrl: "https://github.com/Kamalprogrammer/AOEcomStore",

    },
    {
        id: 3,
        title: "InterPolationCalc",
        description: "Using DOM Manupulation Made a Stuning Calculator that help user to calculate Problems",
        image: "projects/InterPolationCalc.png",
        tags: ["HTMl", "Tailwind", "Javascript", "API", "Filter", "Sort"],
        demoUrl: "https://kamalprogrammer.github.io/linearinterpolationcalculator/",
        githubUrl: "https://github.com/Kamalprogrammer/linearinterpolationcalculator",

    },

]

export const ProjectsSection = () => {
    return (
        <section id="projects" className=" py-24 px-4 relative" >
            <div className="container mx-auto max-w-5xl">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >Features <span className="text-primary">Project</span></h2>
                <p className="mb-20">Every project reflects my dedication, learning, and effort — turning challenges into opportunities. These works showcase my growth, creativity, and real-world experience as a developer.</p>

                {/* displying all the projects  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary  text-secondary"
                                        >{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                 <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl}
                                            target="_blank"
                                            className=" text-foreground/80 hover:text-primary transition-colors duration-300"
                                        ><ExternalLinkIcon size={20} /></a>
                                        <a href={project.githubUrl}
                                            target="_blank"
                                             className=" text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <GithubIcon size={20} />
                                        </a>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    ))}

                </div>

                <div 
                className="text-center mt-12">
                    <a href="https://github.com/Kamalprogrammer"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    > Check My Github 
                    
                        <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}