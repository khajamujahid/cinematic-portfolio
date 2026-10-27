import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.fullName}</strong>
          <div>
            © {year} · {profile.shortTitle}
          </div>
        </div>
        <div>{profile.location}</div>
      </div>
    </footer>
  )
}
