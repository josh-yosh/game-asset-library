import { useParams, Link } from 'react-router-dom'
import { projects } from '../../assets'

export default function ProjectPage() {
    const { projectId } = useParams<{ projectId: string }>()
    const base = import.meta.env.BASE_URL;
    const project = projects[projectId || '']

    if (!project) return <p>Project not found</p>

    return (
        <div>
            <h2>{project.title}</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {project.models.map(model => {
                    const modelId = model.id.split('/').pop()
                    return (
                        <Link
                            key={model.id}
                            to={`/models/${projectId}/${modelId}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <div style={{ border: '1px solid #ccc', padding: '1rem', width: '150px' }}>
                                {model.thumbnail && (
                                    <img
                                        src={`${base}/${model.thumbnail}`}
                                        alt={model.title}
                                        style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                                    />
                                )}
                                <p>{model.title}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
