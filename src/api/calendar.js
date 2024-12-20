export default function handler(req, res) {
  const icsContent = `BEGIN:VCALENDAR
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

  res.setHeader('Content-Type', 'text/calendar');
  res.setHeader('Content-Disposition', 'attachment; filename="In The Studio With: PIANIKA.ics"');
  res.status(200).send(icsContent);
}
