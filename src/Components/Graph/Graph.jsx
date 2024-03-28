import React from 'react';
import './Graph.css'
import { SkillBar } from "react-skillbars";
import { useRef } from 'react';
import { useInView } from 'framer-motion';


function Graph() {
    const SKILLS6 = [
        {
            type: "CSS/HTML",
            level: 100,
            color: { bar: "#F72585", title: { text: "#fff", background: "#118AB2" } }
        },
        {
            type: "SQL",
            level: 90,
            color: { bar: "#480CA8", title: { text: "#fff", background: "#118AB2" } }
        },
        {
            type: "Javascript",
            level: 85,
            color: { bar: "#B5179E", title: { text: "#fff", background: "#118AB2" } }
        },
        {
            type: "GIT",
            level: 80,
            color: { bar: "#3F37C9", title: { text: "#fff", background: "#118AB2" } }
        },
        {
            type: "React",
            level: 70,
            color: { bar: "#560BAD", title: { text: "#fff", background: "#118AB2" } }
        },
        {
            type: "Api REST",
            level: 60,
            color: { bar: "#3A0CA3", title: { text: "#fff", background: "#118AB2" } }
        },
        {
            type: "FireBase",
            level: 50,
            color: { bar: "#7209B7", title: { text: "#fff", background: "#118AB2" } }
        },

    ];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div id='Graph' className="full-container graph-container-full">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div className='container graph-container'>
                <h1
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                    }}
                > -Habilidades</h1>
                <div className='container'>
                    <SkillBar skills={SKILLS6} />
                </div>
            </div>

        </div>
    )
}

export default Graph;
