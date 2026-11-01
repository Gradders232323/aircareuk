type ServiceIllustrationProps = { service: string };

export function ServiceIllustration({ service }: ServiceIllustrationProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {service === "01" ? (
        <>
          <path d="M23 14h34v52H23z" fill="var(--white)" />
          <path d="M31 10h18v9H31z" fill="var(--gold)" />
          <path d="m30 34 4 4 7-8M45 34h6M30 46h21M30 54h14" />
          <circle cx="57" cy="54" r="12" fill="var(--paper)" />
          <path d="m66 63 8 8M52 54l4 4 6-8" />
        </>
      ) : service === "02" ? (
        <>
          <rect x="10" y="20" width="59" height="29" rx="5" fill="var(--white)" />
          <path d="M17 29h26M17 39h45M23 44h33M56 28h6M19 56c-7 4 7 8 0 13M31 56c-7 4 7 8 0 13" />
          <path d="M65 48a10 10 0 0 0-13 12L42 70l6 6 10-10a10 10 0 0 0 12-13l-6 6-5-5z" fill="var(--gold)" />
        </>
      ) : (
        <>
          <rect x="14" y="16" width="51" height="48" rx="5" fill="var(--white)" />
          <path d="M14 28h51M23 22h10" />
          <circle cx="39" cy="45" r="14" />
          <path d="M39 33v24M27 45h24M31 37l16 16M31 53l16-16" stroke="var(--blue)" />
          <path d="m54 59 5 5 11-14" stroke="var(--red)" strokeWidth="4" />
        </>
      )}
    </svg>
  );
}
