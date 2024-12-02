import React from 'react';
import styled from 'styled-components';

const InviteButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-family: "Cochin", sans-serif;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function CalendarInvite() {
  const generateICSContent = () => {
    const eventDetails = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//PIANIKA//Studio Session//EN
BEGIN:VEVENT
SUMMARY:In The Studio With: PIANIKA
DESCRIPTION:Join PIANIKA behind the scenes of two of her unreleased tracks, looking at shaker loops, Granulator pads, call and response patterns, and techniques for carving out space in the mix ✨
LOCATION:https://us06web.zoom.us/j/83632513595?pwd=Ox6af1pc7rhcOxLMEbtfniDsThWgam.1
DTSTART:20241204T210000Z
DTEND:20241204T223000Z
URL:https://us06web.zoom.us/j/83632513595?pwd=Ox6af1pc7rhcOxLMEbtfniDsThWgam.1
END:VEVENT
END:VCALENDAR`;

    return eventDetails;
  };

  const downloadICSFile = () => {
    const icsContent = generateICSContent();
    
    // Create a Blob with the ICS content
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    
    // Create a download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'In The Studio With: PIANIKA.ics';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <InviteButton 
      as="div" // Change to div to ensure onClick works
      onClick={downloadICSFile}
    >
      Add to Calendar
    </InviteButton>
  );
}

export default CalendarInvite;
