// src/components/CandidateCard.tsx
type Props = {
    name: string;
    party: string;
    image: string;
};

export default function CandidateCard({ name, party, image }: Props) {
    return (
        <div style={{
            width: 180,
            padding: 16,
            borderRadius: 12,
            background: '#f9f9f9',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}>
            <img
                src={image}
                alt={name}
                style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 8,
                    marginBottom: 12,
                }}
            />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{name}</h3>
            <p style={{ color: '#999', marginTop: 4 }}>{party}</p>
        </div>
    );
}
