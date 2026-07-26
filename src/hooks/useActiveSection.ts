import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently under the fixed nav.
 *
 * Uses scroll position rather than IntersectionObserver ratios: sections here vary
 * a lot in height, so "most visible" picks the tallest section rather than the one
 * the reader is actually looking at. Instead we take the last section whose top has
 * passed the nav's bottom edge.
 *
 * @param ids  Section ids in document order.
 * @returns    The active id, or '' when above the first section.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!ids.length) return

    let frame = 0

    const compute = () => {
      frame = 0

      const navH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
          10,
        ) || 86
      // A little past the nav edge so a section counts as active slightly before
      // its heading is flush against the bar.
      const line = navH + 24

      // Bottom of the page can't scroll far enough to bring short trailing
      // sections under the line — force the last one active there.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2

      if (atBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) current = id
        else break
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
