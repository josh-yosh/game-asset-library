import { projects } from '../../assets'
import { Link } from 'react-router-dom'

const base = import.meta.env.BASE_URL;

export default function HomePage() {
    return (
        <div className='page-content'>
            <h2>Projects</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {Object.entries(projects).map(([key, { title, thumbnail }]) => (
                    <Link key={key} to={`/project/${key}`} style={{ textDecoration: 'none' }}>
                        <div className='card'>
                            {thumbnail && (
                                <img
                                    src={`${base}${thumbnail}`}
                                    alt={title}
                                    className='thumbnail-image'
                                />
                            )}
                            <h4>{title}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
