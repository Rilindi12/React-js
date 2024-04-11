import './ComingSoon.css';

export default function ComingSoon ({icon,desctription}) {
  return (
    <div className="coming-soon">
        <span>{icon}</span>
        <h3>{desctription}</h3>
    </div>
  )
}