import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const SocialLinks = () => {
  const socials = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' }
  ];

  return (
    <div
      className="social-links"
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        zIndex: 99999,
        display: 'flex',
        gap: '15px',
        flexDirection: 'row'
      }}
    >
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid rgba(179, 136, 235, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.6)',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            background: 'rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#b388eb';
            e.currentTarget.style.color = '#b388eb';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(179, 136, 235, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(179, 136, 235, 0.3)';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
};
