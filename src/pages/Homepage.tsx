import CandidateCard from '../components/CandidateCard';
import { candidates } from '../data/candidates';

export default function HomePage() {
    return (
        <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
            {/* PRODUCE 스타일 로고 */}
            <img src="/public/images/president1-logo.png" alt="President1 로고" style={{ width: 200, marginBottom: '1rem' }} />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: 1 }}>PRESIDENT 1</h1>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>당신의 대통령에게 투표하세요!</p>

            {/* 후보자 리스트 */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                {candidates.map((c) => (
                    <CandidateCard key={c.id} name={c.name} party={c.party} image={c.image} />
                ))}
            </div>
        </div>
    );
}
