import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';

const Toast = () => {
  const { toast } = useRegistration();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={20} color="var(--success)" />,
    error: <AlertCircle size={20} color="var(--danger)" />,
    info: <Info size={20} color="var(--secondary)" />
  };

  return (
    <div className="toast-container">
      <div className={`toast toast-${toast.type || 'info'}`}>
        {icons[toast.type] || icons.info}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;

