import { useParams, Link } from 'react-router-dom'
import { projects } from '../../assets'

export default function ProjectPage() {
    const { projectId } = useParams<{ projectId: string }>()
    const base = import.meta.env.BASE_URL;
    const project = projects[projectId || '']

    if (!project) return <p>Project not found</p>

    return (
        <div className='page-content'>
            <h2 className='page-header'>{project.title}</h2>

            {/* Models Section */}
            {project.models.length > 0 && (
                <div>
                    <h3 className='page-subheader'>3D Models</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {project.models.map(model => {
                            const modelId = model.id.split('/').pop()
                            return (
                                <Link
                                    key={model.id}
                                    to={`/assets/${projectId}/3d-models/${modelId}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className='card'>
                                        {model.thumbnail && (
                                            <img
                                                src={`${base}${model.thumbnail}`}
                                                alt={model.title}
                                                className='thumbnail-image'
                                            />
                                        )}
                                        <h4 className='card-title'>{model.title}</h4>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* Concept Art Section */}
            {project.conceptArt.length > 0 && (
                <div>
                    <h3 className='page-subheader'>Concept Art</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {project.conceptArt.map(art => {
                            const artId = art.id.split('/').pop()
                            return (
                                <Link
                                    key={art.id}
                                    to={`/assets/${projectId}/concept-art/${artId}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className='card'>
                                        {art.thumbnail && (
                                            <img
                                                src={`${base}${art.thumbnail}`}
                                                alt={art.title}
                                                className='thumbnail-image'
                                            />
                                        )}
                                        <h4 className='card-title'>{art.title}</h4>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}