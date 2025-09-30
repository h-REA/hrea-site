import React from "react";
import "./Announcement.scss";

export interface AnnouncementProps {
  style: 'primary' | 'success' | 'warning' | 'info';
  icon?: string;
  text: string;
  actions: Array<{
    text: string;
    href: string;
    external: boolean;
    primary?: boolean;
  }>;
}

const Announcement: React.FC<AnnouncementProps> = ({
  style,
  icon,
  text,
  actions
}) => {
  return (
    <div className={`announcement announcement--${style}`}>
      <div className="announcement__content">
        {icon && <span className="announcement__icon">{icon}</span>}
        <span className="announcement__text">{text}</span>
      </div>
      
      {actions && actions.length > 0 && (
        <div className="announcement__actions">
          {actions.map((action, index) => (
            <a
              key={index}
              className={`announcement__action ${action.primary ? 'announcement__action--primary' : 'announcement__action--secondary'}`}
              href={action.href}
              target={action.external ? "_blank" : "_self"}
              rel={action.external ? "noopener noreferrer" : undefined}
            >
              {action.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Announcement;