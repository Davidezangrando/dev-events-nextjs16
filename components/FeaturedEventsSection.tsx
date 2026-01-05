'use client';

import { useRef, useCallback } from 'react';
import posthog from 'posthog-js';
import EventCard from '@/components/EventCard';

interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

interface Props {
  events: Event[];
}

const FeaturedEventsSection = ({ events }: Props) => {
  const hasTrackedView = useRef(false);

  // Track view when section comes into view using onMouseEnter as a proxy
  // This avoids useEffect while still capturing meaningful engagement
  const handleSectionInteraction = useCallback(() => {
    if (!hasTrackedView.current) {
      posthog.capture('featured_events_viewed', {
        event_count: events.length,
        location: 'homepage'
      });
      hasTrackedView.current = true;
    }
  }, [events.length]);

  return (
    <div
      className="mt-20 space-y-7"
      onMouseEnter={handleSectionInteraction}
      onFocus={handleSectionInteraction}
      onTouchStart={handleSectionInteraction}
    >
      <h3>Featured Events</h3>

      <ul className="events">
        {events.map((event) => (
          <li key={event.title}>
            <EventCard {...event} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedEventsSection;
