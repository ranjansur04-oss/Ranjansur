import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 70,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/unique_higher_secondary_school_logo.svg"
        alt="Unique Higher Secondary School Official Logo"
        width={size}
        height={size}
        className="shrink-0 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105 select-none align-middle"
        style={{ maxHeight: `${size + 15}px`, width: 'auto' }}
      />

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-base md:text-lg leading-tight tracking-tight text-[#0b1f3a] uppercase font-serif">
            UNIQUE
          </span>
          <span className="text-xs md:text-sm font-bold tracking-wider text-blue-800 uppercase">
            HIGHER SECONDARY SCHOOL
          </span>
          <span className="text-[11px] font-semibold text-amber-700">
            Bijunagar, Kuakhia, Jajpur
          </span>
        </div>
      )}
    </div>
  );
};
