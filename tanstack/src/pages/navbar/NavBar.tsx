import MenuItem from '../../components/navbar/MenuItem';

export default function NavBar() {
  return <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem' }}>
        <MenuItem to="/" end>All Quotes</MenuItem>
        <MenuItem to="/single">Single Quote</MenuItem>
        <MenuItem to="/create">Submit Review</MenuItem>
    </nav>
};