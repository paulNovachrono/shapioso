'use client';

import { useEffect, useState, useCallback } from 'react';
import { ChevronDown, X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastData {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastItemProps {
  toast: ToastData;
  onClose: (id: string) => void;
}

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const bgMap = {
  success:
    'bg-white border-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100',
  error:
    'bg-white border-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100',
  info:
    'bg-white border-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100',
};

const iconBgMap = {
  success: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
  error: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
  info: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400',
};

function ToastItem({ toast, onClose }: ToastItemProps) {
  const INITIAL_TIME = toast.duration ?? 15;
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(INITIAL_TIME);
  const [stopped, setStopped] = useState(false);
  const Icon = iconMap[toast.type];

  useEffect(() => {
    if (!visible || stopped) return;

    if (count === 0) {
      setVisible(false);
      setTimeout(() => onClose(toast.id), 300);
      return;
    }

    const timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, stopped, visible, toast.id, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`w-[360px] rounded-2xl p-4 shadow-xl border transition-all duration-300 ${bgMap[toast.type]}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${iconBgMap[toast.type]}`}>
            <Icon size={18} />
          </div>
          <p className="font-medium">{toast.title}</p>
        </div>

        <div className="flex gap-3 items-center">
          {toast.description && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="transition-transform duration-300 hover:rotate-180"
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}

          <button
            onClick={() => {
              setVisible(false);
              setTimeout(() => onClose(toast.id), 300);
            }}
            className="transition-transform duration-300 hover:rotate-12"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {toast.description && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? 'max-h-40 mt-4' : 'max-h-0'
          }`}
        >
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
            {toast.description}
          </p>
          <button
            onClick={() => setExpanded(false)}
            className="px-3 py-2 rounded-lg text-sm border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            Okay
          </button>
        </div>
      )}

      {!stopped && (
        <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          This will close in{' '}
          <span className="font-bold">{count}</span> seconds.{' '}
          <span
            onClick={() => setStopped(true)}
            className="underline font-medium cursor-pointer hover:text-black dark:hover:text-white transition"
          >
            click to stop
          </span>
        </div>
      )}
    </div>
  );
}

export default ToastItem;
