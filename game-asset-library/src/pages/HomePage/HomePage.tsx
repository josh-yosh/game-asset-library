import { projects } from '../../assets'
import { Link } from 'react-router-dom'

const base = import.meta.env.BASE_URL;

export default function HomePage() {
    return (
        <div>
            <h2>Projects</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {Object.entries(projects).map(([key, { title, thumbnail }]) => (
                    <Link key={key} to={`/project/${key}`} style={{ textDecoration: 'none' }}>
                        <div style={{ border: '1px solid #ccc', padding: '1rem', width: '150px' }}>
                            {thumbnail && (
                                <img
                                    src={`${base}/${thumbnail}`}
                                    alt={title}
                                    style={{ width: '100%', height: '100px', objectFit: 'cover' }}
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
