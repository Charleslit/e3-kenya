import Image from "next/image"

interface FallbackLogoProps {
  className?: string
}

export function FallbackLogo({ className }: FallbackLogoProps) {
  return (
    <div className={className}>
      <Image
        src="/images/logo/elephant-logo.svg"
        alt="E3 Kenya Logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  )
} 