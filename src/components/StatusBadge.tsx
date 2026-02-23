export interface StatusBadgeProps {
  /** The text to display inside the badge */
  label: string;
  /** The visual style of the badge */
  variant?: 'success' | 'warning' | 'error' | 'info';
  /** Should the badge have a pulse animation? */
  isLive?: boolean;
}

const StatusBadge = ({ 
  label, 
  variant = 'info', 
  isLive = false 
}: StatusBadgeProps) => {
  const colors = {
    success: { bg: '#def7ec', text: '#03543f', dot: '#31c48d' },
    warning: { bg: '#fdf6b2', text: '#723b13', dot: '#e3a008' },
    error: { bg: '#fde8e8', text: '#9b1c1c', dot: '#f05252' },
    info: { bg: '#e1effe', text: '#1e429f', dot: '#3f83f8' },
  };

  const style = colors[variant];

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: '16px',
      fontSize: '14px',
      fontWeight: '600',
      fontFamily: 'sans-serif',
      backgroundColor: style.bg,
      color: style.text,
    }}>
      {isLive && (
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: style.dot,
          marginRight: '8px',
          display: 'inline-block'
        }} />
      )}
      {label}
    </div>
  );
};

export default StatusBadge;