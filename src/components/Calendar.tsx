"use client";
import { useState, useEffect } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  color: string;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [newEventTitle, setNewEventTitle] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Initialize after hydration
  useEffect(() => {
    setIsClient(true);
    // Set to actual current date
    setCurrentDate(new Date());
    
    // Italy trip is September 25-29, 2025
    const italyTripEvents: Event[] = [
      {
        id: 'italy-rome-1',
        title: '🇮🇹 Rome',
        date: '2025-09-25',
        color: '#FF6B6B'
      },
      {
        id: 'italy-rome-2',
        title: '🇮🇹 Rome',
        date: '2025-09-26',
        color: '#FF6B6B'
      },
      {
        id: 'italy-pisa-genoa',
        title: '🇮🇹 Pisa & Genoa',
        date: '2025-09-27',
        color: '#4ECDC4'
      },
      {
        id: 'italy-milan-1',
        title: '🇮🇹 Milan',
        date: '2025-09-28',
        color: '#45B7D1'
      },
      {
        id: 'italy-milan-2',
        title: '🇮🇹 Milan',
        date: '2025-09-29',
        color: '#45B7D1'
      }
    ];

    setEvents(italyTripEvents);
  }, []);

  // Get current month and year
  const currentMonth = currentDate?.getMonth() ?? new Date().getMonth();
  const currentYear = currentDate?.getFullYear() ?? new Date().getFullYear();

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  // Month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Event functions
  const addEvent = () => {
    if (newEventTitle.trim() && selectedDate) {
      const newEvent: Event = {
        id: Date.now().toString(),
        title: newEventTitle.trim(),
        date: selectedDate,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      };
      setEvents([...events, newEvent]);
      setNewEventTitle("");
      setSelectedDate("");
      setShowAddEvent(false);
    }
  };

  const deleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const openAddEvent = (date: string) => {
    setSelectedDate(date);
    setShowAddEvent(true);
  };

  // Get events for a specific date
  const getEventsForDate = (date: string) => {
    return events.filter(event => event.date === date);
  };

  // Check if date is today
  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  // Generate calendar days
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    calendarDays.push({
      day,
      dateString,
      isToday: isToday(day),
      events: getEventsForDate(dateString)
    });
  }

  // Show loading state during hydration
  if (!isClient) {
    return (
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#000000', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '2rem', 
            letterSpacing: '0.02em',
            color: '#DC143C',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}>
            CALENDAR
          </h2>
          <div style={{ 
            fontSize: '1.2rem', 
            color: '#c7c7c7' 
          }}>
            Loading calendar...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '4rem 1.5rem', backgroundColor: '#000000', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        <div style={{ 
          position: 'absolute', 
          left: 'max(-10%, -50px)', 
          top: '10%', 
          width: 'min(40%, 200px)', 
          height: 'min(40%, 200px)', 
          backgroundColor: '#FFD700', 
          borderRadius: '50% 48% 52% 50% / 62% 60% 42% 40%', 
          transform: 'rotate(-20deg)', 
          opacity: 0.3 
        }} />
        <div style={{ 
          position: 'absolute', 
          right: 'max(-8%, -40px)', 
          bottom: '15%', 
          width: 'min(35%, 180px)', 
          height: 'min(35%, 180px)', 
          backgroundColor: '#DC143C', 
          borderRadius: '55% 45% 50% 45% / 60% 55% 45% 40%', 
          transform: 'rotate(25deg)', 
          opacity: 0.3 
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem', 
          textAlign: 'center', 
          letterSpacing: '0.02em',
          color: '#DC143C',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
        }}>
          CALENDAR
        </h2>

        {/* Calendar Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <button
            onClick={goToPreviousMonth}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#111111',
              border: '2px solid #FFD700',
              borderRadius: '0.5rem',
              color: '#FFD700',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
            }}
          >
            ← Previous
          </button>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              margin: '0',
              color: '#FFFFFF'
            }}>
              {monthNames[currentMonth]} {currentYear}
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={goToToday}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#111111',
                border: '2px solid #333333',
                borderRadius: '0.5rem',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFD700';
                e.currentTarget.style.color = '#FFD700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333333';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              Today
            </button>
            <button
              onClick={goToNextMonth}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#111111',
                border: '2px solid #FFD700',
                borderRadius: '0.5rem',
                color: '#FFD700',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#111111';
              }}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div style={{
          backgroundColor: '#0a0a0a',
          borderRadius: '1rem',
          padding: '1.5rem',
          border: '2px solid #1f1f1f',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}>
          {/* Day Headers */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)', 
            gap: '0.5rem', 
            marginBottom: '1rem' 
          }}>
            {dayNames.map(day => (
              <div key={day} style={{
                padding: '1rem',
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#FFD700',
                fontSize: '1.1rem',
                letterSpacing: '0.05em'
              }}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)', 
            gap: '0.5rem' 
          }}>
            {calendarDays.map((dayData, index) => (
              <div key={index} style={{
                minHeight: '120px',
                padding: '0.75rem',
                border: '1px solid #333333',
                borderRadius: '0.5rem',
                backgroundColor: dayData ? '#111111' : 'transparent',
                cursor: dayData ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onClick={() => dayData && openAddEvent(dayData.dateString)}
              onMouseEnter={(e) => {
                if (dayData) {
                  e.currentTarget.style.borderColor = '#FFD700';
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }
              }}
              onMouseLeave={(e) => {
                if (dayData) {
                  e.currentTarget.style.borderColor = '#333333';
                  e.currentTarget.style.backgroundColor = '#111111';
                }
              }}
              >
                {dayData && (
                  <>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: dayData.isToday ? '#FFD700' : '#FFFFFF',
                      marginBottom: '0.5rem',
                      textAlign: 'center'
                    }}>
                      {dayData.day}
                    </div>
                    
                    {/* Events for this day */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {dayData.events.map(event => (
                        <div key={event.id} style={{
                          backgroundColor: event.color,
                          color: '#000000',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.25rem',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteEvent(event.id);
                        }}
                        title="Click to delete"
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add Event Modal */}
        {showAddEvent && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={() => setShowAddEvent(false)}
          >
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '2rem',
              borderRadius: '1rem',
              border: '2px solid #FFD700',
              maxWidth: '400px',
              width: '100%'
            }}
            onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ 
                color: '#FFD700', 
                marginBottom: '1rem', 
                textAlign: 'center',
                fontSize: '1.5rem'
              }}>
                Add Event for {selectedDate}
              </h3>
              <input
                type="text"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                placeholder="Event title..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#111111',
                  border: '2px solid #333333',
                  borderRadius: '0.5rem',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  marginBottom: '1rem'
                }}
                onKeyPress={(e) => e.key === 'Enter' && addEvent()}
              />
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setShowAddEvent(false)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#333333',
                    border: '2px solid #555555',
                    borderRadius: '0.5rem',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={addEvent}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#FFD700',
                    border: '2px solid #FFD700',
                    borderRadius: '0.5rem',
                    color: '#000000',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
