// maling an skills object to store thwm 
import { cn } from "@/lib/utils"
import { useState } from "react";

const skills = [
    // Frontend Skills 

    { name: "HTML/CSS", level: "85", category: "frontend" },
    { name: "Javascript", level: "80", category: "frontend" },
    { name: "React", level: "70", category: "frontend" },
    { name: "Tailwind CSS", level: "75", category: "frontend" },
    { name: "GSAP", level: "75", category: "frontend" },
    { name: "ThreeJS", level: "60", category: "frontend" },

    // For BackEnd
    { name: "Node.Js", level: "0", category: "backend" },
    { name: "Express", level: "0", category: "backend" },
    { name: "MongoDB", level: "10", category: "backend" },
    { name: "MySQL", level: "50", category: "backend" },
    // tools

    { name: "Git/GitHub", level: "50", category: "tools" },
    { name: "Figma", level: "20", category: "tools" },
    { name: "VScode", level: "70", category: "tools" },
    { name: "Canva", level: "80", category: "tools" },
    { name: "Wordpress", level: "80", category: "tools" },
    { name: "Google Analytics", level: "75", category: "tools" },
    { name: "Google Console", level: "85", category: "tools" },
    { name: "Google Trands", level: "90", category: "tools" },

]
// for making filter button based on categories
const categories = ["all", "frontend", "backend", "tools"];


export const SkillsSection = () => {
    // state to manage filter buttons 
    const [activeCetegory, setActiveCategory] = useState("all");
    // by default all ko dikhao 

// flter to short skills base don catogery 
    const filteredSkills = skills.filter((skill)=>activeCetegory ==="all" || skill.category ===activeCetegory
);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My
                    <span className="text-primary">{" "}Skills</span></h2>
            </div>

            {/* adding button to filter  */}

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        // this is for making change in current cetogry 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCetegory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground "
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

{/* this will show filterd skills  */}
{/* {filteredSkills ismie sabhi sorted skills chali gaihei  */}

            {/* geetting all the skills  */}

            <div className="grid grid-cols-1 w-[80%] m-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div
                        key={key}
                        className="bg-card p-3 rounded-lg shadow-xs card-hover "
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg" >{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }}
                            />
                        </div >
                        <div className=" text-right mt-1">
                            <span className="text-sm text-muted-foreground ">{skill.level + "%"}</span></div>
                    </div>

                ))}
            </div>
        </section>
    )
}