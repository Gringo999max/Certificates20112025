import { FooterVariants } from './FooterVariants'

interface FooterProps {
  onNavigateToHome?: () => void
  onNavigateToGiftOptions?: () => void
  onNavigateToDelivery?: () => void
  onNavigateToCorporate?: () => void
  onNavigateToReviews?: () => void
  onNavigateToAbout?: () => void
  onNavigateToActivation?: () => void
  onNavigateToHowItWorks?: () => void
}

/**
 * Footer component - uses variant 5 (двухуровневый с яркими акцентами)
 * Features:
 * - Two-level design: white top + dark bottom
 * - Green border on top (4px)
 * - Decorative background circles
 * - Animated lines before links
 * - Large social media buttons (Telegram + VK)
 * - Auto-updating year range (2019–current year)
 */
export function Footer(props: FooterProps) {
  return <FooterVariants variant="v5" {...props} />
}

export default Footer