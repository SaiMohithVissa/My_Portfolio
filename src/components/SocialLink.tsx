import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
}

export function SocialLink({ icon: Icon, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}