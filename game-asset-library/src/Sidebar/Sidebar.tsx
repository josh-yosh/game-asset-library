import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../assets'
import './Sidebar.css'

const Sidebar = () => {
    const defaultOpenSections = Object.keys(projects).reduce((acc, key) => {
        acc[key] = true
        return acc
    }, {} as { [key: string]: boolean })

    const [openSections, setOpenSections] = useState(defaultOpenSections)
    const [collapsed, setCollapsed] = useState(false)

    const toggleSection = (project: string) => {
        setOpenSections(prev => ({ ...prev, [project]: !prev[project] }))
    }

    const toggleSidebar = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <aside className={`sidebar-wrapper ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-content">

                <div className="sidebar">
                    {/* Home */}
                    <h3>
                        <Link
                            className='section-title'
                            to="/"
                            style={{
                                fontSize: '18px',
                            }}>
                            Home
                        </Link>
                    </h3>

                    {/* Projects */}
                    {Object.entries(projects).map(([projectKey, { title, models, conceptArt }]) => (
                        <div key={projectKey} className="section">
                            {/* Chevron toggle button */}
                            <button onClick={() => toggleSection(projectKey)} className="section-chevron">
                                <span
                                    style={{
                                        display: 'inline-block',
                                        transition: 'transform 0.3s ease',
                                        transform: openSections[projectKey] ? 'rotate(90deg)' : 'rotate(0deg)'
                                    }}
                                >
                                    ▶
                                </span>
                            </button>

                            {/* Link to project page */}
                            <Link className="section-title" to={`/project/${projectKey}`}>
                                {title}
                            </Link>

                            {/* 3D Model links */}
                            {openSections[projectKey] && (
                                <ul style={{marginBottom: '1rem'}}
                                className="link-list">
                                    {models.map(({ title, id }) => {
                                        const modelId = id.split('/').pop()
                                        return (
                                            <li key={id}>
                                                <Link to={`/assets/${projectKey}/3d-models/${modelId}`}>{title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}

                            {/* Concept Art links */}
                            {openSections[projectKey] && (
                                <ul className="link-list">
                                    {conceptArt.map(({ title, id }) => {
                                        const modelId = id.split('/').pop()
                                        return (
                                            <li key={id}>
                                                <Link to={`/assets/${projectKey}/concept-art/${modelId}`}>{title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Toggle button */}
                <button
                    className={`sidebar-toggle ${collapsed ? 'rotated' : ''}`}
                    onClick={toggleSidebar}
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    ◀
                </button>

            </div>
        </aside>
    )
}

export default Sidebar
