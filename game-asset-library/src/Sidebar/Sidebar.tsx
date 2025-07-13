import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../assets'
import './Sidebar.css'

const Sidebar = () => {
    // Build default open state
    const defaultOpenSections = Object.keys(projects).reduce((acc, key) => {
        acc[key] = true
        return acc
    }, {} as { [key: string]: boolean })

    const [openSections, setOpenSections] = useState(defaultOpenSections)

    const toggleSection = (project: string) => {
        setOpenSections(prev => ({ ...prev, [project]: !prev[project] }))
    }

    return (
        <aside className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="sidebar">
                    {/* Home */}
                    <h3>
                        <Link to="/">Home</Link>
                    </h3>

                    {/* Projects */}
                    {Object.entries(projects).map(([project, { models }]) => (
                        <div key={project} className="section">
                            {/* Chevron toggle button */}
                            <button onClick={() => toggleSection(project)} className="section-chevron">
                                <span
                                    style={{
                                        display: 'inline-block',
                                        transition: 'transform 0.3s ease',
                                        transform: openSections[project] ? 'rotate(90deg)' : 'rotate(0deg)'
                                    }}
                                >
                                    ▶
                                </span>
                            </button>

                            {/* Link to project page */}
                            <Link className="section-title" to={`/project/${project}`}>
                                {project}
                            </Link>

                            {/* Model links */}
                            {openSections[project] && (
                                <ul className="link-list">
                                    {models.map(({ title, id }) => {
                                        const modelId = id.split('/').pop()
                                        return (
                                            <li key={id}>
                                                <Link to={`/models/${project}/${modelId}`}>{title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
