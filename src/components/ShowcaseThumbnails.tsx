const gridPattern = (
  <g stroke="#131315" strokeWidth="0.5" opacity="0.08">
    {Array.from({ length: 12 }, (_, i) => (
      <line key={`v-${i}`} x1={i * 32} y1="0" x2={i * 32} y2="240" />
    ))}
    {Array.from({ length: 8 }, (_, i) => (
      <line key={`h-${i}`} x1="0" y1={i * 32} x2="384" y2={i * 32} />
    ))}
  </g>
);

export function AuraInteriorsThumbnail() {
  return (
    <svg viewBox="0 0 384 240" fill="none" className="w-full h-full">
      <rect width="384" height="240" fill="#F5F5F4" />
      {gridPattern}
      <rect x="40" y="40" width="120" height="160" fill="#FF5E00" opacity="0.12" />
      <rect x="180" y="80" width="160" height="120" fill="#ab897d" opacity="0.1" />
      <circle cx="260" cy="100" r="30" fill="#FF5E00" opacity="0.2" />
      <rect x="40" y="180" width="300" height="2" fill="#131315" opacity="0.08" />
      <rect x="40" y="190" width="180" height="4" fill="#131315" opacity="0.15" />
      <rect x="40" y="200" width="120" height="3" fill="#131315" opacity="0.08" />
    </svg>
  );
}

export function CoolFixWebThumbnail() {
  return (
    <svg viewBox="0 0 384 240" fill="none" className="w-full h-full">
      <rect width="384" height="240" fill="#F5F5F4" />
      <rect x="20" y="20" width="344" height="30" fill="#131315" opacity="0.06" />
      <circle cx="40" cy="35" r="6" fill="#FF5E00" opacity="0.6" />
      <circle cx="60" cy="35" r="6" fill="#ab897d" opacity="0.4" />
      <circle cx="80" cy="35" r="6" fill="#131315" opacity="0.1" />
      <rect x="20" y="65" width="100" height="155" fill="#ab897d" opacity="0.08" />
      <rect x="135" y="65" width="229" height="60" fill="#FF5E00" opacity="0.08" />
      <rect x="135" y="140" width="105" height="80" fill="#131315" opacity="0.05" />
      <rect x="255" y="140" width="109" height="80" fill="#131315" opacity="0.05" />
    </svg>
  );
}

export function IronPeakThumbnail() {
  return (
    <svg viewBox="0 0 384 240" fill="none" className="w-full h-full">
      <rect width="384" height="240" fill="#F5F5F4" />
      <polygon points="192,30 340,200 44,200" fill="#FF5E00" opacity="0.1" />
      <polygon points="192,60 300,200 84,200" fill="#FF5E00" opacity="0.15" />
      <polygon points="192,90 260,200 124,200" fill="#FF5E00" opacity="0.2" />
      <rect x="40" y="210" width="300" height="2" fill="#131315" opacity="0.08" />
      <rect x="40" y="218" width="140" height="4" fill="#131315" opacity="0.12" />
    </svg>
  );
}

export function KallakuriKitchenThumbnail() {
  return (
    <svg viewBox="0 0 384 240" fill="none" className="w-full h-full">
      <rect width="384" height="240" fill="#F5F5F4" />
      <circle cx="120" cy="100" r="60" fill="#FF5E00" opacity="0.1" />
      <circle cx="120" cy="100" r="40" fill="#FF5E00" opacity="0.15" />
      <circle cx="120" cy="100" r="20" fill="#FF5E00" opacity="0.25" />
      <rect x="220" y="60" width="120" height="8" fill="#131315" opacity="0.12" />
      <rect x="220" y="80" width="90" height="4" fill="#131315" opacity="0.08" />
      <rect x="220" y="92" width="100" height="4" fill="#131315" opacity="0.08" />
      <rect x="220" y="120" width="120" height="40" fill="#ab897d" opacity="0.1" />
      <rect x="40" y="190" width="300" height="2" fill="#131315" opacity="0.08" />
      <rect x="40" y="200" width="160" height="4" fill="#131315" opacity="0.12" />
    </svg>
  );
}

export function SmileCareThumbnail() {
  return (
    <svg viewBox="0 0 384 240" fill="none" className="w-full h-full">
      <rect width="384" height="240" fill="#F5F5F4" />
      <rect x="40" y="40" width="300" height="160" fill="#FAFAF9" />
      <rect x="40" y="40" width="300" height="30" fill="#FF5E00" opacity="0.1" />
      <circle cx="60" cy="55" r="8" fill="#FF5E00" opacity="0.3" />
      <rect x="80" y="52" width="100" height="6" fill="#131315" opacity="0.12" />
      <rect x="60" y="90" width="120" height="6" fill="#131315" opacity="0.1" />
      <rect x="60" y="104" width="260" height="3" fill="#131315" opacity="0.06" />
      <rect x="60" y="114" width="200" height="3" fill="#131315" opacity="0.06" />
      <rect x="60" y="140" width="80" height="24" fill="#FF5E00" opacity="0.15" />
      <rect x="240" y="90" width="80" height="80" fill="#ab897d" opacity="0.08" />
    </svg>
  );
}
