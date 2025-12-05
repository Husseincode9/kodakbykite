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
  const [isClient, setIsClient] = useState(false);

  // Initialize after hydration
  useEffect(() => {
    setIsClient(true);
    // Set to actual current date
    setCurrentDate(new Date());
    
    // Set static events (only you can modify these through code)
    const staticEvents: Event[] = [
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
      },
      {
        id: 'egypt-cairo-hurghada-1',
        title: '🇪🇬 Egypt',
        date: '2025-12-16',
        color: '#FFA500'
      },
      {
        id: 'egypt-cairo-hurghada-2',
        title: '🇪🇬 Egypt',
        date: '2025-12-17',
        color: '#FFA500'
      },
      {
        id: 'egypt-cairo-hurghada-3',
        title: '🇪🇬 Egypt',
        date: '2025-12-18',
        color: '#FFA500'
      },
      {
        id: 'egypt-cairo-hurghada-4',
        title: '🇪🇬 Egypt',
        date: '2025-12-19',
        color: '#FFA500'
      },
      {
        id: 'egypt-cairo-hurghada-5',
        title: '🇪🇬 Egypt',
        date: '2025-12-20',
        color: '#FFA500'
      },
      {
        id: 'egypt-cairo-hurghada-6',
        title: '🇪🇬 Egypt',
        date: '2025-12-21',
        color: '#FFA500'
      },
      {
        id: 'egypt-cairo-hurghada-7',
        title: '🇪🇬 Egypt',
        date: '2025-12-22',
        color: '#FFA500'
      },
      {
        id: 'egypt-cairo-hurghada-8',
        title: '🇪🇬 Egypt',
        date: '2025-12-23',
        color: '#FFA500'
      },
      {
        id: 'egypt-cairo-hurghada-9',
        title: '🇪🇬 Egypt',
        date: '2025-12-24',
        color: '#FFA500'
      }
    ];
    
    setEvents(staticEvents);
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
    <section style={{ 
      padding: '2rem 1rem', 
      backgroundColor: '#000000', 
      color: '#FFFFFF', 
      position: 'relative', 
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      <style jsx>{`
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.25rem;
        }
        @media (max-width: 768px) {
          .calendar-grid {
            grid-template-columns: repeat(7, minmax(0, 1fr));
            gap: 0.125rem;
          }
          .calendar-day {
            min-height: 60px !important;
            padding: 0.25rem !important;
            font-size: 0.8rem !important;
          }
          .calendar-day-number {
            font-size: 0.7rem !important;
          }
          .calendar-event {
            font-size: 0.6rem !important;
            padding: 0.1rem 0.2rem !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            min-width: 0 !important;
            width: 100% !important;
          }
          .day-header {
            font-size: 0.7rem !important;
            padding: 0.5rem 0.25rem !important;
          }
        }
        @media (max-width: 480px) {
          .calendar-grid {
            gap: 0.1rem;
          }
          .calendar-day {
            min-height: 50px !important;
            padding: 0.2rem !important;
          }
          .day-header {
            font-size: 0.6rem !important;
            padding: 0.4rem 0.2rem !important;
          }
        }
      `}</style>
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
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem', 
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
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <button
            onClick={goToPreviousMonth}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#111111',
              border: '2px solid #FFD700',
              borderRadius: '0.5rem',
              color: '#FFD700',
              cursor: 'pointer',
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              minWidth: '80px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
            }}
          >
            ← Prev
          </button>

          <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 3.5vw, 2rem)', 
              fontWeight: 'bold', 
              margin: '0',
              color: '#FFFFFF'
            }}>
              {monthNames[currentMonth]} {currentYear}
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            <button
              onClick={goToToday}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#111111',
                border: '2px solid #333333',
                borderRadius: '0.5rem',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                minWidth: '60px'
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
                padding: '0.5rem 1rem',
                backgroundColor: '#111111',
                border: '2px solid #FFD700',
                borderRadius: '0.5rem',
                color: '#FFD700',
                cursor: 'pointer',
                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                minWidth: '80px'
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
              <div key={day} className="day-header" style={{
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
          <div className="calendar-grid">
            {calendarDays.map((dayData, index) => (
              <div key={index} className="calendar-day" style={{
                minHeight: 'clamp(80px, 15vw, 120px)',
                padding: '0.5rem',
                border: '1px solid #333333',
                borderRadius: '0.5rem',
                backgroundColor: dayData ? '#111111' : 'transparent',
                cursor: dayData ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
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
                    <div className="calendar-day-number" style={{
                      fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
                      fontWeight: 'bold',
                      color: dayData.isToday ? '#FFD700' : '#FFFFFF',
                      marginBottom: '0.25rem',
                      textAlign: 'center'
                    }}>
                      {dayData.day}
                    </div>
                    
                    {/* Events for this day */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', width: '100%', minWidth: 0 }}>
                      {dayData.events.map(event => (
                        <div key={event.id} className="calendar-event" style={{
                          backgroundColor: event.color,
                          color: '#000000',
                          padding: '0.2rem 0.4rem',
                          borderRadius: '0.25rem',
                          fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                          fontWeight: '600',
                          cursor: 'pointer',
                          position: 'relative',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%',
                          minWidth: 0
                        }}
                        title={event.title}
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

      </div>
    </section>
  );
}

